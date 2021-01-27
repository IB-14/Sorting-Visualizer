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

    // shouldComponentUpdate() {
    //     console.log("should");
    //     return true;
    // }

    // componentDidUpdate(prevProps) {
    //     console.log("fd");
    //     const {array}= this.state;
    //     if(this.props.randomRender!==prevProps.randomRender) {
    //         this.resetArray();
    //         return (
    //             <div className="background">
    //             <div className="stage"></div>
    //             <div className="container">
    //                 {array.map((value, index) => (
    //                     <div className="bar"
    //                         key={index}
    //                         style={{
    //                             height: `${value}px`,
    //                         }}></div>   
    //                 ))}
    //             </div>
    //             </div>
    //         );
    //     }
    // }

    resetArray() {
        const array= [];
        // let n= randomHeight(10, 50);
        for(let i= 0; i<100/*n*/; i++) {
            array.push(randomHeight(10, 250));
        }
        this.setState({array});
    }

    render() {
        
        const {array}= this.state;

        if(this.state.randomRender===true) {
            this.resetArray();
        }
        console.log(this.state.activeBut);
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
            <div className="but-wrap">
                <div className="sort-button" tabindex="1">Bubble Sort</div>
                <div className="sort-button" tabindex="2">Selection Sort</div>
                <div className="sort-button" tabindex="3">Insertion Sort</div>
                <div className="sort-button" tabindex="4">Merge Sort</div>
                <div className="sort-button" tabindex="5">Quick Sort</div>
                <div className="sort-button" tabindex="6">Heap Sort</div>
            </div>
            </div>
        );
    }
}


function randomHeight(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
