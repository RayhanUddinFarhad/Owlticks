import frame from '../../assets/Images/Frameworks.png'
const Frameworks = () => {
    return (
        <div className="flex justify-center max-w-screen-lg items-center space-x-5 mx-auto">

            <img  src={frame} alt="" />

            <div className='space-y-5'>
                <h1 className='text-4xl font-bold'>Support for all the
Modern frameworks</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
<button className='button-secondary text-semibold'>View all Frameworks</button>


            </div>
            
        </div>
    );
};

export default Frameworks;