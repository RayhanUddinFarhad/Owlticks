import man from '../../assets/Images/manBanner.png'
import woman from '../../assets/Images/womanBanner.png'
import vector1 from '../../assets/vectors/vector1.png'
import vector2 from '../../assets/vectors/vector2.png'
import vector3 from '../../assets/vectors/vector3.png'
import screenshot from '../../assets/vectors/Screenshot.png'
import hero from '../../assets/Images/Hero Section.png'
const Banner = () => {
    return (
        <div className="space-y-6   text-center mt-32">
<h1 className="text-5xl font-bold justify-center">Effortlessly Capture Bugs with Logs</h1>
<p>Avoid the hassle of going back and forth with different teams by capturing every step of your journey through seamless log tracking made simple.</p>            


<img src={hero} alt="" />

        </div>



    );
};

export default Banner;