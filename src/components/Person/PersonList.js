import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PersonItem from "./PersonItem";


class PersonList extends Component {

    delete(id) {
        this.props.onDeletePerson(id);
    };

    update(person) {
        this.props.update(person);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="header-container">
                        <div>Name</div>
                        <div>Surname</div>
                        <div>City</div>
                        <div>Address</div>
                        <div>Phone</div>
                        <div>Actions</div>
                    </div>
                </div>
                <div className="persons-container">
                    {this.props.persons.map(person => (
                        <PersonItem person={person} key={person._id} context={this} delete={this.delete} update={this.update.bind(this)}/>
                    ))}
                </div>
            </div>
        )
    }
}

PersonList.propTypes = {
    persons: PropTypes.array.isRequired
};

export default PersonList;