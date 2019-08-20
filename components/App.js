
var ContactForm = React.createClass({
    propTypes: {
        contact: React.propTypes.object.isRequired     //PropTypes???
    },

    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},
            React.createElement('input', {
                type: 'text',
                placeholder: 'Imie',
                value: this.props.contact.firstName,
            }),
            React.createElement('input', {
                type: 'text',
                placeholder: 'Nazwisko',
                value: this.props.contact.lastName,
            }),
            React.createElement('input', {
                type: 'email',
                placeholder: 'Email',
                value: this.props.contact.email,
            }),
            React.createElement('button', {type: 'submit'}, "Add Contact")
            )
        )
    },
})

var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Rychu',
        lastName: 'Andrzejewski',
        email: 'rychu.andrzejewski@example.com',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function () {
        return (
            React.createElement('div', { className: 'app' },
                React.createElement(ContactForm, { contact: ContactForm }),
                React.createElement(Contacts, { items: contacts }, {})
            )
        );
    }
});