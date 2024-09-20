// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { ProductContext } from '../utils/Context';
// const Edit = () => {
//     const {id} = useParams();
//     console.log(id);
//     let[products,setProduct]=useContext(ProductContext);
//     const navigate =  useNavigate();
//     let[product,setproduct]=useState(null);
//     let[title,settitle] = useState("");
//     let[image,setimage] = useState("");
//     let[price,setprice] = useState("");
//     let[category,setcategory] = useState("");
//     let[description,setdescription] = useState("");
    
//     useEffect(()=>{
//         setproduct(products.filter(p=>p.id===id));
//       },[id]);

//     const addProductHandler=(e)=>{
//       e.preventDefault();
//       let product = {
//         id:nanoid(),
//         title,
//         image,
//         price,
//         description,
//         category
//       } 
//       if(title.trim().length<5 || image.trim().length<5 || price.trim().length<1
      
//       || category.trim().length<4 || description.trim().length<5
//       )
//       {
//         alert("each field must have more then 4 characters")
//       }
//       setProduct([...products,product]);
//       localStorage.setItem("products",JSON.stringify([...products,product]));
//       navigate("/"); 
//     }
   
//   return (
//     <div>
//       <form onSubmit={addProductHandler} className='h-screen w-screen items-center flex flex-col p-[5%]'>
//      <h1 className='text-3xl w-1/2 mb-5'>Edit Product</h1>
//      <input
//      className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
//      onChange={(e)=>setimage(e.target.value)}
//      value={product && product.image}
//      type="url" name="" placeholder='image link'  id="" />

//     <input
//      className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
//      onChange={(e)=>settitle(e.target.value)}
//      value={product && product.title}
//      type="text" name="" placeholder='title'  id="" />

//     <div className='w-1/2 flex justify-between'>
//     <input
//      className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
//      onChange={(e)=>setcategory(e.target.value)}
//      value={product && product.category}
//      type="text" name="" placeholder='category'  id="" />

//     <input
//      className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
//      onChange={(e)=>setprice(e.target.value)}
//      value={product && product.price}
//      type="number" name="" placeholder='price'  id="" />
//     </div>

//     <textarea
//     onChange={(e)=>setdescription(e.target.value)}
//     value={product && product.description}
//      className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
//     name="" rows="30" id=""></textarea>
//     <div className='w-1/2'>
//     <button
//     className='block py-2 px-5 border rounded border-blue-200 text-blue-300'
//     href="/create">Edit Product</button>
//     </div>
//     </form>
//     </div>
//   )
// }

// export default Edit
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
    const [products, setProducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        des: "",  // Use 'des' as it matches your form field
        image: "",
        price: "",
        category: "",
    });

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const selectedProduct = products.find(p => p.id === id);
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [id, products]);

    const updateProduct = (e) => {
        e.preventDefault();

        if (product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 || product.price.trim().length < 1 || product.des.trim().length < 5) {
            alert("Each input must have at least 4 characters.");
            return;
        }

        const updatedProducts = products.map(p => {
            if (p.id === id) {
                return { ...product };
            }
            return p;
        }); 

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        navigate(-1);
    };

    return (
        <div>
            <form onSubmit={updateProduct} className='p-[5%] w-screen h-screen flex flex-col items-center'>
                <h1 className='text-3xl font-semibold w-1/2 mb-5'>Update Product</h1>

                <input type="url" placeholder='Image url' className='text-xl bg-zinc-100  rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={changeHandler} name='image' value={product.image} />

                <input type="text" placeholder='Title' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3'
                    onChange={changeHandler} name='title' value={product.title} />

                <div className='justify-between flex w-1/2'>
                    <input type="text" placeholder='Category' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={changeHandler} name='category' value={product.category} />

                    <input type="number" placeholder='Price' className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-[48%] mb-3'
                        onChange={changeHandler} name='price' value={product.price} />
                </div>

                <textarea className='text-xl bg-zinc-100 rounded-sm p-1 px-2  w-1/2 mb-3' placeholder='Enter Product Description Here.....' rows="5"
                    onChange={changeHandler} name='des' value={product.dec}></textarea> {/* Changed 'dec' to 'des' */}

                <div className='w-1/2'>
                    <button className='py-3 px-5 rounded-md border border-blue-200 text-blue-400'>Update details</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
