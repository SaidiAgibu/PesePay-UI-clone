import React from 'react'

function MobileNav() {
    return (
        <div className='w-full  md:hidden flex justify-end'>
            <div className='flex flex-col items-end justify-items-end w-[60vw] relative'>
                <ul className='list-none  gap-2 text-sm  flex flex-col items-end h-[35vh] pr-8 w-full'>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Business</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Entertainment</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>General</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Technology</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Sports</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Science</li>
                    <li className='hover:scale-x-125 hover:scale-y-125 transition delay-300 ease-in-out cursor-pointer'>Health</li>
                </ul>
                <div className=' relative w-full py-3 pr-8 bg-white'>
                    <input type="text" placeholder='Search News' className='w-full p-2 outline-none border-none bg-gray-500 text-white  rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default MobileNav