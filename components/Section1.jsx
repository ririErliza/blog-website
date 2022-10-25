import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
  return (
    <section className='py-16'>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

        {Slide()}

        </div>

    </section>
  )
}

function Slide(){
    return (
        <div className='grid md:grid-cols-2'>
            <div className='image'>
                <Link href={"/"}><a> <Image src={"/images/9.jpg"} width={600} height={600} layout="responsive" alt=""/></a></Link>
                

            </div>
            <div className="info">
                <div className="category">
                    <Link href=""><a ></a></Link>
                </div>

            </div>
        </div>
    )
}
