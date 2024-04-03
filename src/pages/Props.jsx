import React, { useState } from 'react';
import json from '../data.json';
import Item from '../component/Item';
function Props(props) {
  const [data,setData] = useState(json);   //제이슨파일 안에 내용을 수정하기위해서 변수선언

  let likeFun = (id)=>{
    let d = data.map((obj)=>{
      if(obj.id == id){
        obj.like += 1;
      }
      return obj;
    })
    setData(d);
  }

  console.log(data)
  return (
    <div>
      <h2>리스트</h2>
      <ul>
        {
          data.map((obj) => {
            return <Item  key={obj.id} obj={obj} set={likeFun}/>
          })
        }
      </ul>
    </div>
  )
}

export default Props