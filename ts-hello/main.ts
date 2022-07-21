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
// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e:number[]=[1,2,3];
// let f:any[]=[1,true,'k',false];

// const colorRed=0;
// const colorGreen=1;
// const colorBlue=2;

// enum Color{red=0,Green=1,Blue=2,purple=3};
// let backgroundColor=Color.red;



/*-------------------------*/



/* --Types--*/
// let message;
// message='abc';
// let endsWithC=(<string>message).endsWith('c');
// let alternativeWay=(message as string).endsWith('c');



/*-------------------------*/



/* -- Arrow Functions--*/
// let log =function(message: string){
//   console.log(message);

// }
// let doLog=()=>console.log();



/*-------------------------*/



// /* -- Interfaces--*/
// interface Point{
//   x:number,
//   y:number
// }

// let drawPoint=(point:Point)=>{
//   // ...
// }

// drawPoint({
//   x:1,
//   y:2
// })



/*-------------------------*/



// /* --Classes--*/
class Point{
  x: number | undefined;
  y: number| undefined;

draw(){
  console.log('X:'+ this.x + 'Y:'+this.y);

}
getDistance(another:Point){
  // ...
}


}

let point: Point;
// *****ERREUR*****
// point.draw();
