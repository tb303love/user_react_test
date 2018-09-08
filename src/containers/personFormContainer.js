import React, {Component} from 'react';
import CreatePerson from "../components/Person/PersonForm";
import * as personsAction from "../actions";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: person => dispatch(personsAction.addPerson(person))
    }
};

class PersonFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    toggleForm = (event) => {
        this.setState({
            visible: !this.state.visible
        });
    };

    createNewPerson = (person) => {
        this.props.addPerson(person);
    };

    render() {
        return (
            <div className="person-form">
                {this.state.visible &&
                <CreatePerson toggleForm={this.toggleForm} createNewPerson={this.createNewPerson}/>}
                {!this.state.visible && <button className="btn btn-success" onClick={this.toggleForm}>Add New Person</button>}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(PersonFormContainer);