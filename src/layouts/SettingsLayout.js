import React from 'react';

export default class SettingsLayout extends React.Component {
    checkChange(check) {
        this.props.onSetCheck(check);
    }

    render() {
        const isActive = this.props.check ? "far active" : "cel";
        const getApiFnExsist = () => this.props.getApiFn !== undefined ? this.props.getApiFn() : null;
       
        return (
            <div className="settings">
                <div className="units">
                    <p className="bold">Units</p>
                    <label className="check-wrapper">
                        <input className={isActive} type="checkbox"id="checkbox" onChange={() => {this.checkChange(!this.props.check); getApiFnExsist()}} />
                        <span className="left">C</span>
                        <span className="right">F</span>
                    </label>
                </div>  

                <div className="cache-block">
                    <p className="bold">System Settings</p>
                    <button className="cache bold">Reset cache</button>  
                </div>
            </div>
        )
    }
}