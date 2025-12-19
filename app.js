/*==================================== Question No 1 =========================================
find minimum by for loop
======================================= Answer =====================================*/

// let arr = [2,3,4,55,12,-2,5];
// let min = arr[0];
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min)


/*==================================== Question No 2 =========================================
find max by for loop
======================================= Answer =====================================*/
// let arr = [4,33,2,11,5];
// let max = arr[0];
// for(let i = 0;i < arr.length;i++){
//     // console.log(arr[i])
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)

/*==================================== Question No 3 =========================================
vowel gainer
======================================= Answer =====================================*/
// let str = 'hello';
// let vowel = str.match(/[aeiou]/gi).join('')
// console.log(vowel)


/*==================================== Question No 4 =========================================
vowel counter
======================================= Answer =====================================*/
// let str = 'hello';
// let vowel = str.match(/[aeiou]/gi).join('');
// let len = vowel.length;
// console.log(len)
// console.log(vowel)

/*==================================== Question No 5 =========================================
extract number from string
======================================= Answer =====================================*/
// let str = 'heL32osf8';
// str = str.toLowerCase()
// let num = str.match(/[0-9]/gi)
// // let ans = num.map(Number);
// num = num.join('')
// console.log(num);


// let char = str.match(/[a-z]/gi).join('')
// console.log(char)

/*==================================== Question No 6 =========================================
.test()

======================================= Answer =====================================*/
// //  let str = 'hello2';
// // let check = /\d/.test(str);
// // console.log(check)
// let str = 'hello2du7';
// let check = /\d/.test(str);
// console.log(check)

            // let str = 'hello2178dfhsa';
            // let need = str.match(/\d/g);
            // need = need.join('')
            // console.log(need)




/*==================================== Question No 7 =========================================
hashtag generator
======================================= Answer =====================================*/
// let val = prompt('enter name or word')

// function hashtag(str){
//     console.log(str)
//     let fist = str.charAt(0).toUpperCase();
//     console.log(fist);
//     let second = str.slice(1).toLowerCase();
//     console.log(second)
//     let full = fist + second;
//     console.log(full);
//     let ans = '#' + full;
//     console.log(ans)


// }

// hashtag(val)


/*==================================== Question No 8 =========================================
url generator
======================================= Answer =====================================*/
// function openWebsite(){let getInput = document.getElementById('userinput').value.trim();
//     document.getElementById('userinput').value = "";
//     document.getElementById('userinput').focus();
//     if(getInput !== ''){let fullUrl = "https://www." + getInput + ".com";
//         window.open(fullUrl,"_blank");
//     }
//     else{alert('plz enter website name')}

// }
// let val = prompt('enter web address like facebook');

// function openWebsite(val) {
//     val = val.trim();
//     console.log(val);

//     if (val) {
//         let fullUrl = 'https://' + val + '.com';
//         window.open(fullUrl, '_blank');
//     } else {
//         alert('enter web name');
//     }
// }

// openWebsite(val);



/*==================================== Question No 9 =========================================
reverse a number
======================================= Answer =====================================*/
// let num = 1234
// num = num.toString();
// let reverse = '';
// for(let i = num.length-1;i >=0;i--){
//     console.log(num[i])
//     reverse = reverse + num[i]
// }


// console.log(reverse)


/*==================================== Question No 10 =========================================
sum of digits
======================================= Answer =====================================*/
// let digit = 987;
// digit = digit + '';
// let sum = 0;
// for(let i = 0;i < digit.length;i++){
//     console.log(digit[i])
//     sum = sum + Number(digit[i])
// }

// console.log(sum)



/*==================================== Question No 11 =========================================
flatten in array
======================================= Answer =====================================*/
// let arr = [1,[2,[34,4],5]];
// let str = arr.join(',');
// console.log(str)

// // ar = ar.map(Number)
// console.log(ar)



/*==================================== Question No 12 =========================================
find missing number
======================================= Answer =====================================*/


// let arr = [1, 2, 4, 5];
// let missing = null;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== 1) {
//         missing = arr[i] + 1;
//         break;
//     }
// }

// console.log(missing);




/*==================================== Question No 12 =========================================
count the occerence of an element in array
======================================= Answer =====================================*/
// let arr = ['a','b','a','c','b','a'];

// let count = {};
// for(let i = 0;i < arr.length;i++){
//     let item = arr[i];
//     console.log(item)
//     if(count[item]){
//         count[item]++;
//     }
//     else{count[item] = 1}
// }
// console.log(count)

/*==================================== Question No 13 =========================================
print table by for loop
======================================= Answer =====================================*/
// for(let i = 1;i<=10;i++){
//     // console.log('5 * '+ i + '  ' + (5 *i))
//     console.log(i*5)
// }

/*==================================== Question No 14 =========================================
count the occerence
======================================= Answer =====================================*/
// let arr = ['a','b','c','b','a','d','e'];
// let count = {};
// for(let i = 0 ; i < arr.length;i++){
//     let item = arr[i];
//     console.log(item);
//     if(count[item]){
//         count[item]++;

//     }
//     else{
//         count[item] = 1
//     }
// }
// console.log(count)

/*==================================== Question No 15 =========================================
find factorial 
======================================= Answer =====================================*/
// let num = 5;
// let factorial = 1;
// for(let i = 1;i <= num;i++){
//     console.log(i)
//     factorial = factorial * i
// }

// console.log(factorial)

/*==================================== Question No 16 =========================================
day between birth data and today
======================================= Answer =====================================*/


// let today = new Date();
// let birthDate = new Date('08 july 1996');
// console.log(today);
// console.log(birthDate)
// let todayInMs = today.getTime();
// console.log(todayInMs);
// let birthDateInMs = birthDate.getTime();
// console.log(birthDateInMs)
// let calculateMs = todayInMs - birthDateInMs;
// console.log(calculateMs)
// let dayFormula = calculateMs/(1000*60*60*24);
// console.log(dayFormula)
// console.log(dayFormula/365)


/*==================================== Question No 17 =========================================
 copy = {...obj}
2. copy = Object.assign({},obj)
======================================= Answer =====================================*/
// let obj = {name :'Aziz',
//     teacher : {
//         city : 'karachi',
//         designation : 'developer'
//     }
// }

// console.log(obj);

// let newObj = {...obj};
// newObj.name = 'Akram'
// newObj.teacher.city = 'Mianwali'
// console.log(newObj)





/*==================================== Question No 18 =========================================
deep copy of obj json.parse(json.stringify(obj))
======================================= Answer =====================================*/
// let obj = {name :'Aziz',
//     teacher : {
//         city : 'karachi',
//         designation : 'developer'
//     }
// }

// console.log(obj);

// let newObj = JSON.parse(JSON.stringify(obj))
// newObj.name = 'Akram'
// newObj.teacher.city = 'Mianwali'
// console.log(newObj)




/*==================================== Question No 19 =========================================
flatten array 
======================================= Answer =====================================*/

// let arr = [1, [2, 3], [4, [5, 6]]];
// let result = [];

// function flatten(input){
//     for(let i = 0; i < input.length; i++){
//         let value = input[i];

//         // Check if value is array
//         if (Array.isArray(value)){
//             flatten(value);     // recursion (calls function again)
//         } else {
//             result.push(value); // simple number → push into result
//         }
//     }
// }

// flatten(arr);
// console.log(result);

// let arr = [1, [2, 3], 4, [5, 6]];
// let result = [];

// for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){

//         // inner array ko open karo
//         for(let j = 0; j < arr[i].length; j++){
//             result.push(arr[i][j]);
//         }

//     } else {
//         result.push(arr[i]);
//     }
// }

// console.log(result);
// let arr = [1, [2, 3], 4, [5, 6]];
// let result = [];
// for(let i = 0;i < arr.length;i++){
//     // console.log(arr[i])
//     if(Array.isArray(arr[i])){
//         for(let j = 0; j < arr[i].length;j++){
//             result.push(arr[i][j])
//         }
        
//     }
//     else{result.push(arr[i])}
// }

// console.log(result)


/*==================================== Question No 20 =========================================
anagram 
======================================= Answer =====================================*/

// function isAnagram(a,b){
// return(
//     a.split('').sort().join('') === b.split('').sort().join('')
// )
// }

// console.log(isAnagram('mew','wmed'))

/*==================================== Question No 21 =========================================
count occurence
======================================= Answer =====================================*/
// let arr = ['a','b','b','a','c','d','c']
// let count = {}
// arr.forEach((ele)=>{
//     if(count[ele]){
//         count[ele] = count[ele]+1
//     }
//     else{
//         count[ele] = 1
//     }
// })
// console.log(count)

/*==================================== Question No 22 =========================================
flatten array
======================================= Answer =====================================*/
// let arr = [1,2,[3,4],5,[6]];
// let str = arr.join(',')
// let spl = str.split(',');
// spl = spl.map(Number)
// console.log(spl)
// console.log(str)

