import React from 'react'
import Header from '../Header'
import './style.css'

function Home() {
    return (
        <>

            <Header />
            
            <div className='container flex justify-between items-center mx-auto relative top-[20vh]'>
                <div>
                    <h1 className='text-6xl font-black text-[#2F2F2F]'>Create your <span className='modern relative'> modern </span> <br /> photo gallery.</h1>
                    <p className='mt-10 text-lg font-medium text-[#2f2f2fbb]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sapiente repudiandae necessitatibus officia magni dolore ex.</p>
                    <button className='py-3 px-8 mt-8 border border-[#CC7722] rounded-2xl text-lg font-regular'>Get Started</button>
                </div>

                <div className='flex flex-col items-center gap-2 w-[40%]'>
                    <div className='flex items-center w-full h-full gap-3'>
                        <div className='rounded-xl bg-[#CC7722] w-[50%] h-[8rem]'></div>
                        <div className='rounded-xl bg-[#CC7722] w-[50%] h-[8rem]'></div>
                    </div>
                    <div className='rounded-xl bg-[#2F2F2F] w-full h-[10rem]'></div>
                </div>
            </div>
        </>
    )
}

export default Home