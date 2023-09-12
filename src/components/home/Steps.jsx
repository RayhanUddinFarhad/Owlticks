import React, { useState } from 'react';
import stepImage from '../../assets/Images/steppicture.png';

const Steps = () => {
  const [selectedImage, setSelectedImage] = useState('websdk');

  const showContent = (data) => {
    switch (data) {
      case 'websdk':
        return <img className='max-w-screen-sm' src={stepImage} alt='' />;
      case 'capture':
        // Add code to display another image for the 'capture' button
        return <img className='max-w-screen-sm' src={stepImage} alt='' />;
      case 'chat':
        // Add code to display another image for the 'chat' button
        return <img className='max-w-screen-sm' src={stepImage} alt='' />;
      default:
        return null;
    }
  };

  return (
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedImage(selectedImage === 'websdk' ? null : 'websdk')}
            className={` p-2 block w-[360px] text-left ${
              selectedImage === 'websdk' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>WEBSDK</p>
            <h3 className='text-[#3B82F6] font-semibold'>Add SDK Script</h3>
          </button>
          <button
            onClick={() => setSelectedImage(selectedImage === 'capture' ? null : 'capture')}
            className={`p-2 block w-[360px] text-left ${
              selectedImage === 'capture' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-[#999CA0]'>CAPTURE WITH MEDIA</p>
            <h3 className=' font-semibold'>Screenshot or Record <br /> Session with logs</h3>
          </button>
          <button
            onClick={() => setSelectedImage(selectedImage === 'chat' ? null : 'chat')}
            className={`p-2 block w-[360px] text-left ${
              selectedImage === 'chat' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-[#999CA0]'>CHAT</p>
            <h3 className=' text font-semibold'>Detailed Insights in Dashboard</h3>
          </button>
        </div>

        <div>{selectedImage && showContent(selectedImage)}</div>
      </div>
    </div>
  );
};

export default Steps;
