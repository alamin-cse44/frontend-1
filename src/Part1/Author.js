import React from 'react';

const Author = ({data}) => {
    return (
        <div className='mt-3 text-white'>
            <h2 className='font-bold text-3xl mb-3 p-2'>Amazing authors to follow</h2>
            <div className='flex justify-between p-5 bg-slate-800 shadow-2xl'>
                <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={data[1].users.profileImage} alt='' />
                            </div>
                        </div>
                    <h3 className='font-bold ml-3'>{data[0].stories.author.name} <span className='text-slate-400'>{data[1].users.summary.stories} stories</span> <br /> <span className='text-slate-400 font-normal'>{data[1].users.bio}</span></h3>
                    
                    </div>
                <div className='flex justify-center items-center'>
                    <p className='mr-2'>{data[1].users.summary.followers} Followers</p>
                    <h4 className='text-blue-700'>Follow</h4>
                </div>
            </div>

            <div className='flex justify-between p-5 bg-slate-800 shadow-2xl my-5'>
                <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={data[1].users.profileImage} alt='' />
                            </div>
                        </div>
                    <h3 className='font-bold ml-3'>{data[0].stories.author.name} <span className='text-slate-400'>{data[1].users.summary.stories} stories</span> <br /> <span className='text-slate-400 font-normal'>{data[1].users.bio}</span></h3>
                    
                    </div>
                <div className='flex justify-center items-center'>
                    <p className='mr-2'>{data[1].users.summary.followers} Followers</p>
                    <h4 className='text-blue-700'>Follow</h4>
                </div>
            </div>

            <div className='flex justify-between p-5 bg-slate-800 shadow-2xl'>
                <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={data[1].users.profileImage} alt='' />
                            </div>
                        </div>
                    <h3 className='font-bold ml-3'>{data[0].stories.author.name} <span className='text-slate-400'>{data[1].users.summary.stories} stories</span> <br /> <span className='text-slate-400 font-normal'>{data[1].users.bio}</span></h3>
                    
                    </div>
                <div className='flex justify-center items-center'>
                    <p className='mr-2'>{data[1].users.summary.followers} Followers</p>
                    <h4 className='text-blue-700'>Follow</h4>
                </div>
            </div>
        </div>
    );
};

export default Author;