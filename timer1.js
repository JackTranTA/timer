process.argv.slice(2).forEach(x => {
  if (!isNaN(x) && x >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, x * 1000);
  }
});