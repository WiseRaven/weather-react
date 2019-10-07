import { WEATHER_DATA } from '../../actions/Weather';

const initialState = {
    weatherData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@@redux/INIT':
            return state;
        case WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            };
        default:
            return state;
    }
};
