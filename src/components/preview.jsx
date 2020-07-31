import React, { Component } from 'react';
import PropTypes from "prop-types";

class Preview extends Component {
    state = {

    }
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            justifyContent: 'center'
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            top: '10%',
            bottom: '10%',
            left: '10%',
            right: '10%',
            borderRadius: 5,
            display: 'block',
            maxWidth: '80%',
            maxHeight: '80%',
            padding: 30,
            zIndex:10,
            overflowY:'scroll'
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="close">
                    <button onClick={this.props.onClose}>x</button>
                </div>
                <div className="modal" style={ modalStyle }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Preview.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
}

export default Preview;