import { resourceService } from '../axios';
import { getCredentials } from './util';

const env = process.env.REACT_APP_BACKEND_ENV === 'dev' ? 'dev' : 'dev'; 

export const getUserProfile = async ({ userID }) => {
    const { data } = await resourceService.get(`${env}/user/details/${userID}`);
    return data;
};

export const editUserProfile = async ({ payload }) => {
    const { data } = await resourceService.post(`${env}/update/user/`, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
};

export const getUserTransactions = async () => {
    const { userID: userId } = getCredentials();
    const { data } = await resourceService.get(`${env}/get/transaction/history/${userId}`);
    return data;
};
