import Image from 'next/image'
import React from 'react'
import pic from '../public/illustration-article.svg'
import avatar from '../public/image-avatar.webp'

const Home = () => {
  return (
    <main className='container bg-[#f4d04e] h-screen w-full max-w-[3000px] flex items-center justify-center'>
      <section className='bg-[#ffffff] flex items-start justify-start p-3 flex-col w-[80%] md:w-1/3 lg:w-1/4 mx-auto rounded-2xl border border-e-8 border-b-8 gap-2'>
        <Image alt='img' src={pic} className='w-full'/>

        <p className='text-[#121212] w-[100px] bg-[#f4d04e] text-sm font-bold text-center rounded-sm'>Learning</p>

        <p className='text-[#6b6b6b] text-sm font-semibold'>Published 21 Dec 2023</p>

        <h4 className='text-[#121212] text-xl font-bold'>HTML & CSS foundations</h4>

        <p className='text-[#6b6b6b]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

        <div className='flex items-center justify-start gap-2'>
          <Image alt='avatar' src={avatar} className='w-10'/>
          <p className='text-sm text-[#121212] font-bold'>Greg Hooper</p>
        </div>
      </section>
    </main>
  )
}

export default Home