import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-[#1a1c32] bg-opacity-60 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-300`}>
      <div className={`flex items-center justify-center h-full`}>
        <div className={`bg-[#252b47] rounded-lg w-full p-6 m-4 transition-transform transform ${isOpen ? 'scale-100' : 'scale-95'} duration-300`} onClick={(e) => e.stopPropagation()}>
          <span className="absolute rounded-full text-white text-[30px] top-4 right-4 cursor-pointer" onClick={onClose}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mt-8">Settings</h2>
          
          <div className=' w-full h-14 rounded-lg p-2 bg-gray-600/40 border border-gray-600/60 mt-4'>
            <div className='flex'>
              <p className='text-base'>Select language </p>
              <span className='absolute right-10 mt-3'><img src="/chevron.png" alt="clever" width={15} height={15}/></span>
            </div>
            <p className='text-[12px] text-gray-500'>English</p>
          </div>


          <div className=' w-full h-14 rounded-lg p-2 bg-gray-600/40 border border-gray-600/60 mt-4'>
            <div className='flex'>
              <p className='text-base'>Choose exchange </p>
              <span className='absolute right-10 mt-3'><img src="/chevron.png" alt="clever" width={15} height={15}/></span>
            </div>
            <p className='text-[12px] text-gray-500'>Binance</p>
          </div>
          

          <div className='px-4 mt-4 flex justify-center'>
            <div className="px-4 py-2 flex items-center space-x-2">
                <p className="text-sm text-gray-600/60">Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;