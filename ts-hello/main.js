/* --First TypeScript Program--*/
// function log(message: string){
//   console.log(message);
// }
// var message = 'hello world';
// log(message);



/*-------------------------*/



/* --Declaring Variables--*/
// function doSomething(){
//   for (var i=0 ;i<5; i++){
//     console.log(i);
//   }
//   console.log('Finally :' +i);
// }
// doSomething();



/*-------------------------*/



/* --Types--*/
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'k', false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
  Color[Color["red"] = 0] = "red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
  Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.red;
