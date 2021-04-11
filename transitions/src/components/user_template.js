import React, { Component } from 'react';
import propTypes from 'prop-types';


const UserTemplate = (props) => {


    return (
        <div>
            Cast something just to ensure that you are here
            <br />
            Here's the props:
            {props.Car.Brand}

        </div>
    );

}


UserTemplate.propTypes = {
    name: propTypes.string
}

export default UserTemplate;