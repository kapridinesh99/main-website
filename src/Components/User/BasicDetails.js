import { useEffect, useState } from 'react';
import { EachField, getCredentials, getUserId } from '../../Functions/util';
import Loader from '../Loader';
import './User.css';
import { useMutation } from 'react-query';
import { editUserProfile } from '../../Functions/user';

export const editableFields = ['first_name', 'last_name'];
export const blackListedFields = ['referral_code_used', 'balance', 'user_own_referral_code', 'initial_investment'];

function BasicDetails({ userProfileData, isLoading }) {
  const [formState, setFormState] = useState({
    isEditable: false,
    formData: {},
  });

  const editUserProfileMutation = useMutation(editUserProfile);
  const { isLoading: _isLoading } = editUserProfileMutation;
  
  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      formData: {...userProfileData},
    }));
  }, [userProfileData]);

  const handleEditField = ({ e, key, value }) => {
    setFormState((prevState) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [key]: value,
      },
    }));
  };

  const saveDetails = () => {
    const {userID} = getCredentials();
    const payload = {
      userID,
      ...formState.formData,
    };
    editUserProfileMutation.mutate(({ payload }), {
      onSuccess: ({ result }) => {
        setFormState((prevState) => ({
          ...prevState,
          isEditable: false,
        }));
      }
    });
  };

  const enableEdit = () => {
    setFormState(prevState => ({
      ...prevState,
      formData: userProfileData,
      isEditable: !prevState.isEditable,
    }));
  };

  return (
    <article className='flex column gap-l'>
      { isLoading
        ? <Loader />
        : Object.entries(formState.formData ?? {})
          .map((entry, index) => (entry &&
            <EachField
              key={index}
              {...{
                entry,
                editableFields,
                blackListedFields,
                onChange: handleEditField,
                isEditable: formState.isEditable
              }} />
          )) }
      <br />
      <div className='flex align-center space-between'>
        <button className='edit-btn' onClick={enableEdit}>{formState.isEditable ? 'Revert' : 'Edit'}</button>
        {  _isLoading 
          ? <Loader /> 
          : formState.isEditable && (<button type='submit' className='save-btn' onClick={saveDetails}>Save</button>) 
        }
        
      
      </div>
    </article>
  )
}

export default BasicDetails