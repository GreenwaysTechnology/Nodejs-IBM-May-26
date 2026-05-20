// ✅ SAFE: Processes the file in small chunks.
// Memory stays flat (~64 KB) regardless of file size.

const fs = require('node:fs');
const path = require('node:path');
const v8 = require('node:v8');


const FILE = path.join(__dirname, 'assets/largefile.txt');
const CHUNK_SIZE = 64 * 1024; // 64 KB — only this much lives in RAM at a time

// --- Memory helpers ---
function getMB(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
}

function getKB(bytes) {
    return (bytes / 1024).toFixed(1);
}

function printMemory(label) {
    const mem = process.memoryUsage();
    console.log(`\n📊 [${label}]`);
    console.log(`   RSS:       ${getMB(mem.rss)} MB`);
    console.log(`   Heap used: ${getMB(mem.heapUsed)} MB`);
    console.log(`   External:  ${getMB(mem.external)} MB  ← Buffer memory (stays small!)`);
}

// --- Check file exists ---
if (!fs.existsSync(FILE)) {
    console.error('❌ largefile.txt not found. Run: node generate-file.js first');
    process.exit(1);
}

const fileSizeMB = fs.statSync(FILE).size / 1024 / 1024;
const heapLimitMB = v8.getHeapStatistics().heap_size_limit / 1024 / 1024;

console.log('======================================');
console.log('  ✅  fs.createReadStream — Safe Approach');
console.log('======================================\n');
console.log(`File size:         ${fileSizeMB.toFixed(1)} MB`);
console.log(`v8 Heap limit:     ${heapLimitMB.toFixed(1)} MB`);
console.log(`Chunk size:        ${getKB(CHUNK_SIZE)} KB`);
console.log(`Max RAM at once:   ~${getKB(CHUNK_SIZE * 3)} KB  (not ${fileSizeMB.toFixed(0)} MB!)`);

printMemory('BEFORE streaming');

console.log('\n⏳ Starting stream...\n');


const startTime = Date.now();
let chunkCount = 0;
let totalBytesRead = 0;
let peakHeap = 0;


// createReadStream reads one chunk at a time (default 64 KB).
// Node emits a 'data' event for each chunk, processes it, then moves on.
// The previous chunk is garbage collected before the next one arrives.
const stream = fs.createReadStream(FILE, {
    highWaterMark: CHUNK_SIZE, // how big each chunk is
    encoding: 'utf8',
});
stream.on('data', (chunk) => {
    chunkCount++;
    totalBytesRead += chunk.length;

    // Track peak heap
    const heapNow = process.memoryUsage().heapUsed;
    if (heapNow > peakHeap) peakHeap = heapNow;

    // Log progress every 500 chunks
    if (chunkCount % 500 === 0) {
        const pct = ((totalBytesRead / (fileSizeMB * 1024 * 1024)) * 100).toFixed(1);
        const mem = process.memoryUsage();
        process.stdout.write(
            `\r   chunk #${chunkCount.toLocaleString()} | ` +
            `${(totalBytesRead / 1024 / 1024).toFixed(1)} MB read (${pct}%) | ` +
            `heap: ${getMB(mem.heapUsed)} MB`
        );
    }
    // --- Do your actual work here per chunk ---
    // e.g. parse lines, pipe to another stream, write to DB, etc.
    // exampleWork(chunk);
});

// Fires once — all chunks processed
stream.on('end', () => {
    const elapsed = Date.now() - startTime;
    console.log('\n');
    printMemory('AFTER streaming — heap barely moved');
    console.log(`\n✅ Stream complete!`);
    console.log(`   Total bytes read:  ${(totalBytesRead / 1024 / 1024).toFixed(1)} MB`);
    console.log(`   Total chunks:      ${chunkCount.toLocaleString()}`);
    console.log(`   Peak heap:         ${getMB(peakHeap)} MB  (vs ${fileSizeMB.toFixed(0)} MB for readFile)`);
    console.log(`   Time elapsed:      ${elapsed}ms`);
    console.log('\n🎯 Key insight: peak heap was only ~' + getMB(peakHeap) + ' MB');
    console.log(`   regardless of the ${fileSizeMB.toFixed(0)} MB file size.`);
});

stream.on('error', (err) => {
    console.error('\n❌ Stream error:', err.message);
});

// Demonstrate event loop stays FREE during streaming
let ticks = 0;
const ticker = setInterval(() => {
    ticks++;
}, 100);

stream.on('end', () => {
    clearInterval(ticker);
    console.log(`\n   Event loop ticked ${ticks} times during the read.`);
    console.log('   Other requests could have been served concurrently. ✓');
});



