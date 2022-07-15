import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02, props03, props04, props05, props06}) {
    return (
        <Fragment>
            <h2>Property Validation</h2>

            <span>props01: {props01 ? props01:'---Not Set---'}</span>
            <br/>    

            <span>props02: {props02 ? props02:'---Not Set---'}</span>
            <br/>    

            <span>props03: {props03 ? `${props03}`:'---Not Set---'}</span>
            <br/>    

            <span>props04: {props04 ? props04.name:'---Not Set---'}</span>
            <br/>    

            <span>props05: {props05.map((e, i) => <b key={i}>{e}</b>)}</span>
            <br/>    

            <span>props06: {props06 ? props06() :'---Not Set---'}</span>
            <br/>    

        </Fragment>
    );
}

// property type and required
MyComponent.propTypes = {
    // ProtoTypes Validator: JavaScript Data Type
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // ProtoTypes Validator: Combined with JavaScript Data Type
}

// property default value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: true,
    props04: {},
    props05: [],
    props06: () => {} //dummy function
}
export default MyComponent;