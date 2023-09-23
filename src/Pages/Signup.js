import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Error from '../Assets/Error';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import useAuth from '../State/AuthProvider';
import { verifyAuth } from '../Functions/auth';
import COVER_IMG from "./assets/cover-img.svg";
import { getCredentials } from '../Functions/util';
import '../App.css';

const Signup = () => {
  const { signupMutation } = useAuth();
  const { isLoading, isError, error, isSuccess } = signupMutation;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElem = e.target;
    const formData = new FormData(formElem);
    const formObj = Object.fromEntries(formData.entries());
    formObj.phone = '+91' + formObj.phone;
    signupMutation.mutate(({ payload: formObj }));
  }

  const navigate = useNavigate();
  useQuery(['authStatus'], {
    queryFn: () => {
      const { userToken } = getCredentials();
      if (!userToken) return false;
      return verifyAuth({ userToken });
    },
    onSuccess: (data) => {
      if (data)
        navigate('/user');
    }
  });

  return (
    <>
      <Header />
      <br /> <br />
      <div className="flex auth-page align-center justify-center">
        {/* <div className="auth-page-art relative w-1/2 h-full flex flex-col">
          <img src={COVER_IMG} alt='' className="" />
        </div> */}

        <div className="auth-form-wrapper bg-[#f5f5f5] justify-between">
          <div className="flex flex-col ">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-3xl font-semibold mb-4">Sign Up</h3>
              <p className="text-base mb-2">
                Welcome! Please enter your details
              </p>
              {
                isSuccess ? (<b className='success-message'>You are registered successfully !</b>) : null
              }              
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col">
                {isError && (<div className='flex align-center justify-center gap-l error-message'> <Error /> {error?.response?.data?.message ?? 'Please check the entered details !'} </div>)}
                <br />

                <div className='group'>
                  <input
                    required
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=''
                  />
                  <label for='firstName'>First Name</label>
                </div>

                <div className='group'>
                  <input
                    required
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=''
                  />
                  <label for='lastName'>Last Name</label>
                </div>

                <div className='group'>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder=''
                  />
                  <label for='email'>Email</label>
                </div>

                <div className='group'>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder=''
                  />
                  <label for='phone'>Phone</label>
                </div>
                <div className='group'>
                  <input
                    id="ReferralCode"
                    name="referralCode"
                    type="text"
                    placeholder=''
                  />
                  <label for='referralCode'>Referral Code</label>
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center">
                  <input required id='hasReadT&C' name='hasReadT&C' type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">I have read <a href='/'>All Terms & Conditions</a></p>
                </div>

                <p className="text-sm font-medium cursor-pointer underline underline-offset-2">
                  Forget Password
                </p>
              </div>

              <div className="w-full flex flex-col">
                <button type='submit' className="w-full bg-[#060606] text-stone-50 rounded-full py-4 p-4  text-center flex items-center justify-center">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <br />
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-black">
              Already have account?{" "}
              <a
                href="/login"
                className="font-semibold underline underline-offset-2 cursor-pointer">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
