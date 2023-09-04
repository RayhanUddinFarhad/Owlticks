import man from '../../assets/Images/manBanner.png'
import woman from '../../assets/Images/womanBanner.png'
import vector1 from '../../assets/vectors/vector1.png'
import vector2 from '../../assets/vectors/vector2.png'
import vector3 from '../../assets/vectors/vector3.png'
const Banner = () => {
    return (
        <div className="space-y-6  max-w-screen-xl text-center mt-32">
<h1 className="text-5xl font-bold justify-center">Effortlessly Capture Bugs with Logs</h1>
<p>Avoid the hassle of going back and forth with different teams by capturing every step of your journey through seamless log tracking made simple.</p>            


<div className="flex justify-center items-center space-x-5">

<button className="button-primary">Request a demo</button>
<button className="button-secondary">Get Started</button>
</div>


<div className="flex justify-center">

    <div>


        <img src= {man} alt="" />
    </div>

    <div className='relative'>

    

    

<img className='absolute -top-5' src= {vector1} alt="" />
<img className='absolute top-2' src= {vector2} alt="" />
<img className=' top-2' src= {vector3} alt="" />




    </div>
    <div>


        <img src= {woman} alt="" />
    </div>




</div>

        </div>
    );
};

export default Banner;