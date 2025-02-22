import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <>
        <div className="p-4 max-w-[800px] w-full mx-auto min-h-screen flex flex-col gap-10 items-center justify-center text-center">
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO</p>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7x">GYM <span className='text-blue-400 font-medium'>GRIND</span></h1>
            </div>
            
            <p className='text-sm md:text-base font-light'>I acknowledge
                that I may become  
                <span className='text-blue-400 font-medium'> unbelievably aggressive </span>
                  and accept all risks of
                  becoming the local <span className='text-blue-400 font-medium'>mass
                   monster</span>, afflicted 
                   with severe body dismorphia, 
                   unable to fit through doors</p>
            <Button func={() => {
              window.location.href = "#generate"
            }} text={"Accept & Begin"}/>
        </div>
    </>
  )
}
