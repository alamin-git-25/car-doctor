"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { ServiceContext } from '../cotext';


const Cheek = ({ data }) => {
    const { img, price, title, _id, service_id } = data;


  
    const [date, setDate] = useState(new Date());
    const router = useRouter()
    const session = useSession()
  
   
    const handelOrder = async (e) => {
        e.preventDefault();
        const order = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            title: e.target.title.value,
            price: e.target.price.value,
            date: e.target.date.value,
        };
        
        
        
        
       
            const res = await fetch("http://localhost:3000/api/order", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(order)
            });
            if (res.status === 201 && session.status === 'authenticated' ) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Order Placed",
                    showConfirmButton: false,
                    timer: 2500
                });
                router.push('/')
            } else {
                Swal.fire({
                    position: "top-center",
                    icon: "warning",
                    title: "Alredy",
                    showConfirmButton: false,
                    timer: 2500
                });
               
            }
        






    }
    return (
        <div>
            <div className="flex-1   sm:px-0 border p-10 custom-shad rounded-md">

                <div className='p-5'>
                    <form onSubmit={handelOrder}>
                        <div className='flex w-full gap-5'>
                            <div className="relative w-full">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={session?.data?.user?.name}
                                    disabled
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-transparent text-xl  invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-black"
                                />

                            </div>
                            <div className="relative w-full">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    disabled
                                    value={session?.data?.user?.email}
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-black text-xl"
                                />

                            </div>
                        </div>

                        <div className='flex w-full gap-5 my-5'>
                            <div className="relative w-full">
                                <input
                                    id="phone"
                                    type="text"
                                    required
                                    name="phone"
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-transparent  invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="phone"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Phone No.
                                </label>
                            </div>
                            <div className="relative w-full">
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    required
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="address"
                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-black transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Address
                                </label>
                            </div>
                        </div>
                        <div className='flex w-full gap-5'>

                            <div className="relative w-full">
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    disabled
                                    value={title}
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-black text-xl"
                                />

                            </div>
                            <div className="relative w-full">
                                <input
                                    id="price"
                                    type="text"
                                    name="price"
                                    disabled
                                    value={`${price}`}
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-black text-xl"
                                />

                            </div>
                            <div className="relative w-full">
                                <input
                                    id="date"
                                    type="text"
                                    name="date"
                                    disabled
                                    value={date.toDateString()}
                                    placeholder="your name"
                                    className="peer relative h-12 w-full rounded border border-black px-4 pl-12 text-black placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-black text-xl"
                                />

                            </div>
                        </div>
                        <input type='submit' value='Order Confirm' className="cursor-pointer inline-flex my-5  w-full items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-gradient-to-r from-emerald-600 to-emerald-800 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" />

                    </form>



                </div>
            </div>
        </div>
    );
};

export default Cheek;