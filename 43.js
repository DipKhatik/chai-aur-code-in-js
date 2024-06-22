JAVASCRIPT PRACTICE:-

 LET , VAR , CONST:-THREE TYPE OF KEY VARIABLES
 let , const = use in nowdays.
 var = old and global VARIABLES.

 how we can store data in memory and how can access therefore it divide into two category

 => PRIMITIVE                NON - PRIMTIVE(REFERENCE DATA TYPE)
 string = ""                         ARRAY = []
 bigint = 0n                        OBJECT = {} 
 boolean = t/f                     FUNCTION =  FUNCTION name(parameter){}name(arguments)
 number = 1,2,3                       heap
 null  =  object
 undefined  
 symbol =   unique value
  stack                              Q. JAVASCRIPT  language = dyanamic LANGUAGE

================================= DATATYPE ===============================================

 IF WE WANT KNOW DATA TYPE AFTER WRITE CODE WE CAN USE =  "TYPEOF"
 EX:- CONSOLE.LOG(TYPEOF DATATYPE)=> number,string,boolean

================================= CONVERSION ============================================
 DATATYPE  CONVERSION:-
 NUMBER TO STRING , STRING TO NUMBER , SAME AS BOOLEAN , ETC 
 
 FORMAT : - 
 LET DIP = 1,2,3,4;
 LET SUNNY =  STRING(DIP);
 CONSOLE.LOG(TYPEOF SUNNY) => STRING  
  
 ==>                                   CONVERSION:- 
.                                        "33abc"=NaN
.                                        "33" = 33
.                                        true = 1,-1,and any value.
.                                        false = 0,-0
.                                        null = 0
.                                        undefined = NaN
.                                        "" = false
.                                        "dip" = true
                                        
================================= OPERATOR MATHS ==========================================

==> ARITHMETIC:-                             increment and decrement
basic:                                        ++ = +1           
+                                             -- = -1            
-                                                          
*                                         => we can add to sting                   
/                                        console.log("2" + 2) => 22
%                                        console.log("hello" + "world") => hello world
** = POWER(3**3)=9                       console.log("2" + 2);            // prom string
.                                        console.log(2 + "2");            //prom string
.                                        console.log("1" + 2 + 2);        //prom string
.                                        console.log(2 + 1 + "1");        //add+ string

================================= MATHS RANDOM =========================================

Math.random() => BETWEEN 0 TO 1
Math.floor(Math.random() * 10) => BETWEEN 0 TO 9

=> min and max formula
const min = 
const max = 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

====================> NUMBER =============================
const score = 400;
const balance = new Number(100);
console.log(score);
console.log(balance);                          [ NUMBER : 100 ]
console.log(balance.toString().length);        100 = 3 => tostring().length 
console.log(balance.toFixed(2));               100.00 => tofixed()   "use for price"
toPercision(3)                                 23.895678 = 23.895
toLocaleString() coma ,,,                      100000 = 1,00,000

=============================> MATHS ============================
let val = -4;                            change negative value to postive
console.log(Math.abs(val));              postive to postive
console.log(Math.round(4.9));            round figure = 5
console.log(Math.ceil(4.3));             top value = 5
console.log(Math.floor(4.9));            lowest value = 4
console.log(Math.min(2,5,6,3,1,4,8));    minimum value = 1
console.log(Math.max(2,5,6,3,1,4,8));    maximum value = 8


================================= COMPARISION ==========================================

<!-- console.log(5==5); => 5=5
console.log(5>=6);      => 5>=6
console.log(5<=6);      => 5<=6
console.log(5!=6);       NOT EQUAL TOO
console.log(5>6);
console.log(5<6); -->

console.log(null > 0);  false
console.log(null == 0); false
console.log(null >= 0); true                 

undefined == false

================================= STRING ===============================================

let name = "devansh";

console.log(name.length);          = length show               orginal value not change
console.log(name.toUpperCase());   = capital
console.log(name.charAt(1));       = given number to find alpha postion
console.log(name.indexOf("p"));    = alpha to number in postion/ if alpha not present it gives -1;


