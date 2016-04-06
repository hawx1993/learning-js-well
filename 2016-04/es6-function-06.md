
>`...扩展运算符`,将一个数组，变为参数序列。

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//console.log(arr1.push(...arr2));//6，push方法返回push后数组的长度
//console.log(arr1.push(arr2));//7,在arr1的基础上push[0,1,2,3,4,5,[3,4,5]]
//
//console.log([...'123']);//[ '1', '2', '3' ]
//console.log(...[1,2,3]);//1 2 3
var a1 = arr1.concat(...arr2);
var a2 = arr1.concat(arr2);
console.log(a1,a2);//[ 0, 1, 2, 3, 4, 5 ] [ 0, 1, 2, 3, 4, 5 ]
console.log(a1 === a2);//false

```
>`Arrow Function`

```js
//Arrow Function，多参和无参数均用括号，单参可省略，多行语句用{}
const fun1 = (x=-1,y=2) => x % y;
console.log(fun1());//-1

const fun2 = x => {
  var y = Math.round(x);
  return y * fun1();
};
console.log(fun2(3.14));//-3
const name = 'trigkit4';
const age =21;
const fun3 = (name,age) => "My name is "+ name+","+"I am "+ age;
console.log(fun3(name,age));

var fun4 = [-1,0,1].map(x => x*x);
console.log(fun4);//[1,0,1]

['t','r','i','g','k','i','t'].forEach((x,y)=> console.log(y+'=>'+x));
/**
 * 0=>t
 * 1=>r
 * 2=>i
 * 3=>g
 * 4=>k
 * 5=>i
 * 6=>t
 */
var fun5 = [2,3,4].forEach(function (x, y) {
  return y + '=>'+ x;//
});
console.log(fun5);//undefined

//箭头函数没有自己的this，因此也不能通过new 构造，会报错
//var Fun6 = (name,age) => {
//  this.name = name;
//  this.age = age;
//};
//var f = new Fun6();//Error: undefined.name =name

var obj = {
  x: Math.ceil(3.14159),
  func() {console.log(this.x)},
  test() {
    setTimeout(() => {this.func()},1000)
  }
};
console.log(obj.test());//4

//先输出10，然后输出4
var x = -1,
  o = {
    x: 10,
    test: () => o.x;//总之，不要在箭头函数里使用this
  };
console.log(o.test());//10
```
