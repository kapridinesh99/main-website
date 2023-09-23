import { resourceService } from '../axios';
import { getCredentials } from './util';

const env = process.env.REACT_APP_BACKEND_ENV === 'dev' ? 'dev' : '';

export const getUserProfile = async ({ userID }) => {
    try {
        const { data } = await resourceService.get(`${env}/user/details/${userID}`);
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const editUserProfile = async ({ payload }) => {
    const { data } = await resourceService.post(`${env}/update/user/`, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
};

export const editUserProfileKYCDetails = async ({ payload }) => {
    const { data } = await resourceService.post(`${env}/update/user/`, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
};

export const updateUserKYC = async ({ payload }) => {
    const { data } = await resourceService.post(`${env}/user/update/kyc`, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
};

export const getUserTransactions = async () => {
    const { userID: userId } = getCredentials();
    const res = await resourceService.get(`${env}/get/transaction/history/${userId}`);
    const data = res?.data ?? {};
    return data;
};

export const updatePassword = async ({ payload }) => {
    const { data } = await resourceService.post(`${env}/update/password`, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return data;
}