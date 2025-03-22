import { SET_USER_INFO, LOGOUT_USER } from '../actions/userActions';

const initialState = {
    email: null,
    maLoaiTK: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                email: action.payload.Email,
                maLoaiTK: action.payload.MaLoaiTK,
            };
        case LOGOUT_USER:
            return initialState; // Reset state về giá trị ban đầu
        default:
            return state;
    }
};

export default userReducer;