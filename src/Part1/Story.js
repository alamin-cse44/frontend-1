import React from 'react';

const Story = ({data}) => {
    return (
        <div className='mt-3 bg-white text-black'>
            <h2 className='text-justify mt-5 font-medium p-2'>{data[0].stories.content}</h2>
            
            <hr className='my-5' />

            <div className='flex justify-between p-2'>
                <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={data[0].stories.author.profileImage} alt='' />
                                    </div>
                    </div>
                    <h3 className='font-bold ml-3'>{data[0].stories.author.name}</h3>
                    
                    </div>

                    <div className=' mt-7 hidden lg:block'>
                        <p className='text-slate-400'>{ data[0].stories.created } { data[0].stories.time }</p>
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
        </div>
    );
};

export default Story;