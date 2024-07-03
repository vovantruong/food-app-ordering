import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='grid grid-cols-2 '>
            <div>
                <h1 className='text-4xl font-semibold'>Everythings is better with a Pizza</h1>
                <p className='my-4 text-gray-5'>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
                <div className='flex gap-4'>
                    <button className='bg-primary text-white px-8 py-2 rounded-full'>Order now</button>
                    <button>Lear now</button>
                </div>
            </div>
            <div className='relative '>
                <Image src="/pizza.png" layout="fill" objectFit='contain' alt='pizza' />
            </div>
        </section>

    )
}

export default Hero