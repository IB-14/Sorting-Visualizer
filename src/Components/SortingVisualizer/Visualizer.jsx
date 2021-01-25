import React, {Component} from 'react';
import './Visualizer.css';

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array= [];
        for(let i= 0; i<50; i++) {
            array.push(randomHeight(10, 250));
        }
        this.setState({array});
    }

    render() {
        const {array}= this.state;
        
        return (
            <div className="background">
            <div className="container">
                {array.map((value, index) => (
                    <div className="bar"
                        key={index}
                        style={{
                            height: `${value}px`,
                        }}></div>   
                ))}
            </div>
            </div>
        );
    }
}


function randomHeight(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }