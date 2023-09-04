import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {  FaWindowMaximize } from "react-icons/fa";

import 'react-tabs/style/react-tabs.css';
const Issue = () => {
    return (
        <div className='mx-auto'>
           <div className="space-y-5 text-center">

           <h1 className="text-5xl font-bold ">Developer get more Insights to <br /> <span className="text-[#3B82F6]">Reproduce the Issue</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis</p>
           </div>

           <div>


           <Tabs  selectedTabClassName='tab-active '>
    <TabList   className='text-xl text-[#9CA3AF] '>
      <Tab >
        <p className='flex items-center'><FaWindowMaximize className='mr-2'></FaWindowMaximize>
        
        Console Traces</p></Tab>

      <Tab>Detailed Network logs</Tab>
      <Tab>Browser storage Info</Tab>
      <Tab>User Events</Tab>
      <Tab>Browser & System Info</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
           </div>
            
        </div>
    );
};

export default Issue;