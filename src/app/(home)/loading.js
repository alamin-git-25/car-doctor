import React from 'react';
import AnimatedSVG from './component/Loading';
import Loading from './component/Lod';

const loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
          <AnimatedSVG/>
        </div>
    );
};

export default loading;