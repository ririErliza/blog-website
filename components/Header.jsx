import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-50'>
        <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <a>Design</a>
            </div>
            <div>
                <div className="flex">
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Youtube</a>
                </div>
            </div>
        </div>
    </header>
  )
}
