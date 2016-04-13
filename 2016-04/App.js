import React from 'react';
import ReactDOM from 'react-dom';
import { message, Button } from 'antd'

/**
 * Es6-Array
 */
//Array.from
let a = {
  '0': '123',
  '1': '456',
  '2': '789',
  length: 3
};
console.log(Array.from(a));//[ '123', '456', '789' ]

//Array.of
let arr = Array.of(1,2,3);



function ArrayOf(){
  return [].slice.call(arguments);
}
//find @arguments => value index array
console.log([1, 2, 3, 4, 5].find(n => n>2 ));//找出第一个符合条件的并返回

//fill @arguments => value start  end
console.log(['a','b','c','d'].fill(3.12,1,3));//[ 'a', 3.12, 3.12, 'd' ]

//keys,values,entries 需要使用for...of遍历
for(let i of [-1,0,1,2].keys()){
  console.log(i);//0 1 2 3
}
for(let i of ['h','w','x'].values()){
  console.log(i);
  //h
  //w
  //x
}
for(const i of ['a','p','p'].entries()){
  console.log(i);
  /*
   * [ 0, 'a' ]
   * [ 1, 'p' ]
   * [ 2, 'p' ]
   */
}

//includes es7
console.log([1,2,3].includes(-1));//false

 
//数组的空位，undefined和null会被处理成空字符串。
console.log(0 in [1,2,3,0]);//true
console.log(undefined in [undefined,null,0]);//false
console.log(0 in [undefined]);//true
[,'1'].forEach((value,index) => console.log(value));//1,forEach 跳过空位
//map 一一映射，返回每个元素传递给函数后的新数组，跳过空位但保留值
console.log([1,,2,'a'].map(x => x>0));//[ true, , true, false ]
//ES6 将空位转为undefined
