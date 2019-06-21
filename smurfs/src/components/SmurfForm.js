import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import {
    Button, Form
} from 'reactstrap';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }

    populateSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.smurf);
        this.setState({
            smurf: {
                name:'',
                age:'',
                height:''
            }
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.populateSmurf}>
                    <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.smurf.name}
                    onChange={this.handleChanges}
                    />

                    <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={this.state.smurf.age}
                    onChange={this.handleChanges}
                    />

                    <input
                    type='text'
                    name='height'
                    placeholder='height'
                    value={this.state.smurf.height}
                    onChange={this.handleChanges}
                    />
                    <Button onClick={this.populateSmurf}>Add Smurf</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error
})

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm);