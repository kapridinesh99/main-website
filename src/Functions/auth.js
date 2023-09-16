import { authService } from '../axios';
import { getCredentials } from './util';

const env = process.env.REACT_APP_BACKEND_ENV === 'dev' ? 'dev' : 'dev'; 

export function decodeJWT(token) {
    const payloadString = token.split('.')[1];
    let payload = null;
    try {
        if (payloadString) {
            payload = JSON.parse(Buffer.from(payloadString, 'base64'));
        }
    } catch (error) {
        console.error('Invalid token received');
    }
    return payload;
};

export const login = async ({ payload }) => {
    const { data } = await authService.post(`${env}/login`, { ...payload });
    return data.data;
};

export const logout = async () => {
    return await authService.post(`${env}/logout`);
};

export const register = async ({ payload }) => {
    return await authService.post(`${env}/create/user`, { ...payload });
};

export async function verifyAuth() {
    try {
        const { userToken, userID } = getCredentials();
        const res = await authService.get(`${env}/user/details/${userID}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        return res.status === 200;
    } catch (error) {
        return false;
    }
}

export async function requestPasswordReset({}) {
    return authService.post(`${env}/forgotPassword`, {});
}