let gameName = name.substring(0,3);             substring() =  last number value not included
console.log(gameName);
let Name = name.slice(-8,4);             slice() = her u can give neg value = reverse forma
console.log(Name);
console.log(newString);                 

.                It is used to for Remove space ex:- email,username

let newString = "   sunny   ";          trim() = extra space remove
console.log(newString.trim());

================>   replace the value

let url = "https://www.google.com/search?q=any+url&rlz=1C1R";
console.log(url.replace("+","-")); replace(,)= replace the element given two parameter
.                                             one remove , one that add
console.log(url.split('-')); split() =  convert into string 

================================= DATE =================================================
.                                       typeof object
const val = new Date()
console.log(val.toString());           =>Sun Jun 16 2024 18:16:05 GMT+0530 (India Standard Time)     
console.log(val.toISOString());        =>2024-06-16T12:46:05.218Z
console.log(val.toDateString());       =>Sun Jun 16 2024
console.log(val.toJSON());             =>2024-06-16T12:46:05.218Z
console.log(val.toLocaleString());     =>16/6/2024, 6:16:05 pm
console.log(val.toLocaleDateString()); =>16/6/2024

let myDate = new Date( 2027,0,5,5,56,6) manuldate => YR/MON/DAY/HR/MIN/SEC/MM

let timestamp = Date.now();      => a time from 1 jan 1970
console.log(timestamp);
console.log(myDate.getTime());

================================= ARRAY ================================================

shallow copy => A COPY SHARE WHOSE SAME REFERENCE POINT
deep copy => A COPY DON'T SHARE SAME REFERENCE POINT

DECLARTION :-
METHOD 1.     const myArr = [ 1 , 2 , 5 , 3 , 6];
.             const heroArr = ["shaktiman","thor","ranger"]
              
METHOD 2.     const arr = new Array(1,2,3,4);
.             console.log(arr[2]);


let arr = [1,2,2,3,4,5];
arr.push(6);              => PUSH      = adding elements.
arr.pop()                 => POP       = remove last element.
arr.unshift(5)            => UNSHIFT   = add element from start side.
arr.shift()               => SHIFT     = remove element from start side.
arr.includes(8)           => INCLUDES  = true or false
arr.indexOf(3)            => INDEXOF   = postion of element show / element not exist = -1;
arr.join()                => JOIN      = change array to string = data type change
console.log("A",arr);    => SLICE     = show value from given parameter start to end = last value not considered
console.log("B",arr.slice(1,3));
console.log("c",arr.splice(1,3)); => SPLICE = manipulate data = posion remove
let ans      = [1,2,2,3,4,5]
slice(1,3);  = [2,2]     => last element mot add
splice(1,3); = [2,2,3]   => add last element 

=================> ARRAY MERGE ======================
method 1. 
const marvelHero = ["hulk","thor","spiderman"];
const dcHero = ["batman","superman","wonderwoman"];     == concat() ==
const allHero = marvelHero.concat(dcHero);
console.log(allHero);
['hulk', 'thor', 'spiderman', 'batman', 'superman', 'wonderwoman' ]

method 2.
const newHero = [...marvelHero,...dcHero];        == ... => spread opertaor ==
console.log(newHero);                           GOOD FOR USE IN ARRAY
['hulk', 'thor', 'spiderman', 'batman', 'superman', 'wonderwoman' ]

=======================> NESTED ARRAY ==================
const arr = [1,2,[3,4],5,[4,5,[6,8,9]],7,8];
const newarr = arr.flat(Infinity); 
console.log(newarr);              => flat array it male single array in good syntax
[1,2,3,4,5,4,5,6,8,9,7,8]

=======================> Data scraping =============

means ek jaga se data ata hai in form of = string, array, object,node,number.
check or convert dono kar shakte hai.

check
console.log(Array.isArray("dip"));    => false

convert
console.log(Array.from("dip"));      => true


console.log(Array.from({name:"dip"}));   =>    [] empty array intersing

const score1 = 100;
const score2 = 200;                         [100,200,300]
const score3 = 300;

console.log(Array.of(score1,score2,score3));
=> change all variable,element into single array


================================= OBJECT ===============================================

