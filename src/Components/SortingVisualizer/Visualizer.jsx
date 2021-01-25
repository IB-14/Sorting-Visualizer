import React, {Component} from 'react';
import './Visualizer.css';

export default class SortingVisualizer extends Component {
    constructor({randomRender}) {
        super(randomRender);
        console.log(randomRender);

        if(randomRender===true) {
            this.resetArray();        
        }

        this.state = {
            randomRender,
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    shouldComponentUpdate() {
        console.log("should");
        return true;
    }

    componentDidUpdate(prevProps) {
        console.log("fd");
        const {array}= this.state;
        if(this.props.randomRender!==prevProps.randomRender) {
            this.resetArray();
            return (
                <div className="background">
                <div className="stage"></div>
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

    resetArray() {
        const array= [];
        for(let i= 0; i<50; i++) {
            array.push(randomHeight(10, 250));
        }
        this.setState({array});
    }

    render() {
        const {array}= this.state;

        if(this.state.randomRender===true) {
            this.resetArray();
        }
        return (
            <div className="background">
            <div className="stage"></div>
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