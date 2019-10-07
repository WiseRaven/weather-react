import React from 'react';
import { connect } from 'react-redux';

import SettingsLayout from '../../layouts/SettingsLayout';
import { setCheck, getApi } from '../../actions/Degree';
import { setWeatherData } from '../../actions/Weather';

export class SettingsContainer extends React.Component {
    onSetCheck(check) {
        this.props.setCheck(check);
    }
    render() {
        return <SettingsLayout onSetCheck={this.onSetCheck.bind(this)} {...this.props} />;
    }
}

const mapStateToProps = state => ({
    check: state.Degree.check,
    weatherData: state.Weather.weatherData,
    getApiFn: state.Degree.getApiFn
});

const mapDispatchToProps = {
    setCheck,
    setWeatherData,
    getApi
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
