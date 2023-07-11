//function
// 프로그램을 구성하는 기본적인 building block이다.
//subprogram이라고 불리며 재사용이 가능하다.
//대체적으로 함수는 한 가지의 task나 값을 계산하기 위해 사용된다.

/*
1. function name (param1, param2) {body ... return;}
하나의 함수는 한 가지의 일 만할 수 있다.
이름짓기 : 동작하는 형태, 명령형, 동사형태로 이름 지정
js에서 함수는 객체이다.
*/

function printHello(){
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
/*
2. 값 parameters
기본형 매개변수 (primitive parameter) : 메모리에 값이 그대로 전달되어 있기 때문에 그대로 값이 전달된다.
매개변수 객체 (object parameter) : 메모리에 reference (참조)가 저장되어진다.
*/
function changeName(obj) {
    obj.name='coder'; //전달된 obj의 이름은 coder로 무조건적으로 바꾸는 함수이다.
   // ellie.ellie가 저장하고 있는 name을 coder로 변경하게 된다.
}
const ellie = {name:'ellie'};
//const obg=name
//ellie라는 const를 정의하고 ellie라는 obj를 만들어서 할당하면
//메모리에는 obj가 만들어진 reference가 메모리에 들어가게 되고 reference는 obj를 메모리 어딘가를 가리키고 있다. ???

changeName(ellie); //이것을 전달하게 되면

console.log(ellie); //ellie가 아닌 coder로 출력된다.

//obj는 reference로 전달되기 때문에 함수 안에서 obj를 변경하게 되면 그 변경된 사항이 메모리에 적용된다 
//-> 추후에 변경된 사항 확인이 가능하다. 

//3. default parameters (add in ES6)
function showMessage(message, from='unknown'){ //parameter = default (초기값)을 지정하면 사용자가 값을 전달하지 않을 때 초기값으로 대체되어서 사용된다.

    console.log(`${message} by ${from}`); // 메세지가 누구로부터 왔는 지 출력
}
showMessage('Hi!');

//4. rest parameters (add in ES6)
function printAll(...args){ // ... (닷 3개 = 배열 형태로 전달)
    for(let i=0; i<args.length; i++){
        //for 루프를 이용하여 arg의 개수만큼 반복하면서 인자 출력
        console.log(args[i]);
    }

    //for/of 문법을 사용하여 더 간단하게 출력
    for (const arg of args){
        //arg에 있는 모든 값들(args)이 하나씩 arg에 지정된다.
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg)); 
    //forEach <= 함수형 언어를 이용하여 더욱 쉽게 출력할 수 있다.
}
printAll('dream','coding','ellie'); 
//printAll 함수를 호출할 때 인자 3게 전달

//5.local scope 
//"밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage='global'; //global variable
function printMessage(){
    let message = 'hello'; //local variable
    console.log(globalMessage); //global 이 출력된다.
    function printAnother(){
        console.log(message); //message는 정의되어 있지 않다.
        let childMessage='hello';
    }//중첩된 함수문에서 자식 함수가 부모함수에 정의된 변수에 접근가능 한 것 : 클로저
    //console.log(childMessage); //childMessage는 지역변수이므로 이 구문은 출력되지 않는다.
    //error
    //return type이 없은 것들 = return undefined (생략가능)

}
printMessage (); //정의된 printMessage 함수를 실행한다.

//6.return a value
function sum(a, b){
    //함수에서는 (파라미터(a,b))로 값을 전달받아서
    return a+b;
    //계산된 값을 리턴한다.
}
const result = sum(1,2); //3
//모든 함수는 return undefined 이거나 return 값이 있다.
console.log(`sum:${sum(1,2)}`);

//7. Early return, early exit
/*
//bad
funtion upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
        //블록 안에 로직을 작성하면 가독성이 떨어진다.
        //if와 else를 번걸아가며 쓰는 것 보다는
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        //조건((user.point>10이 아닐 때)이 맞지 않을 때는 리턴을 해서 함수를 종료하고
        return;
    }
    //long upgrade logic
    //조건이 맞을 때는 블록을 나와서 필요한 로직을 실행한다.
}
*/

//1.function expression  함수 표현식
//함수 선언은 정의보다 일찍 호출될 수 있다. (hoisted)
//->함수가 선언되기 이전에 호출이 가능하다. =>js 엔진이 선언된 것을 제일 위로 올려주기에 가능하다.
//함수 표현식은 실행이 해당 표현식에 도달할 때 생성된다.


const print = function(){ //anonymous function  함수에 이름이 없는 것
    //함수를 print에 할당
    console.log('print');
};
print(); //함수를 호출하듯이 print를 호출하면 함수가 실행되어 print가 출력된다.
const printAgain=print; //다른 변수에 다시 할당하게 되면 
//printAgain은 함수를 가르킨다.
printAgain(); //함수를 호출하듯이 printAgain을 부르면 print가 출력된다.
const sumAgain=sum; 
//5번에서 만든 sum이라는 함수를 변수에 할당하면
console.log(sumAgain(1,3)); //sum함수가 실행된다.

//2. Callback function using function expression 함수 식을 사용한 콜백 함수
function randomQuiz(answer, printYes, printNo){
    if (answer==='love you'){
    printYes();
    }
    else{
        printNo();
    }
}
const printYes=function(){
    //anonymous function
    console.log('yes!');
};

const printNo=function print(){
    //named function
    //better debugging in debugger's stack traces 디버거 스택 추적에서 더 나은 디버깅
    //함수 안에서 자기 자신의 함수를 호출하는 것: recursions (피보나치 계산, 반복되는 동작 계산)
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function 화살표 함수
//always anonymous 항상 이름이 없다.
/*
const simplePrint=function (){
    console.log('simplePrint');
};
*/

//==> 화살표 함수로 바꾸면 이렇게 간단하다!
//const simplePrint=()=>console.log('simplePrint!');
const add =(a,b)=>a+b;
const simplePrint=(a,b)=>{ //a+b의 값을 리턴한다.

    //do something more
    return a*b;
};


//IIFE:Immediately Invoked Function Expression 즉시 호출된 함수식
(function hello(){
    console.log('IIFE');
} ) ();
//함수를 ()로 묶고 함수를 호출하듯 (); 하면 함수가 호출된다. 