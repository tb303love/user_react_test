import React, {Component} from "react";

class PersonItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            person: props.person
        };

        const allowed = ['Name', 'Surname', 'City', 'Address', 'Phone', '_id'];

        this.person = Object.keys(props.person)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = props.person[key];
                return obj;
            }, {});
    }

    toggleEditing() {
        this.setState({
            editing: !this.state.editing,
            person: this.person
        });
    }

    handleInputChange(event) {
        this.setState({
            person: {
                ...this.state.person,
                [event.target.name]: event.target.value
            }
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.update(this.state.person);
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="person-item">
                    {Object.keys(this.person).map((prop, index) => {
                        if (prop === '_id') return true;
                        return <div key={index}>{this.person[prop]}</div>
                    })}
                    <div className="btn-group btn-actions">
                        <button className="btn btn-success" onClick={this.toggleEditing.bind(this)}>Edit</button>
                        <button className="btn btn-danger" onClick={this.props.delete.bind(this.props.context, this.props.person._id)}>Delete
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div className="person-item">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {Object.keys(this.state.person).map((prop, index) => {
                        if (prop === '__v' || prop === '_id' || prop === 'CreatedDate') return true;
                        return <div className="form-group" key={index}>
                            <input type="text" name={prop} value={this.state.person[prop]}
                                   onChange={this.handleInputChange.bind(this)}/></div>
                    })}
                    <div className="btn-group btn-actions">
                        <button type="submit" className="btn btn-success">Update</button>
                        <button type="button" className="btn btn-primary"
                                onClick={this.toggleEditing.bind(this)}>Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonItem