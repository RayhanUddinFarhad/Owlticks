import image from '../../assets/Images/steppicture.png'
const Beproductive = () => {
    return (
        <div className="flex justify-center items-center space-x-5 max-w-screen-xl">

            <div className="space-y-5">
                <p className="text-sm">
                    Get Started in Minutes</p>
                <h1 className="text-5xl font-semibold">Be Productive <br />

with <span className="text-[#037AF8]"> Owltics</span></h1>


            <div className="collapse collapse-arrow border-b-2">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Reduce 30% of time spent in reporting issue  </div>
  <div className="collapse-content"> 
    <p className="text-sm">It only takes 5 minutes. Set-up is smooth & simple, with fully <br /> customisable page design to reflect your brand lorem dummy.</p>
  </div>
</div>
<div className="collapse collapse-arrow border-b-2">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Register and create your first support portal  </div>
  <div className="collapse-content"> 
  <p className="text-sm">It only takes 5 minutes. Set-up is smooth & simple, with fully <br /> customisable page design to reflect your brand lorem dummy.</p>  </div>
</div>
<div className="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Enable everyone to report issue easily with every detail
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>



            </div>
            <div className=' h-full'>

    <img className='max-w-xl ' src={image} alt="" />
</div>
            
        </div>
    );
};

export default Beproductive;