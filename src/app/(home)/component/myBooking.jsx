"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import PaymentPage from './PaymentPage';

const MyBooking = () => {
    const session = useSession()
    const [booking, setBooking] = useState([])
    const [status, setStatus] = useState(false);
    const router = useRouter()
    const loadBooking = async (title) => {
        const response = await fetch(`/my-order/api/${session?.data?.user?.email}`);
        const data = await response.json();


        setBooking(data)

        console.log();

    }
    const handleDelete = async (id) => {
        const res = await fetch(`/my-order/delete-order/${id}`, {
            method: 'DELETE'
        });
        console.log(res,"res");
        
        const delet = await res.json();
console.log(delet);

        if (delet?.deletedCount > 0) {
            loadBooking()
        }
    }
    const handlepayment = () => {
        router.push('/payment')
        setStatus(true)
    }
    const permanetDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't To Delete This ?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Booking has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const productToBuy = booking.map(item => {
        return item
    });
    const priceToBuy = productToBuy.reduce(
        (accumulator, item) => accumulator + parseInt(item.price),
        0
    );



    useEffect(() => {
        loadBooking()
    }, [session])
    return (
        <div className='container mx-auto w-full'>

            <div>
                <div className='container mx-auto relative rounded-lg'>
                    <div className='w-full h-[40vh] z-[10] absolute bg-black/45'></div>
                    <div className="card bg-black image-full w-full rounded-lg h-[40vh] shadow-xl">
                        <figure>
                            <Image src='/images/about_us/parts.jpg' width={590} height={1580} alt='detaile' className='w-full h-[50vh]' />
                        </figure>
                        <div className=" flex w-[30%] z-[30] justify-center ">
                            <h2 className="card-title text-5xl font-bold text-white">Service Details</h2>

                        </div>
                    </div>
                </div>
            </div>
            {
                booking?.length > 0 ? <table className="w-full my-10 text-left border border-separate rounded border-slate-200" cellspacing="0">
                    <tbody>
                        <tr>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">ID</th>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Service</th>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Price</th>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Status</th>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Date</th>
                            <th scope="col" class="h-12 px-6 text-xl font-semibold text-center border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Action</th>
                        </tr>
                        {
                            booking.map(({ title, _id, price, date }, index) => (
                                <tr key={index}>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black text-center">{_id}</td>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black  text-center">{title}</td>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black text-center">${price}</td>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black text-center">{`${status ? 'Approved' : 'Pending'}`}</td>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black text-center">{date}</td>
                                    <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black text-center"><button onClick={() => permanetDelete(_id)}>Delete</button></td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table> : <p className='text-4xl text-center my-40'>No Booking Availavle</p>
            }

            <div>


                <div className='border border-black w-[100%] bg-zinc-300'>
                    {
                        productToBuy.length > 0 && <div className='text-2xl text-black flex justify-between'>
                            <h4 className=' p-5 '>Buying {productToBuy.length} Product For ${priceToBuy}</h4>
                            <h4 className='p-5'>Delevary :
                                {
                                    priceToBuy && <p className='inline'> $100</p>
                                }
                            </h4>
                            <h4 className='p-5'>Total :{
                                priceToBuy && <p className='inline'> ${priceToBuy}</p>
                            }</h4>



                            {
                                priceToBuy && <button onClick={() => handlepayment(true)} className='p-5'><span className='py-2 px-5 bg-green-600 rounded-md'>Confirm</span></button>
                            }

                        </div>


                    }

                </div>
                
            </div>

        </div>
    );
};

export default MyBooking;