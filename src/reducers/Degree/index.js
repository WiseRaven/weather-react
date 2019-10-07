import { SELECT_DEGREE, GET_API_FN } from '../../actions/Degree';

const initialState = {
    check: false,
    getApiFn: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT':
            return state;
        case SELECT_DEGREE:
            return {
                ...state,
                check: action.payload
            };
        case GET_API_FN:
            return {
                ...state,
                getApiFn: action.payload
            };
        default:
            return state;
    }
};
