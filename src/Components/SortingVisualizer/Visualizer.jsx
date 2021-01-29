import React, {Component} from 'react';
import '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';
import BarComponent from '../BarContainer/BarContainer';
import './Visualizer.css';
import {mergeSort} from '../../Algorithms/mergeSort'

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            activeColor: "#0EF0FB"
        };

        this.divRef= React.createRef();
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
        this.setState({array, activeColor: "#0EF0FB"});
        document.getElementById('mergeS').classList.remove('activeBut');
        document.getElementById('bubbleS').classList.remove('activeBut');
        document.getElementById('insertionS').classList.remove('activeBut');
        document.getElementById('selectionS').classList.remove('activeBut');
        document.getElementById('quickS').classList.remove('activeBut');
        document.getElementById('heapS').classList.remove('activeBut');

        // var button= document.getElementsByClassName("sort-button");
        // button.classList.remove('activeBut');
    }

    bubble_sort = () => {
        document.getElementById('bubbleS').classList.add('activeBut');
    }

    selection_sort = () => {
        document.getElementById('selectionS').classList.add('activeBut');
    }

    insertion_sort = () => {
        document.getElementById('insertionS').classList.add('activeBut');
    }
    

    merge_sort = () => {
        const sortedArray = mergeSort(this.state.array);
        this.setState({array: sortedArray})
        // console.log(sortedArray);
        this.setState({activeColor: "palegreen"});
        // const activeButton= this.activeButStyles();
        // this.divRef.current.style= activeButton;
        document.getElementById('mergeS').classList.add('activeBut');
        // console.log(activeButton);
    }

    quick_sort = () => {
        document.getElementById('quickS').classList.add('activeBut');
    }

    heap_sort = () => {
        document.getElementById('heapS').classList.add('activeBut');
    }

    render() {
        
        const {array}= this.state;

        if(this.state.randomRender===true) {
            this.resetArray();
        }
        console.log(this.state.activeBut);
        return (
            <>
            <Navbar array={this.state.array} resetArray={this.resetArray.bind(this)} />
            <div className="background">
            <div className="stage"></div>
            <BarComponent array={this.state.array} barColor={this.state.activeColor}/>
            <div className="but-wrap">
                <div className="sort-button rem" id="bubbleS" tabindex="1" onClick={this.bubble_sort}>Bubble Sort</div>
                <div className="sort-button rem" id="selectionS" tabindex="2" onClick={this.selection_sort}>Selection Sort</div>
                <div className="sort-button rem" id="insertionS" tabindex="3" onClick={this.insertion_sort}>Insertion Sort</div>
                <div className="sort-button rem" id="mergeS" tabindex="4" onClick={this.merge_sort} /*ref={this.divRef}*/>Merge Sort</div>
                <div className="sort-button rem" id="quickS" tabindex="5" onClick={this.quick_sort}>Quick Sort</div>
                <div className="sort-button rem" id="heapS" tabindex="6" onClick={this.heap_sort}>Heap Sort</div>
            </div>
            </div>
            </>
        );
    }
}


function randomHeight(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }