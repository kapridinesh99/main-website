import { useEffect, useRef } from 'react';
import Transactions from './Transactions';
import BasicDetails from './BasicDetails';
import KycDetails from './KycDetails';
import './Tabs.css';
import ChangePassword from './ChangePassword';

const Tabsa = ({ userProfileData, isLoading, isError, error }) => {
  const tabsHeader = useRef(null);
  const tabsContent = useRef(null);
  const tabIndicator = useRef(null);

  useEffect(() => {
    let tabPanes = tabsHeader.current.getElementsByTagName("div");

    for (let i = 0; i < tabPanes.length; i++) {
      tabPanes[i].addEventListener("click", function () {
        tabsHeader.current.getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        tabIndicator.current.style.top = `calc(80px + ${i * 50}px)`;
        tabsContent.current.getElementsByClassName("active")[0].classList.remove("active");
        tabsContent.current.children[i].classList.add("active");
      });
    };
  }, []);

  return (
    <section className='tabs-wrapper'>
      <div className="tabs">
        <div ref={tabsHeader} className="tab-header">
          <div className="active">
              Basic Details
          </div>
          <div>
              Transactions
          </div>
          <div>
              KYC Verification
          </div>
          <div>
              Change Password
          </div>
        </div>
        <div ref={tabIndicator} className="tab-indicator"></div>
        <div ref={tabsContent} className="tab-content">
          <div className="active each-tab-content">
            <BasicDetails {...{ userProfileData, isLoading, isError, error }} />
          </div>
          <div className='each-tab-content'>
            <Transactions {...{ userProfileData }} />
          </div>
          <div className='each-tab-content'>
            <KycDetails {...{ userProfileData }} />
          </div>
          <div className='each-tab-content'>
            <ChangePassword {...{ userProfileData }} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tabsa;