// let arr = [1,2,[3,4],5,[6]];
// let flt = [];
// for(let i = 0;i <arr.length;i++){
//     if(Array.isArray(arr[i])){
//         for(let j = 0 ; j < arr[i].length;j++)
//         {
//             flt.push(arr[i][j])
//         }
//     }
//     else (flt.push(arr[i]))
// }
// console.log(flt)


/*==================================== Question No 23 =========================================
anagram
======================================= Answer =====================================*/
// function isAnagram(a,b){
//     return(
//         a.split('').sort().join() === b.split('').sort().join()
//     )
// }console.log(isAnagram('silent','listen'))



/*==================================== Question No 24 =========================================
unique arr
======================================= Answer =====================================*/
// let arr = [1,2,2,3,4,5,5,6,6,7,8]
// let unique = [];
// function uniqueArray(a){
//     let unique = [];
//     for(let i = 0; i< arr.length;i++){
//         if(!unique.includes(a[i])){
//             unique.push(a[i])
//         }
//     }
//     return unique
// }

// let ans =uniqueArray(arr)
// console.log(ans)

/*==================================== Question No 25 =========================================
reverse string
======================================= Answer =====================================*/
// let str = 'maham';
// let reverse = '';
// for(let i = str.length-1;i >=0;i--){
//     reverse = reverse + str[i]
   
    
// }
// console.log(reverse)
// if(str === reverse){
//     console.log('palindrome')
// }
// else{console.log('not palindrom')}


/*==================================== Question No 26 =========================================
factorial 
======================================= Answer =====================================*/
// let num = 5;
// let factorial = 1;
// for(let i = 1 ; i <= num;i++)
// {
//    factorial =factorial*i
// }
// console.log(factorial)



/*==================================== Question No 27 =========================================
count vowels and consonants in string
======================================= Answer =====================================*/

// let str = 'A laxy brown fox jump over the dog';
// let str = 'A lazy fox jumps over the fast dog   ';
// str = str.replaceAll(' ','');

// console.log(str)
// console.log('length ',str.length)
// console.log(str)
// str = str.toLowerCase()
// let vowel = '';
// let constant = '';
// for(let i = 0; i < str.length;i++){
//     // console.log(str[i])
//     if(str[i] ==='a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'o'){
//         vowel = vowel + str[i]
//     }
//     else{
//         constant = constant + str[i]
//     }
// }
// console.log(vowel);
// console.log(constant)
// let vowelLength = vowel.length;
// let contantLength = constant.length;
// console.log(vowelLength);
// console.log(contantLength);





/*==================================== Question No 28 =========================================
find missing number
======================================= Answer =====================================*/

// let arr = [1,2,4,5,6,7,8];
// let missing   = '';
// for(let i = 1; i <=8;i++)
// {
//     if(arr.indexOf(i) === -1){
//         console.log('missing no : ' + i)
//         missing = missing + i
//     }
// }
// console.log(missing)




/*==================================== Question No 29 =========================================
Reverse a number
======================================= Answer =====================================*/
// let number = 12345;
// number = number.toString();
// let reverse = '';
// for(let i = number.length - 1; i >=0;i--)
//     reverse = reverse + number[i]

// console.log(reverse)



/*==================================== Question No 30 =========================================
check palindrome number
======================================= Answer =====================================*/
// // let number = 121;
// // number = number.toString();
// // function checkPalindrome(num){
// //     var reverse = '';
// //     for(let i = num.length-1;i>=0;i--){
// //     //   console.log(num[i])
// //     reverse = reverse + num[i]
       
// //     }
// //      if(reverse === number){
// //         console.log(`${number} is palindrome`)
// //      }
// //      else{
// //         console.log(`${number} is not palindrome`)
// //      }

// // }

// checkPalindrome(number)


/*==================================== Question No 31 =========================================
sum of only even numbers in an array; let arr = [1, 2, 3, 4, 5, 6];
======================================= Answer =====================================*/
// let arr = [1, 2, 3, 4, 5, 6];
// function addEvenNumbers(array){
//     let even = [];
//     let sum = 0;
//     for(let num of array){
//         if(num % 2 === 0){
//             even.push(num);
           
//         }
       
//     }
//  console.log(even);
// //  for loop on even number for adding 
// for(let i = even.length-1;i >= 0; i--){
//     sum = sum + even[i]
// }console.log(sum)
// }

// addEvenNumbers(arr)


/*==================================== Question No 32 =========================================
add odd number of array 
======================================= Answer =====================================*/
// let arr = [1,2,3,4,5];
// function addOddNumbers(array){
//     let odd = [];
//     for(let i = 0;i < array.length;i++){
//         if(array[i] % 2 !== 0){
//             odd.push(array[i])
           
//         }

