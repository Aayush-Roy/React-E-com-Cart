import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loding from './Loding'
import axios from '../utils/axios';

const Home = () => {
  let[products]=useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);

  let[filterProducts,setfilterProducts]=useState(null);
  const getProductsCategory=async()=>{
    try{
      const {data} = await axios.get(`/products/category/${category}`)
      setfilterProducts(data);
    }catch(err)
    {
      console.log(err)
    }
  }
  console.log(filterProducts)
  useEffect(()=>{
    if(!filterProducts && category==="undefined") setfilterProducts(products)
    if(category!="undefined")
    {
      setfilterProducts(products.filter(p=>p.category==category))
      // getProductsCategory();
    } 
  },[category,products]);
  return products ? (
    <>
    <Nav/>
    <div className='w-[85%] p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
      {filterProducts &&  filterProducts.map((p,i)=> <Link key={i} to={`/details/${p.id}`} className='mr-3 mb-3 card p-3 bordert shadow rounded w-[18%] h-[30vh] flex flex-col items-center'>
      <div 
      className='w-full hover:scale-110 ease-in-out duration-300 h-[80%] bg-contain bg-no-repeat bg-center mb-3'
      style={{backgroundImage:`url(${p.image})`}}>

      </div>
      <h1 className='hover:text-blue-300'>{p.title.length > 50 ? `${p.title.slice(0,15)+" ....."}` : p.title}</h1>
    </Link>)}
    {/* <Link to="/details/1" className='mr-3 mb-3 card p-3 bordert shadow rounded w-[18%] h-[30vh] flex flex-col items-center'>
      <div 
      className='w-full hover:scale-110 ease-in-out duration-300 h-[80%] bg-contain bg-no-repeat bg-center mb-3'
      style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>

      </div>
      <h1 className='hover:text-blue-300'>Lorem ipsum dolor sit amet.</h1>
    </Link> */}

  </div>
  </>
  ) : (<Loding/>);
}

export default Home
