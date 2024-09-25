import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full">
                <div id="slide4" className="carousel-item relative w-full ">
                    <div className="carousel w-full">
                        {
                            banners.map((banner, index) => (
                                <div
                                    style={{ backgroundImage: `linear-gradient(45deg , rgba(7,25,82,.7),rgba(0,0,0,0.3)),url(/images/banner/${index + 1}.jpg)` }}
                                    key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[80vh] rounded-lg">
                                    <div className='w-[50%] h-[75%] flex items-center ml-32'>
                                        <div>
                                            <h1 className='text-6xl font-bold text-white mb-10'>{banner.title}</h1>
                                            <p className='text-2xl text-white  mb-10'>{banner.disc}</p>
                                            <button className='btn btn-primary mr-6 '>Discover</button>
                                            <button className="btn btn-outline text-white btn-secondary">Latest Project</button>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 right-10 gap-5  flex ">
                                        <a href={banner.prev} className="btn btn-primary btn-circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                        </svg>
                                        </a>

                                        <a href={banner.next} className="btn btn-primary btn-circle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );

};
const banners = [
    {
        title: 'Affordable Price For Car Servicing',
        disc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide2',
        prev: '#slide4'
    },
    {
        title: 'Affordable Price For Car Servicing',
        disc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide3',
        prev: '#slide1'
    },
    {
        title: 'Affordable Price For Car Servicing',
        disc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide4',
        prev: '#slide2'
    },
    {
        title: 'Affordable Price For Car Servicing',
        disc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide1',
        prev: '#slide3'
    },
]

export default Banner;