import image from '../../assets/Images/cryptocurrency-mining 1.png'
const Onpremise = () => {
    return (
        <div className="flex max-w-screen-lg justify-center mx-auto items-center">
            <div className="space-y-5">

                <h1 className="font-bold text-4xl ">On Promise Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <button className="button-primary">Request a Demo</button>
            </div>


            <div>
                <img className='max-w-4xl' src= {image} alt="" />


            </div>
            
        </div>
    );
};

export default Onpremise;