
var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'contactItem' },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4cBkcMmCNp7oItNfYyvf2oTFxi-giAxg99defYuvj7iz41ea'
                }),
                React.createElement('p', { className: 'contactLabel labelName' }, 'Name: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel labelSurname' }, 'Surname: ' + this.props.item.lastName),
                React.createElement('a', { className: 'contactEmail', href: 'mailto: ' + this.props.item.email },
                    this.props.item.email
                )
            )
        )

    },
});