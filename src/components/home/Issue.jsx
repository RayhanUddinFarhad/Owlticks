import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {  FaWindowMaximize } from "react-icons/fa";

import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import event from '../../assets/Images/Place Holder.png'
const Issue = () => {

  const [selectedTab, setSelectedTab] = useState('event');

  const showContent = (data) => {
    switch (data) {
      case 'event':
        return <div className='space-y-5'>
          <h3 className='text-2xl font-bold'>Track an event</h3>
          <p>Use the capture method to send custom events from yopur codebase. Use this data in PosHog for building cohorts, filtering insights, watching specific session replays, triggering feature flags, adding a user to an A/B test, and more.</p>

            <img src={event} alt="" />

        </div>;
      case 'identify':
        // Add code to display another image for the 'capture' button
        return <div className='space-y-5'>
        <h3 className='text-2xl font-bold'>Identify a user</h3>
        <p>Use the capture method to send custom events from yopur codebase. Use this data in PosHog for building cohorts, filtering insights, watching specific session replays, triggering feature flags, adding a user to an A/B test, and more.</p>

          <img src={event} alt="" />

      </div>;
      case 'record':
        // Add code to display another image for the 'chat' button
        return <div className='space-y-5'>
        <h3 className='text-2xl font-bold'>Record a pageview</h3>
        <p>Use the capture method to send custom events from yopur codebase. Use this data in PosHog for building cohorts, filtering insights, watching specific session replays, triggering feature flags, adding a user to an A/B test, and more.</p>

          <img src={event} alt="" />

      </div>;
      default:
        return null;
    }
  };
    return (
        <div className='mx-auto'>
           <div className="space-y-5 text-center">

           <h1 className="text-5xl font-bold ">Developer get more Insights to <br /> <span className="text-[#3B82F6]">Reproduce the Issue</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis</p>
           </div>

           <div className='mx-auto flex justify-center items-center'>


           <Tabs  selectedTabClassName='tab-active '>
    <TabList   className='text-xl text-[#9CA3AF] border-b-2 border-dashed'>
      <Tab >
        <p className='flex items-center'><FaWindowMaximize className='mr-2'></FaWindowMaximize>
        
        Console Traces</p></Tab>

      <Tab><p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 21L19 21L19 12.5294L19 7L15 3L12 3L5 3L5 12.5294L5 21Z" fill="#9CA3AF" stroke="#9CA3AF" stroke-width="2" stroke-linejoin="round"/>
  <path d="M15 7L19 7L15 3L15 7Z" fill="#9CA3AF"/>
  <path d="M8 12H16" stroke="white" stroke-width="2"/>
  <path d="M8 8H12" stroke="white" stroke-width="2"/>
  <path d="M8 16H16" stroke="white" stroke-width="2"/>
  <path d="M15 2L15 7L20 7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
        
     Detailed Network logs</p></Tab>
      <Tab><p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect x="5" y="3" width="14" height="8" rx="4" stroke="#9CA3AF" stroke-width="2"/>
  <path d="M5 7V12C5 14.2091 6.79086 16 9 16H15C17.2091 16 19 14.2091 19 12V7" stroke="#9CA3AF" stroke-width="2"/>
  <path d="M19 17V12H5V17C5 19.2091 6.79086 21 9 21H15C17.2091 21 19 19.2091 19 17Z" fill="#9CA3AF" stroke="#9CA3AF" stroke-width="2"/>
  <path d="M3 7V10C3 13.3137 5.68629 16 9 16H15C18.3137 16 21 13.3137 21 10V7" stroke="white" stroke-width="2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 13.5C9.33579 13.5 9 13.1642 9 12.75C9 12.3358 9.33579 12 9.75 12C10.1642 12 10.5 12.3358 10.5 12.75C10.5 13.1642 10.1642 13.5 9.75 13.5Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 19.5C9.33579 19.5 9 19.1642 9 18.75C9 18.3358 9.33579 18 9.75 18C10.1642 18 10.5 18.3358 10.5 18.75C10.5 19.1642 10.1642 19.5 9.75 19.5Z" fill="white"/>
</svg>
        
     Browser Storage Info</p></Tab>
      <Tab><p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 9C14.2091 9 16 7.20914 16 5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5C8 7.20914 9.79086 9 12 9Z" fill="#9CA3AF" stroke="#9CA3AF" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M4 20V17C4 14.7909 5.79086 13 8 13H9L12 16L15 13H16C18.2091 13 20 14.7909 20 17V20" fill="#9CA3AF"/>
  <path d="M4 20V17C4 14.7909 5.79086 13 8 13H9L12 16L15 13H16C18.2091 13 20 14.7909 20 17V20H4Z" stroke="#9CA3AF" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
</svg>
        
    User Events</p></Tab>
      <Tab><p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 6C5 5.44771 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V16H5V6Z" stroke="#9CA3AF" stroke-width="2" stroke-linejoin="round"/>
  <path d="M3 18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16H3V18Z" fill="#9CA3AF" stroke="#9CA3AF" stroke-width="2" stroke-linejoin="round"/>
</svg>
        
    Browser & syestem info</p></Tab>
    </TabList>

    <TabPanel>
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedTab(selectedTab === 'event' ? null : 'event')}
            className={` p-2 block w-[360px] text-left ${
              selectedTab === 'event' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>Track an event</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'identify' ? null : 'identify')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'identify' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black'>Identify a user</p>
            <button className='border border-base-content p-1 rounded-lg text-xs mr-2'>Identify</button>
            <button className='border border-base-content p-1 rounded-lg text-xs'>group</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'record' ? null : 'record')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'record' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Record a pageview</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
        </div>

        <div>{selectedTab && showContent(selectedTab)}</div>
      </div>
    </div>    </TabPanel>
    <TabPanel>
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedTab(selectedTab === 'event' ? null : 'event')}
            className={` p-2 block w-[360px] text-left ${
              selectedTab === 'event' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>Track an event</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'identify' ? null : 'identify')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'identify' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Identify a user</p>
            <button className='border border-base-content p-1 rounded-lg text-xs mr-2'>Identify</button>
            <button className='border border-base-content p-1 rounded-lg text-xs'>group</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'record' ? null : 'record')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'record' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Record a pageview</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
        </div>

        <div>{selectedTab && showContent(selectedTab)}</div>
      </div>
    </div>    </TabPanel>
    <TabPanel>
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedTab(selectedTab === 'event' ? null : 'event')}
            className={` p-2 block w-[360px] text-left ${
              selectedTab === 'event' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>Track an event</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'identify' ? null : 'identify')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'identify' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Identify a user</p>
            <button className='border border-base-content p-1 rounded-lg text-xs mr-2'>Identify</button>
            <button className='border border-base-content p-1 rounded-lg text-xs'>group</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'record' ? null : 'record')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'record' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Record a pageview</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
        </div>

        <div>{selectedTab && showContent(selectedTab)}</div>
      </div>
    </div>    </TabPanel>
    <TabPanel>
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedTab(selectedTab === 'event' ? null : 'event')}
            className={` p-2 block w-[360px] text-left ${
              selectedTab === 'event' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>Track an event</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'identify' ? null : 'identify')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'identify' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Identify a user</p>
            <button className='border border-base-content p-1 rounded-lg text-xs mr-2'>Identify</button>
            <button className='border border-base-content p-1 rounded-lg text-xs'>group</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'record' ? null : 'record')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'record' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black font-bold'>Record a pageview</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
        </div>

        <div>{selectedTab && showContent(selectedTab)}</div>
      </div>
    </div>    </TabPanel>
    <TabPanel>
    <div className='mt-20 '>
      <div className='space-y-5 text-center mb-10'>
        <h1 className='text-5xl font-bold'>Install and use with simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis
        </p>
      </div>

      <div className='lg:flex justify-center lg:space-x-10 '>
        <div className='space-y-5 text-left '>
        <button
            onClick={() => setSelectedTab(selectedTab === 'event' ? null : 'event')}
            className={` p-2 block w-[360px] text-left ${
              selectedTab === 'event' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >
            <p className='text-sm font-bold'>Track an event</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'identify' ? null : 'identify')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'identify' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black'>Identify a user</p>
            <button className='border border-base-content p-1 rounded-lg text-xs mr-2'>Identify</button>
            <button className='border border-base-content p-1 rounded-lg text-xs'>group</button>
          </button>
          <button
            onClick={() => setSelectedTab(selectedTab === 'record' ? null : 'record')}
            className={`p-2 block w-[360px] text-left ${
              selectedTab === 'record' ? 'bg-gradient-active border-s-4 border-black' : ''
            }`}
          >            <p className='text-sm text-black'>Record a pageview</p>
            <button className='border border-base-content p-1 rounded-lg text-xs'>capture</button>
          </button>
        </div>

        <div>{selectedTab && showContent(selectedTab)}</div>
      </div>
    </div>    </TabPanel>
  </Tabs>
           </div>
            
        </div>
    );
};

export default Issue;