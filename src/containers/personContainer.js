import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonFormContainer from "./personFormContainer";
import PersonList from "../components/Person/PersonList";
import {getAllPersons} from "../actions";
import * as personsAction from "../actions";

const mapDispatchToProps = (dispatch) => ({
    loadPersons: () => dispatch(getAllPersons()),
    deletePerson: personId => dispatch(personsAction.deletePerson(personId)),
    update: person => dispatch(personsAction.updatePerson(person))
});

const mapStateToProps = state => ({
    persons: state.personCRUD.persons,
    loading: state.personCRUD.loading,
    error: state.personCRUD.error
});

class PersonContainer extends Component {

    componentDidMount() {
        this.props.loadPersons();

    }

    deletePerson = (personId) => {
        this.props.deletePerson(personId);
    };

    updatePerson(person) {
        this.props.update(person)
    };

    render() {
        const {error, loading, persons} = this.props;
        if(this.props.persons !== undefined) {
            if (error) {
                return <div>Error! {error.message}</div>;
            }

            if (loading) {
                return <div>Loading Persons...</div>;
            }

            if (persons === null || persons.length === 0) {
                return (
                    <div>
                        <h3>There are no Persons currenty created in the database</h3>
                        <PersonFormContainer/>
                    </div>
                )
            }

            return (
                <div>
                    <PersonList persons={persons} onDeletePerson={this.deletePerson} update={this.updatePerson.bind(this)}/>
                    <PersonFormContainer/>
                </div>
            )
        }

        return <h3>Loading...</h3>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);