import React from "react";

const Info = (props) => {
    const {city} = props;
        return (
            <div className="title">
            {
                !city ? 
                    <span>Enter your city</span>
                :
                    <span>
                        Weather at <strong>{city}</strong>
                    </span>
            } </div> 
        )
      }

export default Info;