// Creates a large test file to simulate reading

const fs = require('node:fs');
const path = require('node:path');

const TARGET_MB = 1500; // Change this — use 1500+ to guarantee crash on most systems
const OUTPUT_FILE = path.join(__dirname, 'assets/largefile.txt');

console.log(`Generating ${TARGET_MB} MB file at: ${OUTPUT_FILE}`);
console.log('This may take a few seconds...\n');

const stream = fs.createWriteStream(OUTPUT_FILE);
const chunkMB = 10;
const chunk = Buffer.alloc(chunkMB * 1024 * 1024, 'A'); // 10 MB of 'A' characters
const totalChunks = TARGET_MB / chunkMB;

let written = 0;
function writeNext() {
  let ok = true;
  while (written < totalChunks && ok) {
    written++;
    const progress = ((written / totalChunks) * 100).toFixed(0);
    process.stdout.write(`\r  Writing... ${progress}% (${written * chunkMB} MB / ${TARGET_MB} MB)`);
    ok = stream.write(chunk);
  }

  if (written < totalChunks) {
    stream.once('drain', writeNext); // backpressure handling
  } else {
    stream.end();
  }
}
stream.on('finish', () => {
  console.log(`\n\n✅ Done! File created: ${OUTPUT_FILE}`);
  const stats = fs.statSync(OUTPUT_FILE);
  console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(1)} MB`);
  console.log('\nNow run:');
  console.log('  node crash-readfile.js      ← will crash or eat RAM');
  console.log('  node safe-stream.js         ← stays lean');
});
stream.on('error', (err) => {
  console.error('Error generating file:', err.message);
});

function main() {
  writeNext();
}
main()


