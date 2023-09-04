import stepImage from '../../assets/Images/steppicture.png'
const Steps = () => {
    return (
        <div className='mt-20'>

           <div className='space-y-5 text-center mb-10'>

           <h1 className="text-5xl font-bold">Install and use with simple steps</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis</p>


           </div>


            <div className='flex justify-center space-x-10'>


                <div className='space-y-5 text-left'>

                   <button className='border-s-4 border-black p-2 block w-[360px] text-left' style={{background : 'linear-gradient(270deg, #FFF 0%, #3B82F6 444.17%)'}}>
                    <p className='text-sm font-bold'>WEBSDK</p>
                    <h3 className='text-[#3B82F6] font-semibold'>Add SDK Script</h3>
                   </button>
                   <button className='block w-[360px] text-left' >
                    <p className='text-sm text-[#999CA0]'>CAPTURE WITH MEDIA</p>
                    <h3 className=' font-semibold'>Screenshot or Record <br /> Session with logs</h3>
                   </button>
                   <button className='block w-[360px] text-left' >
                    <p className='text-sm text-[#999CA0]'>CHAT</p>
                    <h3 className=' text font-semibold'>Detailed Insights in  Dashboard</h3>
                   </button>
                </div>

                <div>

                    <img className='max-w-screen-sm' src={stepImage} alt="" />
                </div>



            </div>
            
        </div>
    );
};

export default Steps;