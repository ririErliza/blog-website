import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

{/* <Link href={"/"}><a className=''></a></Link> */}

export default function Author() {
  return (
    <div className='author flex py-5'>
        <Image className='rounded-full object-cover' src={"/images/author/3.jpg"} width={30} height={30} alt="author"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><a className='text-md font-bold text-gray hover:text-gray-600'>Flying High</a></Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
        </div>
    </div>
  )
}
