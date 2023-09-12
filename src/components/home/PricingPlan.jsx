import React from 'react';
import { FaWindowMaximize } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const PricingPlan = () => {
    const MonthlyPlan = [
        {
            name: "Basic plan",
            price: 49,
            features: [
                "Unlimited issue reports",
                "10 Team Members",
                "Unlimited Workspaces",
                "4 Collections",
                "All Integrations",
               

            ],
        },
        {
            name: "Business plan",
            price: 35,
            features: [
                "25 Team Members",
                "Unlimited Collections",
                "Active Support",
                "+ Everything in Basic",
               
            ],
        },
       
    ];

    const yearlyPlan = [
        {
            name: "Basic plan",
            price: 12,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "Startup",
            price: 35,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        
    ];
    return (
      <div>

        <div className='text-center space-y-7 my-10'>

            <h1 className='text-4xl font-bold'>Pricing plan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

<div className='flex justify-center mx-auto'>

<Tabs className=''  selectedTabClassName='button-primary text-lg '>
    <TabList   className='text-lg text-[#9CA3AF] mx-auto flex justify-center  '>
      
      <Tab>Monthly</Tab>
      <Tab>Yearly</Tab>
    </TabList>

    
    <TabPanel >
    <section className='py-14   '>
            <div className="max-w-screen-xl  px-4 text-gray-600 md:px-8">
                
                <div className='mt-16 space-y-6  gap-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-2 '>
                    {
                        MonthlyPlan.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl shadow-2xl'>
                                <div>
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-4xl font-bold'>
                                        ${item.price} <span className="text-xl text-black font-bold">/mo</span>
                                    </div>

                                    <div className="flex-1 flex items-end my-8">
                                    <button className='px-6 py-3 rounded-2xl w-full font-semibold text-sm duration-150 text-white bg-[#0EA5E9] '>
                                        Get Started
                                    </button>
                                </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.8479 7.56384L12.2479 18.1638C12.154 18.2585 12.0262 18.3117 11.8929 18.3117C11.7596 18.3117 11.6318 18.2585 11.5379 18.1638L6.1479 12.7738C6.05324 12.68 6 12.5522 6 12.4188C6 12.2855 6.05324 12.1577 6.1479 12.0638L6.8479 11.3638C6.94178 11.2692 7.06958 11.2159 7.2029 11.2159C7.33622 11.2159 7.46402 11.2692 7.5579 11.3638L11.8879 15.6938L21.4379 6.14384C21.6357 5.95205 21.9501 5.95205 22.1479 6.14384L22.8479 6.85384C22.9426 6.94772 22.9958 7.07552 22.9958 7.20884C22.9958 7.34216 22.9426 7.46995 22.8479 7.56384Z" fill="#10B981"/>
</svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>    </TabPanel>
    <TabPanel>
    <section className='py-14   '>
            <div className="max-w-screen-xl  px-4 text-gray-600 md:px-8">
                
                <div className='mt-16 space-y-6  gap-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-2 '>
                    {
                        MonthlyPlan.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl shadow-2xl'>
                                <div>
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-4xl font-bold'>
                                        ${item.price} <span className="text-xl text-black font-bold">/yearly</span>
                                    </div>

                                    <div className="flex-1 flex items-end my-8">
                                    <button className='px-6 py-3 rounded-2xl w-full font-semibold text-sm duration-150 text-white bg-[#0EA5E9] '>
                                        Get Started
                                    </button>
                                </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.8479 7.56384L12.2479 18.1638C12.154 18.2585 12.0262 18.3117 11.8929 18.3117C11.7596 18.3117 11.6318 18.2585 11.5379 18.1638L6.1479 12.7738C6.05324 12.68 6 12.5522 6 12.4188C6 12.2855 6.05324 12.1577 6.1479 12.0638L6.8479 11.3638C6.94178 11.2692 7.06958 11.2159 7.2029 11.2159C7.33622 11.2159 7.46402 11.2692 7.5579 11.3638L11.8879 15.6938L21.4379 6.14384C21.6357 5.95205 21.9501 5.95205 22.1479 6.14384L22.8479 6.85384C22.9426 6.94772 22.9958 7.07552 22.9958 7.20884C22.9958 7.34216 22.9426 7.46995 22.8479 7.56384Z" fill="#10B981"/>
</svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>     </TabPanel>
  </Tabs>
       </div>
      </div>
    );
};

export default PricingPlan;