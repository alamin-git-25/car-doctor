import { getAllUser } from '@/app/(home)/lib/Database/Query/getAllUser';
import React from 'react';

const page = async () => {
    const allUser = await getAllUser()
    return (
        <div className='container mx-auto pt-10'>
          <table className="w-full my-10 text-left border border-separate rounded border-slate-200" cellspacing="0">
            <tbody>
                <tr>
                    <th scope="col" class="h-12 px-6 text-xl font-semibold  border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">ID</th>
                    <th scope="col" class="h-12 px-6 text-xl font-semibold  border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Image</th>
                    <th scope="col" class="h-12 px-6 text-xl font-semibold  border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Name</th>
                    <th scope="col" class="h-12 px-6 text-xl font-semibold  border-l first:border-l-0 stroke-slate-900 text-black bg-slate-100">Email</th>

                </tr>
                {
                    allUser.map(({name, email,_id, createdAt},index)=>(
                        <tr key={index}>
                              <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center bg-purple-300 text-xl sm:table-cell h-12 px-6  transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black">{index+1}</td>
                              <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center bg-purple-300 text-xl sm:table-cell h-12 px-6  transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black">{_id}</td>
                              <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center bg-purple-300 text-xl sm:table-cell h-12 px-6  transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black">{name}</td>
                              <td data-th="Name" className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center bg-purple-300 text-xl sm:table-cell h-12 px-6  transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-900 text-black">{email}</td>

                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    );
};

export default page;