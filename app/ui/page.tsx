import React from 'react'
import Link from 'next/link'



const BottomNav = () => {
  return (
    <div className='fixed bottom-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50  text-xs'>
        <Link href="/Ref" className='bg-white/30 w-[70px] h-[65px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
            <img className='justify-between items-center pt-2 m-auto' src="/bluesky.svg" alt="/" width={35} height={35}/>
            <p className='font-sans text-sm'>Ref</p>
        </Link>
        <Link href="/Task" className='bg-white/30 w-[70px] h-[65px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
            <img className='justify-between items-center pt-2 m-auto' src="/bluesky.svg" alt="/" width={35} height={35}/>
            <p className='font-sans text-sm'>Task</p>
        </Link>
        <Link href="/" className='bg-white/30 w-[70px] h-[65px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
            <img className='justify-between items-center pt-2 m-auto' src="/bluesky.svg" alt="/" width={35} height={35}/>
            <p className='font-sans text-sm' >Tap</p>
        </Link>
        <Link href="/Boost" className='bg-white/30 w-[70px] h-[65px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
            <img className='justify-between items-center pt-2 m-auto' src="/bluesky.svg" alt="/" width={35} height={35}/>
            <p className='font-sans text-sm' >Boost</p>
        </Link>
        <Link href="/Wallet" className='bg-white/30 w-[70px] h-[65px] p-1 text-center ml-2 justify-between items-center rounded-xl'>
            <img className='justify-between items-center pt-2 m-auto' src="/bluesky.svg" alt="/" width={35} height={35}/>
            <p className='font-sans text-sm' >Wallet</p>
        </Link>
    </div>
  )
}

export default BottomNav