1. singleton => koi be constructor se bana te hai toa single term object banega
 object.create() => constructor method
 .                dono object ko declare karne ka tarika hai

2. object literals :-

let mySym = Symbol("key");
const person = {
     key : value
    [mySym]: "key",
    name:"hitesh",  by deafault it's string => key = name / value kuch be ho shakti hai
    age:22,                                                 string, number, boolean,etc
    location:"delhi",
    email:"abc@gamil.com",
    isLoggedIn: false,
    looginDays:["mon","tue","wed"],
}
console.log(person.email);    not good way    both works but downward is good => . = "" not required
console.log(person["email"]); apporiate way  => [] = "" string required / if anyone had key in "" then it will give error in = . = dot notation.
console.log(person[mySym]);    symbol => [ ]  brackets in object + log to work
console.log(typeof (person[mySym]));

===================> manipulate data ==================
 person.email = "def@gamil.com";  . => dot notation for change value
 Object.freeze(person);      freeze() = object freeze => not allow to change value
 person.email = "ghi@gamil.com";
 console.log(person);


1. singleton :-

========================== Interview question ==============================
single term object     => const tinder = new Object(); // empty object it also an object
Non-single term object => const tinder = {}; 
console.log(tinder); = both ans => {}

const boy = {};
boy.name = "hitesh";
boy.age = 22;       ans:-    { name: 'hitesh', age: 22, location: 'delhi' }
boy.location = "delhi";
console.log(boy);       ================== BASICE OBJECTS COMPLETE =================

======================> NESTED OBJECT =============================

const reguser = {                           nested object = > object k andar object
    email : "abc@gamil.com",
    fullName:{
        username:{
            firstName:"hitesh",
            lastName:"kumar"
        }
    }
}
console.log(reguser.fullName.username); => { firstName: 'hitesh', lastName: 'kumar' }


=======================> object merge ============
**
onst obj1 = {1:"a",2:"b",3:"c"}      OBJECT.ASSIGN => OBJECT MERGE
const obj2 = {4:"a", 5:"b", 6:"c"}   {},target,source => copy all enumerable property
const obj3 = Object.assign({},obj1,obj2)

**
const obj3 = {...obj1,...obj2}        spread operator very good and esy work same
console.log(obj3);


================= database kuch be ayy ga toa arraynform mai hoga========================================

const database = [
    {
        name:"hitesh",
        age:22
    },                                           array ko use karne k liye object mai
    {
        name:"dip",
        age:22
    },
    {
        name:"sunny",
        age:22
    },
    {
        name:"devansh",
        age:22
    }
]

console.log(database[0].name);



console.log(Object.keys(boy));            NOW IT CONVERT INTO ARRAY U CAN USE AND PUT LOOPS ALSO
console.log(Object.values(boy));
console.log(Object.entries(boy));         ARAAY K ANADR Array HUR KEY:VALUE KO EK SEPRATE ARRAY MILA

console.log(boy.hasOwnProperty("nae"));   poperty check karne k liye hai k nahi => true / false

=====================> OBJECT DESTRUCTION ========================

const course = {
    courseName : " javascript",
    price:"999",
    trainer:"hitesh",
}

const {courseName : ins} = course  destructuring = manipulate data
console.log(ins);                  {},{:} synatx means destructuring

=====================> API ======================
    
API MEANS APNA KAAM KISI OR K UPPER DALNA


====================================== FUNCTION ==================================================

function myName(params) {   => function it's an package that store value on it
    console.log("d");
    console.log("i");       => 10 baar be print kar dega if u want
    console.log("p");
} ans:- d i p

myName();   => myName =  is reference / 
.                                () = execute => call karne k liye myName() both together

    ============================> method 1 =========================

function addNum(num1 ,num2) {       ( )  => upper brackets value is = parameter
    console.log(num1 +  num2); 
    
}

let result = addNum(2,3);  => value ayyi toa hai but return nahi hui
console.log(`result: ${result}`); => undefined
addNum(5,5)     => arguments not pass in bracket:----   / call => karwane pe argument 

