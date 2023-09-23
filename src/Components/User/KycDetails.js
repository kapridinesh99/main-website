import React, { useEffect, useState } from 'react'
import { EachField, getCredentials } from '../../Functions/util';
import { useMutation } from 'react-query';
import { updateUserKYC } from '../../Functions/user';
import { kycBlackListedFields, kycEditableFields } from './util';
import Loader from '../Loader';

function KycDetails({ userProfileData, isLoading }) {
    const [formState, setFormState] = useState({
        isEditable: false,
        formData: {},
    });

    const editUserProfileMutation = useMutation(updateUserKYC);
    const { isLoading: _isLoading } = editUserProfileMutation;

    useEffect(() => {
        const sanitizedEntries = userProfileData ?? {};
        // iterate over entries of userProfileData
        Object.entries(userProfileData ?? {}).forEach(([key, value]) => {
            if (key === 'pan_number') {
                const pattern = /^[A-Z]{5}\d{4}[A-Z]$/;
                if (!pattern.test(value)) {
                    sanitizedEntries[key] = '';
                } else {
                    sanitizedEntries[key] = value;
                }
            } else if (key === 'aadhar_number') {
                const pattern = /^\d{12}$/;
                if (!pattern.test(value)) {
                    sanitizedEntries[key] = '';
                } else {
                    sanitizedEntries[key] = value;
                }
            } else {
                sanitizedEntries[key] = value;
            }
        });
        setFormState((prevState) => ({
            ...prevState,
            formData: { ...sanitizedEntries },
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
            pan: formState.formData['pan_number'],
            aadhar: formState.formData['aadhar_number'],
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
                window.location.reload();
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
            {isLoading
                ? <Loader />
                : Object.entries(formState.formData ?? {})
                    .map((entry, index) => (entry &&
                        <EachField
                            key={index}
                            {...{
                                entry,
                                editableFields: kycEditableFields,
                                blackListedFields: kycBlackListedFields,
                                onChange: handleEditField,
                                isEditable: formState.isEditable
                            }} />
                    ))}
            <br />
            <div className='flex align-center space-between'>
                {
                    !userProfileData?.is_kyc_verified &&
                    <button className='edit-btn' onClick={enableEdit}>{formState.isEditable ? 'Revert' : 'Edit'}</button>
                }
                {_isLoading
                    ? <Loader />
                    : formState.isEditable && (<button type='submit' className='save-btn' onClick={saveDetails}>Save</button>)
                }
            </div>
        </article>
    )
}

export default KycDetails   