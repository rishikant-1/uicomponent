import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Home() {
  const [product, setProduct]=useState([]);

  const myApi= ()=>{
    axios.get('https://dummyjson.com/products').then((data)=>{

      setProduct(data.data.products)
    })
  }
useEffect(()=>{
  myApi()
},[])
  return (
    <div className='bg-zinc-100 h-screen w-full flex justify-center items-center flex-wrap'> 
      {product.map((d)=>{
        console.log(d);
        
        return <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden ">
        <img
          className="w-full h-48 object-cover"
          src={d.thumbnail}
         
          
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{d.title}</h2>
          <p className="text-gray-600 mt-2 text-sm">
           {d.description}
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Read More
          </button>
        </div>
      </div>
      })}
    </div>
  )
}

export default Home