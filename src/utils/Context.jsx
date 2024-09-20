import React, { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext();
const Context = (props) => {
let[products,setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);
    // const getProducts=async()=>{
    //     try{
    //         const{data} = await axios("/products");
    //         setProducts(data);
    //         // console.log(data);
    //     }catch(err)
    //     {
    //         console.log(err);
    //     }
    // };
    // useEffect(()=>{
    // getProducts();
    // },[]);
    console.log(products)
  return (
    <div>
    <ProductContext.Provider value={[products,setProducts]}>{props.children}</ProductContext.Provider>
    </div>
  )
}

export default Context
