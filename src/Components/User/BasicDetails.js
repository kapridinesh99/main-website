import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';
import { EachField, getCredentials } from '../../Functions/util';
import { editUserProfile } from '../../Functions/user';
import { editableFields, blackListedFields } from './util';
import Loader from '../Loader';
import './User.css';
import { defaultProfileUrl } from '../../Functions/constants';

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
      formData: { ...userProfileData },
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
    const { userID } = getCredentials();
    const alteredKeys = {
      firstName: formState.formData['first_name'],
      lastName: formState.formData['last_name'],
    };
    const payload = {
      userID,
      ...alteredKeys,
    };
    editUserProfileMutation.mutate(({ payload }), {
      onSuccess: ({ result }) => {
        setFormState((prevState) => ({
          ...prevState,
          isEditable: false,
        }));
      },
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
      {isLoading
        ? <Loader />
        : (
          <div className='basic-details'>
            <header>
              <h1>Personal Information</h1>
              <p>Update your information here</p>
            </header>
            <br /> <br />
            <main className='flex column gap-xl'>
              {Object.entries(formState.formData ?? {})
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
                ))}
            </main>
          </div>
        )}
      <br />
      <div className='flex align-center gap-5xl'>
        <button className='edit-btn' onClick={enableEdit}>{formState.isEditable ? 'Revert' : 'Edit'}</button>
        {_isLoading
          ? <Loader />
          : formState.isEditable && (<button type='submit' className='save-btn' onClick={saveDetails}>Save</button>)
        }
      </div>
    </article>
  )
}

export default BasicDetails