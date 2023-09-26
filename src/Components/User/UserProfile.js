import OptionsSvg from '../../Assets/OptionsSvg';
import { defaultProfileUrl } from '../../Functions/constants';
import { getCredentials } from '../../Functions/util';
import Loader from '../Loader';
import './UserProfile.css';

function UserProfile({ userProfileData, isLoading }) {
  const copyButton = (d) => {
    navigator.clipboard.writeText(d);
  };

  const { userID } = getCredentials();

  return (
    <article className='user-profile-tab justify-center flex gap-l'>
      {/* <img className='userProfilePic' src={defaultProfileUrl} alt='' /> */}
      <div className="user-details flex flex-wrap align-center justify-between mb-2">
        {
          isLoading ? <Loader className='flex justify-center align-center' size={14} /> :
            <>
              <div className='flex column align-start gap-xl'>
                <div className='userName-text'>Hi {userProfileData?.first_name + ' ' + userProfileData?.last_name}</div> 
                <button onClick={() => copyButton(userID)} className='flex align-center gap-l user-id-btn'>
                {userID}
                  <OptionsSvg />
                </button>
              </div>
              <div className='flex column gap-l '>
                <button onClick={() => copyButton(userProfileData?.user_own_referral_code)} className='flex column align-center gap-l referral-code-btn'>
                  <small>Refer a friend</small>
                  <b className='flex gap-l '>
                    {userProfileData?.user_own_referral_code}
                    <OptionsSvg />
                  </b>
                </button>
              </div>
            </>
        }
      </div>
    </article>
  )
}

export default UserProfile