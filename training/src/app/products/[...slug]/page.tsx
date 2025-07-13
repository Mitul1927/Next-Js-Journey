import React from 'react'

const page = async ({params} : {params:{slug : string[]}}) => {
    const {slug} = await params;
  return (
    <div>
      <h1>Product ID: {slug.join(", ")}</h1>
      <br />
      URL Segments:
      <ul>
        {slug.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  )
}

export default page