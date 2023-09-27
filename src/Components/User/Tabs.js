import { useState } from 'react';
import { Tab } from '@headlessui/react'
import KycDetails from './KycDetails';
import Transactions from './Transactions';
import BasicDetails from './BasicDetails';
import ChangePassword from './ChangePassword';
import './Tabs.css';

const Tabsa = ({ userProfileData, isLoading, isError, error }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSwitch = d => setSelectedTab(d);

  const userProfileSections = [
    {
      tab: 'Basic Details',
      component: <BasicDetails {...{ userProfileData, isLoading, isError, error }} />,
    },
    {
      tab: 'Transactions',
      component: <Transactions {...{ userProfileData }} />,
    },
    {
      tab: 'KYC Details',
      component: <KycDetails {...{ userProfileData }} />,
    },
    {
      tab: 'Change Password',
      component: <ChangePassword {...{ userProfileData }} />,
    },
  ];

  return (
    <Tab.Group as='section' onChange={handleTabSwitch} className='profile-tabs-wrapper'>
      <Tab.List className='tabs-header-wrapper flex justify-center'>
        {userProfileSections.map(({ tab }, index) => (
          <Tab key={index}>
            <div className={`each-tab-header ${index === selectedTab ? 'active-tab' : null}`}>
              {tab} </div>
          </Tab>
        ))}
      </Tab.List>
      <br /> <br />
      <Tab.Panels className='tabs-panels-wrapper'>
        {userProfileSections.map(({ component }, index) => (
          <Tab.Panel key={index}>
            {component}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabsa;