import React from 'react';
import { getAllService } from '../lib/Database/Query/GetAllService';
import connectDB from '../lib/Database/Database';
import ServiceCard from './ServiceCard';
import Sidebar from './Sidebar';


const Service = async() => {
   
    await connectDB()
    const data = await getAllService()
   
    
  
    
    
    
    return (
        <section className='container mx-auto mt-10 custom-shad p-4' id='service'>
            <h3 className='text-center text-primary'>Service</h3>
            <h3 className='text-center text-slate-800 text-6xl'>Our Service Area</h3>
           <div className='grid grid-cols-3 gap-6 w-full h-full mt-10 '>
           {
                data.map((service, index)=><ServiceCard key={index} service={service}/>)
            }
            
           </div>
          
        </section>
    );
};

export default Service;