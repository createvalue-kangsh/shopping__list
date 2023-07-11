'use strict';

//2. variable
//let(added in ES6)
console.log(age); //undefined

let globalName='global name';
{
let name='ellie';
console.log(name);
name='hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//어디에 선언했는지와 상관없이 항상 최상위로 끌어올리는 것을 말한다.
//변수를 선언하기 전에 값을 넣을 수 있다(원래 대로라면 오류이다)
//had no block scope (block을 무시하고 아무대서나 값이 튀어나온다.)

age=4;
var age;

//3.constant (immutable data type)
//favor immutable data type always for a few reasons;
// -security (보안성 증가)
//-thread safety
//-reduce human mistakes

const daysInWeek=7;
const maxNumber=5;
