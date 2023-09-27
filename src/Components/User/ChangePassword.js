import { useMutation } from 'react-query';
import { useEffect, useState } from 'react'
import Loader from '../Loader';
import { updatePassword } from '../../Functions/user';
import { EachField, getCredentials } from '../../Functions/util';

const userKYCData = {
    old_password: '',
    new_password: '',
    confirm_password: '',
};

function ChangePassword() {
    const [formState, setFormState] = useState({
        isEditable: false,
        formData: { ...userKYCData },
    });

    const updatePasswordMutation = useMutation(updatePassword);
    const { isLoading: _isLoading } = updatePasswordMutation;

    useEffect(() => {
        setFormState((prevState) => ({
            ...prevState,
            formData: { ...userKYCData },
        }));
    }, []);

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
        const payload = {
            userID,
            oldPassword: formState.formData?.old_password,
            newPassword: formState.formData?.new_password,
            confirmPassword: formState.formData?.confirm_password,
        };
        updatePasswordMutation.mutate(({ payload }), {
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
            isEditable: !prevState.isEditable,
        }));
    };

    return (
        <article className='change-password-page flex column gap-l'>
            <header>
                <h1>Security</h1>
                <p>Update your password here</p>
            </header>
            <br /> 
            <main className='flex column gap-xl'>
                {
                    Object.entries(formState.formData ?? {})
                    .map((entry, index) => (entry &&
                        <EachField
                            key={index}
                            {...{
                                entry,
                                blackListedFields: [],
                                onChange: handleEditField,
                                editableFields: Object.keys(userKYCData),
                                isEditable: formState.isEditable
                            }} />
                    ))
                }
            </main>
            <br />
            <footer className='flex align-center gap-5xl'>
                {
                    <button className='edit-btn' onClick={enableEdit}>{formState.isEditable ? 'Revert' : 'Edit'}</button>
                }
                {
                    _isLoading
                        ? <Loader />
                        : formState.isEditable && (<button type='submit' className='save-btn' onClick={saveDetails}>Save</button>)
                }
            </footer>
        </article>
    );
};

export default ChangePassword   