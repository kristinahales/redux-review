import React, { Component } from "react";
import store from "./../redux/store";
import { ADD_ANIMAL } from "./../redux/reducer";


export default class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
        animals: store.getState().animals,
        animal: ""
        };
    }
    componentDidMount() {
        store.subscribe(() => {
        this.setState({
            animals: store.getState().animals
        });
        });
    }
    handleChange = e => {
        this.setState({ animal: e.target.value });
    };
    handleSubmit = () => {
        console.log("Adding an animal");
        store.dispatch({ type: ADD_ANIMAL, payload: this.state.animal });
    };
    render() {
        const { animals } = this.state;
        return (
        <div>
            <h1>These are our animals!! YAAAYAH!</h1>
            <input
            type="text"
            placeholder="Enter your animal"
            onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Submit</button>
            {animals.map(animal => (
            <li key={animal}>{animal}</li>
            ))}
        </div>
        );
    }
}

