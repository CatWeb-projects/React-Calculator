import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
    render () {
        const {symbol} = this.props.buttonProp
        return (
            <div className="button-wrapper">
                <button>{symbol}</button>
            </div>
        )
    }
}

// Button.propTypes = {
//     symbolProp: PropTypes.object.isRequired,
// }

export default Button