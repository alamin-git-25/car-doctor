import React from 'react';

const CardDetail = ({ item }) => {
    const {name, details} = item
    return (
        <div className=''>
            <div className="overflow-hidden  rounded bg-white text-slate-500 shadow-md custom-shad">
                <div className="p-10">
                    <h3 className="mb-4 text-2xl font-medium text-slate-700">
                       {name}
                    </h3>
                    <p className='text-xl'>
                       {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;