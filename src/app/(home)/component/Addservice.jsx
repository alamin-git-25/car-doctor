"use client"
import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
    const addservice = async (e) => {
        e.preventDefault()
        const product = {
            service_id: e.target.service_id.value,
            title: e.target.title.value,
            price: e.target.price.value,
            img: e.target.img.value,
            description: e.target.description.value,
            facility: [
                {
                    name: e.target.name.value,
                    details: e.target.details.value
                },
                {
                    name: e.target.name2.value,
                    details: e.target.details2.value
                },
                {
                    name: e.target.name3.value,
                    details: e.target.details3.value
                },
                {
                    name: e.target.name4.value,
                    details: e.target.details4.value
                },

            ]
        }
        const res = await fetch("http://localhost:3000/api/service", {
            method: 'POST',
            headers: {
                "contant-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        if (res.status === 201) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Service Successfully added",
                showConfirmButton: false,
                timer: 2500
            });
        }

    }
    return (
        <div className='w-full flex justify-center'>

            <div className='w-[50%] h-full glass p-6 rounded-lg'>
                <form onSubmit={addservice}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Id</span>
                        </div>
                        <input type="number" placeholder="Type here" name='service_id' className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Title</span>
                        </div>
                        <input type="text" placeholder="Type here" name='title' className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Price (Number Only)</span>
                        </div>
                        <input type="number" placeholder="Type here" name='price' className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product Image</span>
                        </div>
                        <input type="text" placeholder="Type here" name='img' className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product description</span>
                        </div>
                        <input type="text" placeholder="Type here" name='description' className="input input-bordered w-full" />

                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">facility name</span>
                        </div>
                        <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" name='name2' className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" name='name3' className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" name='name4' className="input input-bordered w-full" />



                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Product details</span>
                        </div>
                        <input type='text' placeholder="Type here" name='details' className="input input-bordered w-full" />
                        <input type='text' placeholder="Type here" name='details2' className="input input-bordered w-full" />
                        <input type='text' placeholder="Type here" name='details3' className="input input-bordered w-full" />
                        <input type='text' placeholder="Type here" name='details4' className="input input-bordered w-full" />



                    </label>
                    <input type="submit" value='Submit' className='btn btn-primary w-full mt-8' />
                </form>
            </div>

        </div>
    );
};

export default AddService;