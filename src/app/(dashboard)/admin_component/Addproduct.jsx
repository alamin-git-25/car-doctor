"use client"
import React from 'react';
import Swal from 'sweetalert2';

const Addproduct = () => {
    const addProduct = async (e)=>{
        e.preventDefault()
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
        }
        const res = await fetch("http://localhost:3000/api/product",{
            method:'POST',
            headers:{
                "contant-type":"application/json"
            },
            body:JSON.stringify(product)
        })
       if (res.status === 201) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Successfully added",
            showConfirmButton: false,
            timer: 2500
        });
       }
        
    }
    return (
        <div className='w-full flex justify-center'>
            
            <div className='w-[50%] h-full glass p-6 rounded-lg'>
                <form onSubmit={addProduct}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Name</span>
                        </div>
                        <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full" />
                       
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Price (Number Only)</span>
                        </div>
                        <input type="number" placeholder="Type here"name='price' className="input input-bordered w-full" />
                       
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Image</span>
                        </div>
                        <input type="text" placeholder="Type here"name='image' className="input input-bordered w-full" />
                       
                    </label>
                    <input type="submit" value='Submit' className='btn btn-primary w-full mt-8'/>
                </form>
            </div>
            
        </div>
    );
};

export default Addproduct;