//     }
//    let sum = 0;
//    for(let i = 0;i < odd.length;i++){
//     sum = sum + odd[i]
//    }
// console.log(sum)
// }
// addOddNumbers(arr)




/*==================================== Question No 33 =========================================
small concepts
======================================= Answer =====================================*/
// console.log(String.raw`HelloTwitter\nworl`);
// console.log(typeof NaN)
// console.log(1 + '2' + '2');
// console.log(3>2>1>0);
// console.log(3>2);
// console.log(1<2<3);
// console.log(4<8);
// let number =  [33,2,8];
// number = number.sort();
// console.log(number)
// console.log(number[1])
// // console.log(0.1 + 0.2 == 0.3)
// // console.log('This is a string.' instanceof String)
// // console.log(018-015)
// console.log(typeof typeof 1);
// console.log(typeof 1);
// console.log( typeof 'h')
// console.log(typeof typeof 'h')
/*==================================== Question No 34 =========================================
return sum of array in funciton
======================================= Answer =====================================*/
// let arr = [1,2,3];
// function adddition(array){
//     // console.log(array)
//     let sum = 0;
//     for(let i = 0 ;i < array.length;i++){
//         console.log(array[i]);
//         sum = sum + array[i];
       
//     }
//      return sum

// }
// let ans = adddition(arr);
// console.log(ans)


/*==================================== Question No 35 =========================================
alic bob
======================================= Answer =====================================*/

// function compareTriplets(a,b){
//     let aliceScore = 0;
//     let bobScore = 0;
//     for(let i = 0;i <3 ;i++){
//         if(a[i] > b[i]){
//             aliceScore++;
//         }
//         else if(a[i] < b[i]){
//             bobScore++;
//         }

        
//     }
//     return [aliceScore,bobScore]

// }

// let alice = [5,6,17];
// let bob = [3,6,10]
// let ans = compareTriplets(alice,bob)

// console.log(ans)
/*==================================== Question No 36 =========================================
difference among var/let / const
======================================= Answer =====================================*/
/* var = 
we can decalare var again , 
we var is hoisted 
var is not block scope but var is only function scope 
var can be overwrited 

let = 
we can not redeclare let 
let can be reassigned 
let is not hoisted 
let is functin scope and block scoped 

const ;
we can not redeclare const 
we can not reassign const 
const is  not hoisted 
const is function scope and block scoped also */
// 


/*==================================== Question No 37 =========================================
event Bubbling
======================================= Answer =====================================*/
/* function parentClick() {
  alert("Parent clicked");
}

function childClick(event) {
  alert("Child clicked");
  // Stop bubbling if you want
  // event.stopPropagation();
  event.stopPropagation()
} */


/*==================================== Question No 38 =========================================
event Capturing
======================================= Answer =====================================*/


// function parentClick() {
//   alert("Parent clicked first (capturing simulated)");
// }

// function childClick() {
//   alert("Child clicked");
// }


/*==================================== Question No 39 =========================================
add event Listender
======================================= Answer =====================================*/
// let get = document.getElementById('btn');
// get.addEventListener('click',myFn)

// function myFn(){
//     document.body.style.background = 'red';
//     get.innerHTML = 'i m button'
// }

/*==================================== Question No 40 =========================================
Higher order funciton 
the funciton that takes another function as an argument or return a new funciton or performing both task , mean taking a funtion as 
an argument and returnin a funtion also is called higher order function. 
======================================= Answer =====================================*/
/* function operateOnNumber(a,b,operation){
  return operation(a,b)
}
const add = (x,y)=>{
  return x + y
}

console.log(operateOnNumber(5,3,add))

 */


/*==================================== Question No 41 =========================================
call(): 
we define a normal funciton  and after function we define a object  and in function agrgmument we write fist name of
funciton than . than write call and in call's parameter we first write name of object and than pass our 
argument and than we receive argument in funcitons parameter we donto receive object name in funciton parameter 
but but access object property name inside our funtion by using this keyword
======================================= Answer =====================================*/
// function greeting(name,age){
//   console.log(`My name is ${name}, and i am ${age} years old and my city is ${this.city}`)
// }

// const place = {
//   city: 'Karachi'
// }

// greeting.call(place,'Aziz',30)
// var place = {
//     city : 'karachi'
//   }


// function greeting(name,age){
  
//   console.log(` my name is ${name}, my age is ${age}and my city is ${this.city
//   }`)
  
// }
// greeting.call('kohat','Aziz',30)


// call 


// function greeting(name,age){
//   console.log(`My name is ${name},my age is ${age} and my city is ${this.city}`)
// }

// const place = {
//   city: 'Lahore'
// }

