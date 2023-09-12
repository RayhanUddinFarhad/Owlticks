import Banner from "./Banner";
import Beproductive from "./Beproductive";
import ConnectWithSoftware from "./ConnectWithSoftware";
import Features from "./Features";
import Frameworks from "./Frameworks";
import Issue from "./Issue";
import Onpremise from "./Onpremise";
import PricingPlan from "./PricingPlan";
import Steps from "./Steps";
import Support from "./Support";
import Testimonals from "./Testimonals";

const Home = () => {
    return (
       <div className="space-y-20 max-w-screen-2xl mx-auto p-2">


        
<Banner></Banner>
        <div className="border-x-2 border-dashed p-2 bg-white rounded-tr-[64px] rounded-tl-[64px] space-y-20">

        <Steps></Steps>
        <Issue></Issue>
        <Support></Support>
        <Beproductive></Beproductive>
        <Frameworks></Frameworks>
        <Onpremise></Onpremise>
        <Features></Features>
        <ConnectWithSoftware></ConnectWithSoftware>
        <PricingPlan></PricingPlan>
        <Testimonals></Testimonals>
        </div>

       </div>
    );
};

export default Home;