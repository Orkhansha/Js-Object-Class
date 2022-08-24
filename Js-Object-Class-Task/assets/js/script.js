function Word(string) {
  let arr = [];
  let str = string;
  var words = str.split(" ");

  for (const item of words) {
    let n = item.length;
    arr.push(n);
  }

  console.log(arr);
}

Word("salam necesiz dostlar sagol");
