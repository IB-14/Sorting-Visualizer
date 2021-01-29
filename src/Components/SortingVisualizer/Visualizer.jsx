import React, {Component} from 'react';
import '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';
import BarComponent from '../BarContainer/BarContainer';
import './Visualizer.css';
import {mergeSortAnimations} from '../../Algorithms/mergeSort'

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arrSize: 100,
            activeColor: "#0EF0FB"
        };

        this.divRef= React.createRef();
    }

        

    componentDidMount() {
        this.resetArray(this.state.arrSize);
    }

    resetArray(n) {
        const array= [];
        for(let i= 0; i<n; i++) {
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

        console.log(this.state.array);
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
        const animations = mergeSortAnimations(this.state.array);
        // this.setState({activeColor: "palegreen"});
        document.getElementById('mergeS').classList.add('activeBut');
        
        // for(let i= 0; i< animations.length; i++) {
            
        //     const bar= document.getElementById('bar');
        //     const isColorChange = i%3!==2;
            
        //     if(isColorChange) {
        //         const[firstBar, secondBar] = animations[i];
        //         console.log(animations[i]);
        //         const firstBarStyle= bar[firstBar].style;
        //         const secondBarStyle= bar[secondBar].style;
        //         const color= 1%3===0 ? 'palevioletred' : '#0EF0FB';
        //         setTimeout(() => {
        //             firstBarStyle.backgroundColor= color;
        //             secondBarStyle.backgroundColor= color;
        //         }, i*5 );
        //     }
            
        //     else {
        //         setTimeout(() => {
        //             const [firstBar, newHeight] = animations[i];
        //             const firstBarStyle= bar[firstBar].style;
        //             firstBarStyle.height = `${newHeight}px`;
        //         }, i*5 );
        //     }

        // }

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
            <div className= "wrapper">
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
            </div>
        );
    }
}


function randomHeight(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }