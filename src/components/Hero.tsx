'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import ericPhoto from '../../public/eric.jpeg'
import Link from 'next/link'

type Props = {}

export default function Hero ({}:Props) {
    const [text, count] = useTypewriter({
        words : [
            "Hi, I go by Eric",
            "Someone in love with JAVA",
            "Never minds a cup of coffee :)",
        ],
        loop: true,
        delaySpeed:2000
    })
    return ( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={ericPhoto.src} alt='' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>
               {text} 
            </span>
            <Cursor cursorColor='#FF55FF'/>
        </h1>
        <div className='pt-5'>
            <Link href="about"><button className='heroButton'>About</button></Link>
            <Link href="about"><button className='heroButton'>Experience</button></Link>
            <Link href="about"><button className='heroButton'>Skills</button></Link>
            <Link href="about"><button className='heroButton'>Projects</button></Link>
        </div>
        </div>
        
    </div>)
   
}