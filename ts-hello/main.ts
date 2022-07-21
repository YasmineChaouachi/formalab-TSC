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
let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,true,'k',false];

const colorRed=0;
const colorGreen=1;
const colorBlue=2;

enum Color{red=0,Green=1,Blue=2,purple=3};
let backgroundColor=Color.red;
