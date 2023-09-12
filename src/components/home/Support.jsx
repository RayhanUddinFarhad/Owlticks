import logos from '../../assets/icons/Logos.png'
const Support = () => {
    return (
        <div  style={{
            backgroundImage: "linear-gradient(180deg, #F5F8F9 -4.85%, rgba(255, 255, 255, 0.00) 41.32%)"}} className='p-4'>
            <h1 className="text-5xl font-bold text-center ">Support for browsers on both <br /> 
<span className="text-[#0EA5E9]">Mobile</span> and <span className="text-[#3B82F6]">Web</span></h1>


<div className='w-full'>

    <img className='mx-auto max-w-screen-sm ' src= {logos} alt="" />
</div>
            
        </div>
    );
};

export default Support;