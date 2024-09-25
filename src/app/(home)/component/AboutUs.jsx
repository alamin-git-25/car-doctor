import React from 'react';

import img2 from '../../../../public/images/about_us/Group 19.png';
import Image from 'next/image';
const AboutUs = () => {
    return (
        <section className='container mx-auto mt-10'>
              <div className="divider text-2xl my-10">About Us</div>
              <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1 relative">
         <Image src={img2} width={600} height={400} alt='person' className='aspect-auto'/>
      
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 pl-60 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-6xl font-bold text-slate-900 mb-10">
              
              We are qualified & of experience in this field
              </h3>
              <p className="text-xl text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </p>
            </div>
          </header>
          <p>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. 
          </p>
          <button className='btn btn-primary mt-10'>Get More Info</button>
        </div>
       
      </div>
        </section>
    );
};

export default AboutUs;