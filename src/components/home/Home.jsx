import Banner from "./Banner";
import Beproductive from "./Beproductive";
import Features from "./Features";
import Frameworks from "./Frameworks";
import Issue from "./Issue";
import Onpremise from "./Onpremise";
import PricingPlan from "./PricingPlan";
import Steps from "./Steps";
import Support from "./Support";

const Home = () => {
    return (
       <div className="space-y-20">


        
<Banner></Banner>
        <Steps></Steps>
        <Issue></Issue>
        <Support></Support>
        <Beproductive></Beproductive>
        <Frameworks></Frameworks>
        <Onpremise></Onpremise>
        <Features></Features>
        <PricingPlan></PricingPlan>

       </div>
    );
};

export default Home;