export const SET_USER_INFO = 'SET_USER_INFO';
export const LOGOUT_USER = 'LOGOUT_USER';
export const setUserInfo = (user) => ({
    type: SET_USER_INFO,
    payload: user, // Truyền toàn bộ object user
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});