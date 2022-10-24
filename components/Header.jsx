import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-50 px-5'>
        <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
            <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                <input className='mt-1 block w-60 px-3 py-2 bg-white border borders-slate-300 rounded-full text-s, shadow-sm placehoder-slate-500' type="text" placeholder="Search..." />
            </div>
            <div className='shrink w-80 sm:order-2 '>
                <a>Design</a>
            </div>
            <div className='w-96 order-3 flex justify-center'>
                <div className="flex gap-6">
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Youtube</a>
                </div>
            </div>
        </div>
    </header>
  )
}
