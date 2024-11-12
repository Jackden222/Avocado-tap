import React from 'react'
import BottomNav from '../ui/page'

const Ref = () => {
  return (
    <div className="bg-black flex h-screen justify-center">
      <div className="w-full bg-[#1a1c32] text-white font-bold flex flex-col max-w-xl">
        <div className="px-4 mt-20 flex justify-center">
          <div className="px-4 py-2 flex items-center space-x-2">
            <h1 className="text-4xl text-white">0 Users</h1>
          </div>
        </div>
          <div className='flex m-auto mt-4 rounded-2xl p-4 px-2 bg-[#1f2942] w-[90%] h-36'>
            <div className='p-4'>
              <p className='text-white text-xl'>My invite link: <button className='bg-[#0955ab] p-2 ml-auto rounded-2xl text-lg'>Copy</button></p>
              <p className='text-gray-500 text-sm mt-4'>https://t.me/plutotap_bot?start=r749982080</p>
            </div>
          </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default Ref