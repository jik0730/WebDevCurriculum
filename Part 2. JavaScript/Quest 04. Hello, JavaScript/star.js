// var a = 3;
// var b = "bbb";
// var c = {
//     aaa: "aaa",
//     bbb: "bbb"
// }
// var d = [1, 2, 3, 4];



// console.log("fuck you");
// console.log(c["aaa"]);

function forloop() {
  for(var i=10; i>0; i-=2) {
    for(var j=0; j<i/2-1; j++) {
      document.write('&nbsp');
    }
    for(var j=0; j<11-i; j++) {
      document.write('*');
    }
    for(var j=0; j<i/2-1; j++) {
      document.write('&nbsp');
    }
    document.write('<br \>');
  }
}
