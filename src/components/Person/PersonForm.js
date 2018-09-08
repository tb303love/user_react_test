import React, {Component} from 'react';

class PersonForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Surname: '',
            Address: '',
            City: '',
            Phone: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewPerson(this.state);
        this.props.toggleForm();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange.bind(this)}>
                <div className="row">
                    <div className="form-group col-xl-2">
                        <input type="text" className="form-control" required placeholder="Name" value={this.state.Name} name="Name"/>
                    </div>
                    <div className="form-group col-xl-2">
                        <input type="text" className="form-control" required placeholder="Surname" value={this.state.Surname} name="Surname"/>
                    </div>
                    <div className="form-group col-xl-2">
                        <input type="text" className="form-control" required placeholder="Address" value={this.state.Address} name="Address"/>
                    </div>
                    <div className="form-group col-xl-2">
                        <input type="text" className="form-control" required placeholder="City" value={this.state.City} name="City"/>
                    </div>
                    <div className="form-group col-xl-2">
                        <input type="text" className="form-control" required placeholder="Phone" value={this.state.Phone} name="Phone"/>
                    </div>
                </div>
                <div className="btn-group" role="group">
                    <button type="submit" className="btn btn-success">
                        SAVE
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.props.toggleForm}>Cancel</button>
                </div>
            </form>
        );
    }
}

export default PersonForm;