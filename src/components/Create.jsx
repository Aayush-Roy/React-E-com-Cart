import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context';
import {nanoid} from "nanoid";
import { json, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Create = () => {
  let[products,setProduct]=useContext(ProductContext);
  const navigate =  useNavigate();
 
  let[title,settitle] = useState("");
  let[image,setimage] = useState("");
  let[price,setprice] = useState("");
  let[category,setcategory] = useState("");
  let[description,setdescription] = useState("");



  const addProductHandler=(e)=>{
    e.preventDefault();
    let product = {
      id:nanoid(),
      title,
      image,
      price,
      description,
      category
    } 

    
    console.log(product)
    if(title.trim().length<5 || image.trim().length<5 || price.trim().length<1
    
    || category.trim().length<4 || description.trim().length<5
    )
    {
      alert("each field must have more then 4 characters")
      return;
    }
    setProduct([...products,product]);
    toast.success("Product created successfully");
    localStorage.setItem("products",JSON.stringify([...products,product]));
    navigate("/"); 
  }
 

  return (
    <form onSubmit={addProductHandler} className='h-screen w-screen items-center flex flex-col p-[5%]'>
     <h1 className='text-3xl w-1/2 mb-5'>Add New Product</h1>
     <input
     className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={(e)=>setimage(e.target.value)}
     value={image}
     type="url" name="" placeholder='image link'  id="" />

    <input
     className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
     onChange={(e)=>settitle(e.target.value)}
     value={title}
     type="text" name="" placeholder='title'  id="" />

    <div className='w-1/2 flex justify-between'>
    <input
     className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={(e)=>setcategory(e.target.value)}
     value={category}
     type="text" name="" placeholder='category'  id="" />

    <input
     className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
     onChange={(e)=>setprice(e.target.value)}
     value={price}
     type="number" name="" placeholder='price'  id="" />
    </div>

    <textarea
    onChange={(e)=>setdescription(e.target.value)}
    value={description}
     className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
    name="" rows="30" id=""></textarea>
    <div className='w-1/2'>
    <button
    className='block py-2 px-5 border rounded border-blue-200 text-blue-300'
    href="/create">Add New Product</button>
    </div>
    </form>



  )
}

export default Create
