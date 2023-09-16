import { atom } from 'recoil';

const initialAuthState = {
    isLoggedIn: true,
    user: {
        id: '1',
        name: 'John Doe',
        email:'jhondoe@email.com',
        profileUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    },
}

const authState = atom({
    key: 'authState',
    default: initialAuthState,
});

export { authState, initialAuthState };