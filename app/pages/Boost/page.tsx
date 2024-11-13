'use client'

import BottomNav from '../../components/ui/page'


const Boost = () => {

  


  
  return (
    <div className="bg-black flex justify-center font-bold">
      <div className="w-full bg-[#1a1c32] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <h1>Your daily boosters:</h1>
          </div>
            <div className='w-full flex justify-between items-center mt-6'>
              <button className='bg-[#1f2942] opacity-[.5] bg-cards w-[48%] border-[1px] border-gray-600 rounded-[8px] p-[8px] flex space-x-1'>
                <div className='class="w-[40px] flex items-center justify-center"'>
                  <img src="/clever.png" alt="/" className='w-[40px] grayscale-[1]' />
                </div>
                <div className='flex flex-1 flex-col text-left'>
                  <span className='class="font-semibold tapguru"'>Tapping Guru</span>
                  <span className='font-normal tapguru2'>47 m 4s</span>
                </div>
              </button>
              <button className='bg-[#1f2942] opacity-100 bg-cards w-[48%] border-[1px] border-gray-600 rounded-[8px] p-[8px] flex'>
                <div className='class="w-[40px] flex items-center justify-center"'>
                  <img src="/clever.png" alt="/" className='w-[40px]' />
                </div>
                <div className='flex flex-1 flex-col text-left'>
                  <span className='class="font-semibold tapguru"'>Full Tank</span>
                  <span className='font-normal tapguru2'>3 / 3</span>
                </div>
              </button>
            </div>
              <div className='w-full flex flex-col pt-4'>
                <h3 className='text-[18px] font-semibold'>Boosters:</h3>
              </div>

            <div className='w-full flex flex-col h-[50vh] pt-2 pb-[60px] overflow-y-auto'>
              <div className='flex alltaskscontainer flex-col w-full space-y-2 pb-20'>
                <button  className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/tap.png" alt="/" className='w-[35px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Multitap</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>2000</span>
                          <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                          <span className='text-[#9a96a6] text-[15px]'>Level 1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/energy.png" alt="/" className='w-[35px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Energy Limit</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>2000</span>
                          <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                          <span className='text-[#9a96a6] text-[15px]'>Level 1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/flash.png" alt="/" className='w-[35px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Recharging Speed</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>2000</span>
                          <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                          <span className='text-[#9a96a6] text-[15px]'>Level 1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>

                <button className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center'>
                  <div className='flex flex-1 items-center space-x-2'>
                    <div>
                      <img src="/bots.png" alt="/" className='w-[35px]' />
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                      <span className='font-semibold text-[17px]'>Tap Bot</span>
                      <div className='flex items-center space-x-1'>
                        <span className='w-[20px] h-[20px]'>
                          <img src="/clever.png" alt="/" className='w-full' />
                        </span>
                        <span className='font-medium flex items-center'>
                          <span className='text-[15px]'>2000</span>
                          <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                          <span className='text-[#9a96a6] text-[15px]'>Level 1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <img src="/clever.png" alt="/" width={20} height={20} />
                </div>
                </button>
                
              </div>
            </div>

        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default Boost