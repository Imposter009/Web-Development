
/* 
!JAVASCRIPT


?callback function
:functions are object in js. isliye we can store a function in a variable eg:: var sum = function(a,b){return a+b}
{
    // normal function::
function sum(a,b){
    return a+b
}
console.log(sum(4,5)) //will give 9 as output
console.log(sum) //will give function definition as output
}

{
    // callback function
:when we pass a function  as an argument of another function and us it later in that function then it is called as as callback function.
function sum(a,b){
    return a+b
}
function calc(fx,a,b)
{
   return fx(a,b)
}
console.lof(calc(sum,4,5));
}

?PROMISES
:A Promise is an object representing the eventual completion or failure of an asynchronous operation  and its resulting value.This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
function delay(function(){
    setTimeout({some action()}=>,3000)
    return Promise;})
>A Promise is in one of these states:
:pending: initial state, neither fulfilled nor rejected.
:fulfilled: meaning that the operation was completed successfully.
:rejected: meaning that the operation failed.

{
const p1= new Promise((resolve,reject)=>{
    setTimeout({(resolve("1"))=>},2000)
})
// we are making a promise here and sending a resolve after a delay of 2sec
p1.then(data=>{console.log('then1', data) return data}).then(data=>console.log('then2',data)).catch(err=>console.log('error', err))
}
>It is important to always return promises from 'then' callbacks, even if the promise always resolves to undefined. humlog jb bhi kuch return karte hai then se to wo apne aap promise ban jata hai.
:The .then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case, iski jagha we can use catch. Each .then() returns a newly generated promise object, which can optionally be used for chaining. If we dont return data from then it will give us error 
>Promise.finally(): last me ye chalega hi chalega chahe then ho ya catch.
>Promise.all([p1,p2]): we use it when we want to combine many promises, we can access the combine data of all these promises after all these promises are resolved
>Promise.any([p1,p2]): agar hum chahte hai ki multiple promises me se jo pahle resolve ho jaye uska data de ho.
>Promise.resolve(): iska mtlb hota hai ki hum khud hi bata de rahe hai ki ye resolved hai aur turant then ko call kar do.

?Async/Await
>Using async/await can help you write code that's more intuitive and resembles synchronous code. Below is the same example using async/await:
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
>Async function automatically wraps the return statement with a promise if we are returning a simple value i.e not a promise.
async function test(){
    return 3;
}
>await wale statement ke aage hum tabhi badh payenge jab await ke saath likh promise resolve ho jayega.
>there is no catch in await thats why we use try/catch.eg::
{
  const p1= new Promise((resolve,reject)=>reject(1)) 
  async function test(){
    try(){const p= await p1
    console.log(data)}
    catch(err){
        console.log('ERR', err)
    }}
}






*/