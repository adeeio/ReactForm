
var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired     
    },

    render: function () {
        return (
            React.createElement('form', { className: 'contactForm' },
                React.createElement('input', {
                    className: 'inputName',
                    type: 'text',
                    placeholder: 'Imie',
                    defaultValue: this.props.contact.firstName,
                }),
                React.createElement('input', {
                    className: 'inputSurname',
                    type: 'text',
                    placeholder: 'Nazwisko',
                    defaultValue: this.props.contact.lastName,
                }),
                React.createElement('input', {
                    className: 'inputEmail',
                    type: 'email',
                    placeholder: 'Email',
                    defaultValue: this.props.contact.email,
                }),
                React.createElement('button', { type: 'submit', className: 'contactBtn'}, "Add Contact")
            )
        )
    },
});