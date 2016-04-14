

//Object,变量，函数都可以作为对象的属性，而不需要写属性值
let x = 'mac',y='book';
function es(x,y){
  return {x,y};
}
console.log(es(x,y));//{ x: 'mac', y: 'book' }

let a = 'hi',b='hello';
let obj = {
  [a]: true,
  [b]: false
};
console.log(obj);//{ hi: true, hello: false }


let o = {
  say(){
    console.log(this.name);//say
  }
};
console.log(o.say.name);//say

//Object.assign浅拷贝(target,source,source),null和undefined不允许在第一个参数处使用
var obj1 = {
  name: 'obj1',
  num: 1
};
var obj2 = {
  name: 'obj2',
  age: 21,
  test: 'assign'
};
var obj3 = {};
console.log(
  Object.assign(obj3,obj1,obj2)//{ name: 'obj2', num: 1, age: 21, test: 'assign' }
);

class Obj{
  constructor(x,y){
    Object.assign(this,x,y);
  }
}

var obj4 = new Obj('h','i');
console.log(obj4);

//克隆对象
function clone(source){
  return Object.assign({},source);
}
console.log(clone(obj2));//{ name: 'obj2', age: 21, test: 'assign' }

//Descriptor
let obj5 = Object.assign(obj3,obj2);
console.log(Object.getOwnPropertyDescriptor(obj5, 'age'));
/*
{ value: 21,
 writable: true,
 enumerable: true,
 configurable: true }
 */

//Object.keys,返回属性名数组，不包括继承的
console.log(
  Object.keys(obj5)//[ 'name', 'num', 'age', 'test' ]
);
//for...in，枚举包括继承的属性
function Parent(name){
  this.name = name;
}
Parent.prototype = {
  say(){
    console.log('hello world')
  }
};
var t1 = new Parent('trigkit');
for(var k in t1){
  console.log(k);
  //name
  // say
}

//Object.setPrototypeOf(Object,prototype)
let obj6 = {name: 'obj6'};
let obj7 = {age: 22};
Object.setPrototypeOf(obj7,obj6);
obj6.x = 'wei';
obj6.y = 'dian';
console.log(obj7.x);//wei
console.log(obj7.y);//dian

//Object.values和Object.entries
let obj8 = {
  say(){
    console.log("hello")
  },
  name: 'trigkit4'
};
console.log(
  Object.values(obj8),//[ [Function: say], 'trigkit4' ]
  Object.entries(obj8)//[ [ 'say', [Function: say] ], [ 'name', 'trigkit4' ] ]

);
