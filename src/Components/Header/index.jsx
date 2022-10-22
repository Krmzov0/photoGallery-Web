import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='container flex items-center justify-between mx-auto py-8 border-b border-[#2f2f2f28]'>
                <div>
                    <Link to='/'><h2 className='relative font-bold text-2xl text-[#2F2F2F] flex items-end'>museo <p className='text-4xl font-bold text-[#CC7722] relative bottom-[1px]'>.</p></h2></Link>
                </div>

                <div className='flex items-center gap-x-3 flex-row-reverse'>
                    <div className='border p-[6px] border-[#2f2f2f28] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#2F2F2F" className="w-7 h-7 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>

                    <div className='border p-[6px] border-[#2f2f2f28] rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user cursor-pointer" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#2F2F2F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header