=>  IN THIS FUNCTION IF WE STORE REFERENCE IN ANY VARIABLE 
    THEN IT GIVES UNDEFINED VALUE check ex upper

    ============================= method 2 ============================== 

    function addTwo(num1 , num2) {
        // let a = num1 + num2;     METHOD 1 =>  RETURN K BAAD KUCH BHI PRINT NHI HOGA FUNCTION COMPLETE
        // return a ; 
    
        return num1 + num2;         Method 2 => direct declare and return
    }
     const a = addTwo(5,10);        =>  VALUE RETURN KAREGE TOA HE VARIABLE MAIN USE KAR PAPPYE GEYE
     console.log(`result:${a}`);
    
.                                      default parameter 

function loginUserMessage(username = "sam") {      if you give default parameter value never be undefined
    if(!username){
        return "please provide username"          => ti use for null and undefined
    }
    return `${username} just logging in `
}
loginUserMessage("hitesh");                value a toa gye hai but print toa karye he nahi
console.log(loginUserMessage("sunny"));    its show how to pass parameter   =>  [passed value be overright]
console.log(loginUserMessage());           value/argument pass na karo toa => undefined

    =======================> RESET OPERATOR ====================
    function calculateCart(...num1) {         reset operator
        return num1 ;
    }
    console.log(calculateCart(200,300,500)); => 200,300,500


    function calculateCart(val1,val2,...num1) {  ==========================interview question =======================================
        return num1 ;                                  val1 and val2 takeover first two valuenon it.
    }
     console.log(calculateCart(200,300,500,4000)); [500,4000]

   ===========================> Object =======================
     let user= {
         name : "hitesh",
         price: 200
     }
     function objectHandler(anyobject){   anyobject for multiple object
         return`my name is ${anyobject.name} and my price is ${anyobject.price}`
     }
      console.log(objectHandler(user));   here you want too give object name on it
     
     
============================> ARRAY =============================
     
     const arr = [ 1 , 2 , 5 , 3 , 6];
     function samll(getArray) {
         return getArray[1];
         
     }
     console.log(samll(arr));
=========================== Scope ==============================

1. global scope:- {} such scope apply and work in whole program (windows,global).
2. local scope :- {} such scope apply and work only in that particular function. if/else also

example:-

=>LOCAL SCOPE:-
.             if(true){
.                let a = 4;
.                const b = 6;
.                var c = 7;
.            }
.                 console.log(a,b,c);
.                 console.log(c);

=> GLOBAL SCOPE :-                                                                                        
.               let A = 78;
.               const B = 45
.               var  C = 56;
.               if (true) {
.    
.                     console.log(A,B,C);
.                 }                                            ( block scope )
GLOBAL SCOPE:- mai declare variable kahi                         local scope:- mai declare variable function 
be call kara shakti hai               VAR= promblem hai kyuki                    ke andar he work kare ga
.                                    overight ho jaati hai values 

    
1. global scope
2. local scope
3. block scope
4. nested scope


================================ NESTED SCOPE =================================

function one(params) {                          => nested scope:- child can access parent variable.
    let name = "hitesh";                                  but parent can not access child variable.
    function two(params) {                   
        let website = "youtube.com";            => nested scope:- function k andar function.
        console.log(name);
        console.log(website);
    }
    two();
}
one()

============================== intersting ==========================================

simple function:-

myName();
function myName(params) {
    console.log("a");
}

Expression function:-

let one = function(params) {
    console.log("b");
    }
one();

========================================= ARROW FUNCTION =====================================================
 THIS => its used for curent context.
const sym = Symbol("key");
const user = {
    username : "hitesh",
    age : 22,
    location : "delhi",
    login : function(){
        console.log(`${this.username} just logged in`);
    console.log(this);
},
    [sym] : "key",
}
user.login() => current context refer karne k liye
console.log(this);


current context  always empty if nothing there
console.log(this);  {}

function k andar this used hoo toa both sari chize ayye  gye

function one(params) {
    const name = "hitesh";     function k andar this used hoo jisme mai variable  declare ho toa
    console.log(this.name);        undefeined value aayega ex :- console.log(this.name)
}                                  yea method siff object mai use hogga.
one()

