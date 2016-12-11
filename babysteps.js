function sumArgs (args) {
  var total = 0;
  for (var i = 2; i < args.length; i++) {
    total += Number(args[i]);
  }
  return total;
}

console.log(sumArgs(process.argv));
