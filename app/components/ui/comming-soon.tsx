import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modals: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-[#1a1c32] bg-opacity-60 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-300`}>
      <div className={`flex items-center justify-center h-full`}>
        <div className={`bg-[#252b47] rounded-lg w-full p-6 m-4 transition-transform transform ${isOpen ? 'scale-100' : 'scale-95'} duration-300`} onClick={(e) => e.stopPropagation()}>
          <span className="absolute rounded-full text-white text-[30px] top-4 right-4 cursor-pointer" onClick={onClose}>
            &times;
          </span>
          <div className='opacity-100 mt-0 ease-in duration-300 w-full bg-modal !bottom-0 relative rounded-[16px] flex flex-col justify-center p-8'>
            <div className='w-full flex justify-center flex-col items-center space-y-3'>
              <div className='w-full items-center justify-center flex flex-col space-y-2'>
                <span className='w-[60px] flex items-center'>
                  <img src="/block.png" alt="block"  width={60} height={60}/>
                </span>
                <p className='font-medium'>not available yet</p>
              </div>
              <h3 className='font-medium text-center text-[20px] text-[#ffffff] pt-2 pb-2 uppercase'>LOCKED!</h3>
              <p className='pb-6 text-[14px] w-full text-center'>Coming soon!!!</p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Modals;