const name = () => {           => arrow function:-
    let user = "dip"              Both are same function and same output's
    console.log(this);
}
name()


========================================  basice arrow function ==============================
()=>{}
    const addTwo = (num1,num2) =>{
            return num1 + num2;
    }

    console.log(addTwo(5,5));

    const addT = (num1,num2) => (num1 + num2) =>  IMPLICIT RETURN:- single line code
{} :- return keyword lhikna padega.           =>  EXPLICIT :- RETURN keyword lhikna pade ga
()   :- return keyword nhi lhikna padega.
    console.log(addT(5,6));
const addT = (num1,num2) => ({userName:"hitesh",age:22}) => IMPLICIT RETURN:- single line code for object





    
================================= IIFE =================================================

=> IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
 FORMAT:-
(function dip(params) {             //  NAMED IIFE ++++
    console.log("DB connected");
})();

()() => first is defination : second for execution.

================================ INTERVIEW QUESTION =========================================
  why we use IIFE ?
 global scope k pollution karna hum iife use karte hai.

 SEMI COLOUMN COMPLUSARY IN IIFE ;
 method 2:-

 ( (name)=> {
     console.log(`hello ${name}`);    //         SIMPLE IIFE +++++
 })("dip")

================================= LOOPS ================================================

=========================== IF STATEMENT =============================
if (2 === 2) {                 condition:- true then execute / false not execute
    console.log("execute");
} ans:- execute


=========================== IF ELSE STATEMENT =============================
let temperature = 30;
if (temperature < 50) {                 condition:- DONO MAI SE KOI BE EK EXECUTE HOGA
     console.log("too cold");
}
else {
     console.log("greater than 50");
}

=========================== ERROR HANDLING =============================
let score = 200 ; 
if (score > 100) {            scope k bhar kuch nhi jayye ga
    const power = "fly";
     console.log(`user have power to ${power}`);
}
 console.log(`user have power to ${power}`);  // error / but var mai error nhi dega


 const balance = 100;
if (balance > 500)  console.log("    buy something"); // no error + EMPLICITY CODE/ single line code
.                                                           , coma laga k multiple line lhik shakte hoo

=========================== NESTED IF STATEMENT =============================
=========================== ELSE IF STATEMENT ===============================
if (balance < 500) {
     console.log("less than 500");
}else if(balance < 750){
     console.log("less than 750");   
}else{
     console.log("greater than 750");
}

========================== real life use case =============================
========================== AND / OR OPERATOR =============================
const userLOGIN = true;
const debitCard = true;                     // both condition should be true:- &&
const loginGoogle = true;
const loginEmail = false;
if (userLOGIN && debitCard) {
     console.log(("u can purchased course"));
}
if( loginGoogle || loginEmail){     //  one condition should be true:- ||
     console.log("u can login");
}

========================== SWITCH STATEMENT =============================
switch (key) {
    case value:
        
        break;

    default:
        break;
}
===================== use case ===============
let month = 12;
switch (month) {
    case 1:
        console.log("january");         // if break not use then it will print all code
        break;                          // break can stop the control flow
    case 2:
        console.log("february");        // string are also work but check case sensitivity
        break;                          // ex:-      case "feb":
    case 3:                             //           console.log("february");       
        console.log("march");           //               break;
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
        default:
            console.log("month not found");
            break;
}

========================= truthy and falsy values ==========================

FALSEY VALUES                                                    TRUTHY VALUES
false                                                             true   
0                                                                 "0"
-0                                                                "false"
bigint(0n)                                                        "  ":- space hai bich mai
""                                                                 []
null                                                               {}
undefined                                                        function(){}:- empty function
NaN

false == 0 :- true
false == '' :- true
0 == '' :- true
if (0 == '') {
    console.log("equal");
}
===============================================>T/F

means that assume value which are true ya false
EXAMPLE:-

const userMAIL =[];        =>  no comparsion in condition if value given than true
if (userMAIL) {                                            =>   if value not given false ""
     console.log("u have email");                          =>     empty array [] = true
}else{
     console.log("u don't have email");
}
const userEMAIL ={}; 
if (Object.keys(userEMAIL).length === 0) {
     console.log("u have email");     => OBJECT METHOD HOW WORKS
}else{
      console.log("u don't have email");
}

