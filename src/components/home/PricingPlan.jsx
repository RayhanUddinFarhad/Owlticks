import React from 'react';
import { FaWindowMaximize } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const PricingPlan = () => {
    const MonthlyPlan = [
        {
            name: "Basic plan",
            price: 49,
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
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Get Started
                                    </button>
                                </div>
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
                        yearlyPlan.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl shadow-2xl'>
                                <div>
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Get Started
                                    </button>
                                </div>
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