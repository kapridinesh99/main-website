import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Tabs from '../Components/User/Tabs';
import { verifyAuth } from '../Functions/auth';
import { getUserProfile } from '../Functions/user'
import UserProfile from '../Components/User/UserProfile';
import { getCredentials } from '../Functions/util';

function User() {
  const navigate = useNavigate();
  const [userProfileData, setUserProfileData] = useState(null);

  useQuery(['authStatus'], {
    queryFn: () => {
      const { userToken } = getCredentials();
      if (!userToken) return false;
      return verifyAuth({ userToken });
    },
    onSuccess: (data) => {  
      if (!data)
        navigate('/login')
    }
  });

  const getUserProfileMutation = useMutation(getUserProfile);
  const { isLoading, isError, error } = getUserProfileMutation; 

  useEffect(() => {
    const { userID } = getCredentials();
    getUserProfileMutation.mutate({ userID }, {
      onSuccess: ({ user_data }) => {
        setUserProfileData({ ...user_data, userId: userID });
      }
    })
  }, []);

  return (
    <>
      <Header />
      <UserProfile {...{ userProfileData, isLoading, isError, error }} />
      <Tabs {...{ userProfileData, isLoading, isError, error }} />
      <Footer />
    </>
  )
}

export default User