import Image from 'next/image'
import React from 'react'
export default function Footer() {
    return (
        <footer className='flex  flex-col  border-t text-white  border-gray-200'>
            <div className='flex  flex-wrap justify-between gap-5 bg-blue-600 sm:px-16 px-6 py-5'>
                <div className='flex flex-wrap justify-start item-start gap-6'>
                    <div>

                        <div className='flex items-center'>
                            {/* <Image src={logo} width={110} height={18} alt='loading..' /> */}
                            <div className='font-bold -ml-3'>TODO APP</div>
                        </div>
                        <div className=' text-xs ml-5 text-white'>TODO APP 2023 <br />
                            All right reserved ©
                        </div>
                    </div>
                </div>
                
                <div className='a'>
                    <div className=' mt-5 font-bold'>About</div>
                    <ul>
                        <li className=' text-sm'>How it works</li>
                        <li className=' text-sm'>Featured</li>
                    </ul>
                </div>
                <div className='a'>
                    <div className=' mt-5 font-bold' >Company</div>
                    <ul>
                        <li className=' text-sm'>Events</li>
                        <li className=' text-sm'>Blog</li>
                  
                    </ul>
                </div>
                <div className='a'>
                    <div className=' mt-5 font-bold'>Social</div>
                    <ul>
                        <li className=' text-sm'>Discord</li>
                        <li className=' text-sm'>Instagram</li>
                
                    </ul>
                </div>
            </div>
            <div className='mx-6 flex justify-between text-xs border-t-2'>
                <div>©2023 CarHub:All right reserved</div>
                <div className='flex justify-between gap-4'>
                    <div>Privacy & Policy</div>
                    <div>Term & condition</div>
                </div>
            </div>
        </footer>
    )
}
