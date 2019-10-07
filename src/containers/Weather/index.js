import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../../layouts/MainLayout';
import { setWeatherData } from '../../actions/Weather';
import { getApi } from '../../actions/Degree';

export class WeatherContainer extends React.Component {
    render() {
        return <MainLayout {...this.props} />;
    }
}

const mapStateToProps = state => ({
    check: state.Degree.check,
    weatherData: state.Weather.weatherData,
    getApiFn: state.Degree.getApiFn,
});

const mapDispatchToProps = {
    setWeatherData,
    getApi
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