========================= NULLISH COALESCING OPERATOR(??) ==========================
NULLISH COALESCING OPERATOR(??) :- null or undefined
let val; // safety checker
val = 5 ?? 10 ; 5
val = null ?? 10 ; 10
val = undefined ?? 10 ; 10
val = null ?? 10 ?? 20 ; //10
val = null ?? undefined; undefined
console.log(val);

========================= TERNARY OPERATOR ==========================
condition ? true : false => direct check kar shakte hoo
 
let chai = 100;
chai <=80 ?console.log("less than 80") : console.log("more than 80");

==================================== MAIN LOOPS ============================================================
LOOPS = Iterations
============================ FOR LOOP ================================
1.
for (let i = 0; i < 10; i++) {
     const element = i;
      console.log(element);
    
 }

 2.
 for (let i = 1; i <= 10; i++) {            loop k andar loop
    console.log(`Outer loop :${i}`);
   for (let j = 1 ; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j} `);    =>    table 1 to 10
       
   }
   
}

3.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected ${index}`);
       continue => ek barr skip kar k aage ka run kare ge ek galti mafa
       break => direct loop bhar jese condition true hoo
    }
    console.log(`value of i is :${index}`);

    
 }

 ================================== WHILE ================================
let index = 0;
while (index <= 10) {
     console.log(`value is ${index}`);
     index = index + 2;
}

let myArray = ['spiderman','lion','iron man'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`My Hero is ${myArray[arr]}`);
    arr = arr + 1
}

========================= DO WHILE ============================
phele kaam hoga free condition check hoge 
let score = 11 ;// kaam phele hota 
do {
    console.log(score);
    score++;
    
} while (score <= 10);

=================== FOR OF ====================
['','','']
[{},{},{}]

let arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

================== MAP ========================
const map = new Map()   // MAPS KNOW FROM UNIQUE VALUE NO DUPLICATE VALUE LOAD
map.set("IN","INDIAN") // insert order is also same 
map.set("USA","AMERICA")
map.set("FR","FRANCE")
 console.log(map)      => IT ONLY WORKS ON MAP NOY ANY OTHER OBJECT {}
for (const [key,values] of map) {
     console.log(key,":-",values);
}


================== FOR IN =======================
 NOW IT WORK ON OBJECT =>
    const myObject = {
        js : 'javascript',
        cpp : 'c++',
        ru : 'ruby',
        swift : ' swift in app'
    }
    for (const key in myObject) {
   console.log(`${key} : ${myObject[key]}`); -> key for key => object[key] for values
    }
const dec = ["py","js","c++","java","ruby"]
for (const key in dec) {
     console.log(key); => IN ARRAY ITS GIVES NUMBER KEY 0 1 2 3 4
     console.log(dec[key]); =>givs value
} => it not work on map for in loop


=================== FOR EACH ====================
let num = [1,2,3,4,5];                   MOT RETURN ANY VALUE IT GIVE NOTHING = UNDEFINED
num.forEach((item) => {// item,index,array
    console.log(item);
})

================= FLITER ======================
let num = [1,2,3,4,5,6,7,8,9,10];// vlaue => condition 
let newNum = num.filter((num) => num > 4 );
console.log(newNum);
fliter :- k andar har value ko each access kiya jaye ga then give condition wo value he return hoge 
{} => scope k andar return keyword use karna he padega

================= CHAINING ======================
num.map().map().filter() ex:-
let num = [1,2,3,4,5,6,7,8,9,10];
let newNum = num ; 
newNum = newNum
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40)
            console.log(newNum);

======================= REDUCE ===========================
const arr = [1,2,3,4,5,6,7,8,9,10];
const initialValue = 0;
reduce((accumulator,currentvalue) => acumulator + currentvalue,initialValue) 
currentvalue := JO ARRAY KI VALUE HAI
INITIALVALUE := 0
ACCUMULATOR := first time initialValue jayye gye 
       
let dip = 1 ;
let sunny =  String(dip);
console.log(typeof sunny)