import OptionsSvg from '../../Assets/OptionsSvg';
import { defaultProfileUrl } from '../../Functions/constants';
import { getCredentials } from '../../Functions/util';
import Loader from '../Loader';
import './UserProfile.css';

function UserProfile({ userProfileData, isLoading }) {
  const copyButton = () => {
    navigator.clipboard.writeText(userProfileData?.user_own_referral_code);
  };

  const { userID } = getCredentials();

  return (
    <article className='user-profile-tab justify-center flex gap-l'>
      <img className='userProfilePic' src={defaultProfileUrl} />
      <div className="user-details flex flex-wrap align-center justify-between mb-2">
        {
          isLoading ? <Loader className='flex justify-center align-center' size={14} /> :
            <>
              <div className='flex column align-start gap-xl'>
                <div className='userName-text'>Hi {userProfileData?.first_name + ' ' + userProfileData?.last_name}</div> 
                <button onClick={copyButton} className='flex align-center gap-l user-id-btn'>
                {userID}
                  <OptionsSvg />
                </button>
              </div>
              <div className='flex column gap-l '>
                <div>Refer a friend</div>
                <button onClick={copyButton} className='flex align-center gap-l referral-code-btn'>
                  {userProfileData?.user_own_referral_code}
                  <OptionsSvg />
                </button>
              </div>
            </>
        }
      </div>
    </article>
  )
}

export default UserProfile