// ❌ DANGEROUS: Loads the ENTIRE file into memory at once.
// Will crash with "JavaScript heap out of memory" on large files.

const fs = require('node:fs');
const path = require('node:path');
const v8 = require('node:v8');

const FILE = path.join(__dirname, 'assets/largefile.txt');

// --- Memory helpers ---
function getMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(1);
}
function printMemory(label) {
  const mem = process.memoryUsage();
  const heap = v8.getHeapStatistics();
  console.log(`\n📊 [${label}]`);
  console.log(`   RSS (total process):     ${getMB(mem.rss)} MB`);
  console.log(`   Heap used:               ${getMB(mem.heapUsed)} MB`);
  console.log(`   Heap total:              ${getMB(mem.heapTotal)} MB`);
  console.log(`   Heap size limit (v8):    ${getMB(heap.heap_size_limit)} MB`);
  console.log(`   External (Buffers):      ${getMB(mem.external)} MB`);
}

// --- Check file exists ---
if (!fs.existsSync(FILE)) {
  console.error('❌ largefile.txt not found. Run: node generate-file.js first');
  process.exit(1);
}

const fileSizeMB = fs.statSync(FILE).size / 1024 / 1024;
const heapLimitMB = v8.getHeapStatistics().heap_size_limit / 1024 / 1024;


console.log('======================================');
console.log('  ❌  fs.readFile — Dangerous Approach');
console.log('======================================\n');
console.log(`File size:       ${fileSizeMB.toFixed(1)} MB`);
console.log(`v8 Heap limit:   ${heapLimitMB.toFixed(1)} MB`);

if (fileSizeMB > heapLimitMB * 0.8) {
  console.log(`\n⚠️  WARNING: File (${fileSizeMB.toFixed(0)} MB) is close to or exceeds`);
  console.log(`   the v8 heap limit (${heapLimitMB.toFixed(0)} MB).`);
  console.log('   This process is very likely to crash.\n');
} else {
  console.log(`\n⚠️  File fits in heap but will consume ${fileSizeMB.toFixed(0)} MB of RAM at once.\n`);
}
printMemory('BEFORE readFile');

console.log('\n⏳ Calling fs.readFile — allocating entire file as one Buffer...');
console.log('   (Event loop is now occupied, no other work can run)\n');

const startTime = Date.now();


// ❌ THIS IS THE PROBLEM:
// fs.readFile reads the entire file into a single Buffer/string in memory.
// Node must allocate ONE contiguous block of RAM equal to the file size.
// If file size > v8 heap limit (~1.4 GB by default), this CRASHES the process.

fs.readFile(FILE, 'utf8', (err, data) => {
  if (err) {
    // This is what you see in the terminal when it OOMs:
    // FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
    console.error('\n💥 CRASH / ERROR during readFile:');
    console.error(`   ${err.message}\n`);

    if (err.code === 'ERR_STRING_TOO_LONG') {
      console.error('   The file is too large to fit in a JS string.');
      console.error('   Max string size in v8 is ~512 MB.\n');
    }

    console.log('Fix: Use fs.createReadStream instead (see safe-stream.js)');
    process.exit(1);
  }

  const elapsed = Date.now() - startTime;
   printMemory('AFTER readFile — entire file now in RAM');

  console.log(`\n✅ readFile completed in ${elapsed}ms`);
  console.log(`   data.length = ${(data.length / 1024 / 1024).toFixed(1)} MB held in memory`);
  console.log('\n⚠️  ALL of that RAM is occupied until GC runs.');
  console.log('   Meanwhile, no other requests could be served.\n');
});
// Demonstrate the event loop is blocked
// This interval CANNOT fire while readFile is consuming memory in the callback
let ticks = 0;
const ticker = setInterval(() => {
  ticks++;
  process.stdout.write(`\r   [event loop] ticked ${ticks} times while waiting...`);
}, 5000);

// The 'close' event fires after everything is done
process.on('exit', () => clearInterval(ticker));


