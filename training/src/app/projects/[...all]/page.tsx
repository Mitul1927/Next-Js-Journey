import React from 'react'

const  project = async({params} : {params:{all:string[]}}) => {
    const{all} = await params;
    all.forEach((value,index)=>console.log(value,index));
    // console.log(all);
  return (
    <div>
      <h1>Project {all}</h1> <br />
      <br />
      All Routes
      {all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  )
}

export default  project