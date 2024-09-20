
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loding from './Loding';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';
const Details = () => {
 let navigate =  useNavigate();
 let[products,setProducts]= useContext(ProductContext)
  let[product,setProduct]=useState(null);
  const{id} = useParams();
  console.log(id);
  // const getsingleproduct=async ()=>{
  //   try{
  //     const {data} = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   }catch(err)
  //   {
  //     console.log(err);
  //   }
  // }
  useEffect(()=>{
    // getsingleproduct();
    if(!product)
    {
      setProduct(products.filter(p=>p.id==id)[0]);
    }
  },[])
  console.log(product)
  const productDeleteHandler=(id)=>{
    const FilteredProduct = products.filter((p)=>p.id!==id)
    setProducts(FilteredProduct);
    localStorage.setItem("products",JSON.stringify(FilteredProduct))
    navigate(-1);
    toast.success("Product deleted successfully")
  }
  return product ? (
    <div className='w-[70%] h-full flex jutify-bewtween items-center gap-10 m-auto p-[10%]'>
     <img 
     className='object-contain h-[80%] w-[40%]'
     src={product.image} alt="" />
     <div className='content w-[50%]'>
      <h1 className='text-4xl'>{product.title}</h1>
      <h3 className='text-zinc-400 my-5'>{product.category}</h3>
      <h2 className='text-red-300 mb-3'>$ {product.price}</h2>
      <p className='mb-5'>{product.dec}</p>
      <Link to={`/edit/${product.id}`} className='py-2 px-5 border rounded border-blue-200 text-blue-300 mr-3'>Edit</Link>
      <button onClick={()=>productDeleteHandler(product.id)} className='py-2 px-5 border rounded border-red-200 text-red-300 '>Delete</button>
     </div>
    </div>
  ) : <Loding/>
}

export default Details
