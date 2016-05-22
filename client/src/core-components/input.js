const React = require('react');
const classNames = require('classnames');
const _ = require('lodash');

const Input = React.createClass({

    propTypes: {
        value: React.PropTypes.string,
        validation: React.PropTypes.string,
        onChange: React.PropTypes.func,
        inputType: React.PropTypes.string,
        password: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            inputType: 'primary'
        };
    },

    render() {
        return (
            <label className={this.getClass()}>
                <span className="input--label">{this.props.label}</span>
                <input {...this.getProps()} className="input--text" />
            </label>
        );
    },

    getProps() {
        let props = _.clone(this.props);

        props.type = (this.props.password) ? 'password' : 'text';

        return props;
    },

    getClass() {
        let classes = {
            'input': true,
            ['input_' + this.props.inputType]: true,

            [this.props.className]: (this.props.className)
        };

        return classNames(classes);
    }
});

export default Input;