// greeting.call(place,'Aziz',30)



// call 

// function details(name, designation){
// console.log(`My name is ${name} and my designaiton is ${designation}. I have bought a car, the color of 
//   car is ${this.color} and model of car is ${this.model}`)
// }
// const information = {
//   color : 'red',
//   model : 'TOYOTA'
// }

// details.call(information,'Aziz','developer')
/*==================================== Question No 42 =========================================
apply() 
apply() and call are same only having one main differenc in call we pass funcion arguments inside its parmeter after object name by using , but 
in apply() we pass funciton arguments after writing name of object , insided in an array, this is only one 
difference among call and apply
======================================= Answer =====================================*/
// function details(){
//   console.log(`my name is ${name} and my designation is ${this.designation}, i have bought a 
//     car , the color of car is ${this.color} and model of car is ${this.model}  and i bought it in ${this.price}`)
// }

// const obj = {
//   color : 'black',
//   model : 2002,
//   price : 2400000
// }
// details.apply(obj,['Aziz','developer'])




/*==================================== Question No 43 =========================================
bind() 
bind() returns us a function and it does not give us response to take its response we have to save it 
in a variable and than we call varible like ans() and now we can get ans of bind(),
in bind we pass arguments like call, fist we write obj name than comma and pass funtions arguments
======================================= Answer =====================================*/
// function info(name,age){
//   console.log(`my name is ${name} and my age is ${age} , i have bought a car , the color of 
//     car is ${this.color} and model of car is 
//     ${this.model}`)
// }
// const obj = {
//   color : 'red',
//   model : 2002
// }

//  let ans = info.bind(obj,'Aziz',29)
//  ans()

/*==================================== Question No 44 =========================================
this is a keyword of js and always it refers to an objecet
======================================= Answer =====================================*/

// const obj = {
//   name : 'john',
//   lastName : 'khan',
//   fullName : function(){
//     return this.name + ' ' + this.lastName;
//   }
// }
// console.log(obj.fullName())

// const obj = {
//   name : 'Aziz',
//   age : 30
// }

// function info(obj){
//   console.log(`my name is ${this.name} and my age is ${this.age}`)
// }

// info(obj)


// const obj = {
//   firstName : 'M',
//   lastName : 'Abid',
//   fullName : function(){
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// // let ans = obj.fullName();
// // console.log(ans)
// console.log(obj.fullName())
/*==================================== Question No 45 =========================================
accessing this keyword in arrow functon 
======================================= Answer =====================================*/
// function info(){
//   this.name = 'Aziz'
//   const show = ()=>{
//     console.log(this.name)
//   }
//   show()
// }
// info()



/*==================================== Question No 46 =========================================
currying function 
======================================= Answer =====================================*/

 function add(a){
           return function(b){
            return function(c){
                return a + b + c
            }
           }
        }
        console.log(add(2)(3)(10))

/*==================================== Question No 47 =========================================
converting normal function to currying functon
======================================= Answer =====================================*/
function add(a,b,c){
  return a + b + c
}
console.log(add(2,3,4))

/* function add(a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}
console.log(add(2)(3)(4))

 */

/*==================================== Question No 48 =========================================
closure funciton
======================================= Answer =====================================*/
// function parent(num){
//   let num2 = 20;
//   return function(){
//    return num + num2
//   }
// }
// let ans = parent(10);
// console.log(ans())
/*==================================== Question No 49 =========================================
primitive data types
======================================= Answer =====================================*/

// let x ; 
// console.log(x)
// let n = null;
// console.log(n)
// let sym = Symbol('id')
// console.log(sym)

// let big = 23423553495397964636096843030846n;
// console.log(big)


// let name = 'Aziz';
// name[0]  = 'Ali';
// console.log(name)
// let arr = ['Aziz','Jamal'];
// arr[0] = 'Umair';
// console.log(arr)

/*==================================== Question No 50 =========================================
NaN not a number 
======================================= Answer =====================================*/
// console.log(0/0);
// console.log(Math.sqrt(-1));
// console.log(isNaN('hello'));
// console.log(isNaN(3))

// let a = 0;
// let b = 0;
// console.log(a/b)





/*==================================== Question No 51 =========================================
Null and undefined 
======================================= Answer =====================================*/
// let name ;
// console.log(name)

// let detail = null;
// console.log(detail)

// console.log(location.href)


/*==================================== Question No 51 =========================================
sum of array all elements
======================================= Answer =====================================*/
let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

let sum = 0;
for(let i = 0;i < array.length;i++){
  console.log(array[i])
  sum = sum + array[i]
}
console.log(sum)

