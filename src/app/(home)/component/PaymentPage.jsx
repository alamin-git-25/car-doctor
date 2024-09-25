"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PaymentPage = ({price}) => {
    const [Loading, setLoadin] = useState(false)
    const router = useRouter()
    const priceToby = price

    const handlePay = (e)=>{
        e.preventDefault()
        setLoadin(true)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Success",
            showConfirmButton: false,
            timer: 2500
        });
        router.push('/')
    }
    
    return (
        <div className='container mx-auto'>
            <div className='w-[50%] h-full glass p-6 rounded-lg'>
                <form onSubmit={handlePay}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Name</span>
                        </div>
                        <input type="Text" placeholder="Type here" name='name' className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Email</span>
                        </div>
                        <input type="text" placeholder="Type here" name='email' className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Card No. (Number Only)</span>
                        </div>
                        <input type="number" placeholder="Type here" name='cord' className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Ammount</span>
                        </div>
                        <input type="text" placeholder="Type here" name='ammount' value={priceToby} className="input input-bordered w-full" />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="text-xl text-black">Ref No.</span>
                        </div>
                        <input type="text" placeholder="Type here" name='refNo' className="input input-bordered w-full" />

                    </label>

                   
                    <input type="submit" value={Loading ? 'Loading':'Payment'} className='btn btn-primary w-full mt-8' />
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;