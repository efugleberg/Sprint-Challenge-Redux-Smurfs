import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs } from '../actions';
import SmurfForm from './SmurfForm';


const Smurfs = props => {
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs()
    };

    return (
        <div>
            <h1>Press the button below to generate your Smurf village!</h1>

            <button onClick={fetchSmurfs}>Get Smurfs</button>

            {props.error && <h3>{props.error}</h3>}

            {props.fetchingSmurfs && <h3>Loading Smurfs!</h3>}

            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}

            <SmurfForm />

        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    fetchSmurfs: state.fetchSmurfs
});

export default connect(
    mapStateToProps,
    { getSmurfs }
)(Smurfs);