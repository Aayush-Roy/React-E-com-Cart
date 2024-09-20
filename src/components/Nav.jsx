
import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';
const Nav = () => {
  let[products]=useContext(ProductContext);
  let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category)

  let color =()=>{
    return `rgba(${(Math.random()*255).toFixed()},
      ${(Math.random()*255).toFixed()},
      ${(Math.random()*255).toFixed()},0.4)`
  }
  // console.log(color())
  return (
        
        <nav className='w-[15%] bg-zinc-100 h-full pt-5 flex flex-col items-center'>
        <a 
        className='py-2 px-5 border rounded border-blue-200 text-blue-300'
        href="/create">Add New Product</a>
        <hr  className='w-[80%] my-3'/>
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
       
        <div className='w-[80%]'>

          {distinct_category.map((c,i)=>
            <Link 
            to={`/?category=${c}`}
            key={i} className=' flex items-center mb-3'>
            <span 
            style={{backgroundColor:color()}}
            className='mr-2   h-[15px] w-[15px] rounded-full'></span>
            {c}
            </Link>
          )}

        </div>

      </nav>
  

  )
}

export default Nav
