import axios from 'axios';
import { useMutation } from 'react-query';
import { redirect } from 'react-router-dom';
import { useEffect, useContext, createContext } from 'react';
import { resourceService } from '../axios';
import { decodeJWT, login, logout, requestPasswordReset, register } from '../Functions/auth';
import { clearCredentials, getCredentials, setCredentials } from '../Functions/util';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const loginMutation = useMutation(login, {
        onSuccess: ({ userID, userToken }) => {
            setCredentials({ userToken, userID });
        },
    });
    const logoutMutation = useMutation(logout, {
        onSettled: () => {
            clearCredentials();
            redirect('/login');
        },
    });
    const signupMutation = useMutation(register);
    const requestPasswordResetMutation = useMutation(requestPasswordReset);
    useEffect(() => {
        function interceptResponseService() {
            resourceService.interceptors.request.use(function(config) {
                const { userToken, userID } = getCredentials();
                if (!userToken || !userID) {
                    clearCredentials();
                    redirect('/login');
                    throw new axios.Cancel('Auth token absent');
                }
                config.headers.Authorization = `Bearer ${userToken}`;
                return config;
            }, function(error) {
                return Promise.reject(error);
            });
            const interceptor = resourceService.interceptors.response.use(
                response => response, 
                function(error) {
                    if (error?.response?.status !== 400) {
                        return Promise.reject(error);
                    }
    
                    resourceService.interceptors.response.eject(interceptor);
                    
                    redirect('/login');
                }
            );
        }
        interceptResponseService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        state: {
            isLoggedIn() {
                const { userToken } = getCredentials();
                if (!userToken) return false;
                const { exp } = decodeJWT(userToken) ?? {};
                return Date.now() < exp * 1000;
            }
        },
        loginMutation,
        logoutMutation,
        signupMutation,
        requestPasswordResetMutation,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}