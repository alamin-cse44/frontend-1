import React from 'react';

const ShortStoryP1 = ({ data }) => {
    console.log(data[0].stories.coverImage);
    // grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2
    return (
        <>
            <div className="hero min-h-screen bg-white text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={data[0].stories.coverImage} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h2 className="font-bold sm:text-xl lg:text-3xl mb-5">{data[0].stories.title}</h2>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center'>
                                <div className="avatar">
                                 <div className="w-20 rounded-full">
                                    <img src={data[0].stories.author.profileImage} alt='' />
                                    </div>
                                </div>
                                <h3 className='font-bold ml-3'>{ data[0].stories.author.name }</h3>
                            </div>
                            
                            <div className='flex justify-center items-center'>
                                <div className="avatar">
                                 <div className="w-20 rounded-full">
                                    <img src={data[0].stories.icon} alt='' />
                                    </div>
                                </div>
                                <h3 className='font-bold ml-3'>{ data[0].stories.community.name}</h3>
                            </div>
                        </div>
                        <hr className='mt-5 mb-5' />
                        <span className='text-slate-400'>{ data[0].stories.created } { data[0].stories.readTime} { data[0].stories.hashtags}</span>
                    </div>
                </div>
                </div>
        </>
    );
};

export default ShortStoryP1;