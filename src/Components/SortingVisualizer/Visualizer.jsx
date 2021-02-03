import React, {Component} from 'react';
import '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';
import BarComponent from '../BarContainer/BarContainer';
import './Visualizer.css';
import mergeSortAnimations from '../../Algorithms/mergeSortAnimations'
import bubbleSortAnimations from '../../Algorithms/BubbleSortAnimations'

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arrSize: 10,
            speed: 100,
            activeColor: "#0EF0FB",
            butIndex: 0,
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
        document.getElementsByClassName('remove')[this.state.butIndex].classList.remove('activeBut');
        // document.getElementById('mergeS').classList.remove('activeBut');
        // document.getElementById('bubbleS').classList.remove('activeBut');
        // document.getElementById('insertionS').classList.remove('activeBut');
        // document.getElementById('selectionS').classList.remove('activeBut');
        // document.getElementById('quickS').classList.remove('activeBut');
        // document.getElementById('heapS').classList.remove('activeBut');

        // var button= document.getElementsByClassName("sort-button");
        // button.classList.remove('activeBut');

        // console.log(this.state.array);
    }

    sortComplete() {
        this.setState({activeColor: "palegreen"});
    }

    changeSpeed = (x) => {
        this.setState({
            speed: 200/x,
        })
        console.log(this.state.speed)
    }



    bubble_sort = () => {
        this.setState({
            butIndex: 1
        })
        let animations= bubbleSortAnimations([...this.state.array]);
        document.getElementById('bubbleS').classList.add('activeBut');
        // let bubble= bubbleSortAnimations(this.state.array);
        // this.setState ({
        //     array: bubble
        // })

        console.log(animations)
        
        for(let i= 0; i< animations.length; i++) {
            
            const isColorChange = i%4<2;

            // const isColorChange= i%4<2 ? true : false;
            
            setTimeout(() => {
                if(isColorChange) {
                    const[firstBar, secondBar] = animations[i];
                    let color= i%4===0 ? 'palevioletred' : '#0EF0FB';
                        document.getElementsByClassName('bar')[firstBar].style.backgroundColor= color;
                        document.getElementsByClassName('bar')[secondBar].style.backgroundColor= color;
                }
                
                else {
                    if(animations[i].length>1) {
                            const [firstBar, newHeight] = animations[i];
                            console.log(newHeight)
                            document.getElementsByClassName('bar')[firstBar].style.height = `${newHeight}px`;
                    }
                }
            }, i*this.state.speed );
        }
        setTimeout(this.sortComplete.bind(this), animations.length*this.state.speed)
        
        
    }

    selection_sort = () => {
        this.setState({
            butIndex: 2
        })
        document.getElementById('selectionS').classList.add('activeBut');
    }

    insertion_sort = () => {
        this.setState({
            butIndex: 3
        })
        document.getElementById('insertionS').classList.add('activeBut');
    }
    

    merge_sort = () => {
        // this.setState({
        //     butIndex: 4
        // })
        const animations = mergeSortAnimations(this.state.array);
        console.log(animations.length);
        document.getElementById('mergeS').classList.add('activeBut');
        let count= 0;
        for(let i= 0; i< animations.length; i++) {
            
            const isColorChange = i%3!==2;
            
                if(isColorChange) {
                    const[firstBar, secondBar] = animations[i];
                    let color= i%3===0 ? 'palevioletred' : '#0EF0FB';
                    // console.log(i)
                    
                    setTimeout(() => {
                        document.getElementsByClassName('bar')[firstBar].style.backgroundColor= color;
                        document.getElementsByClassName('bar')[secondBar].style.backgroundColor= color;
                    }, i*this.state.speed );
                }
                
                else {
                    setTimeout(() => {
                        const [firstBar, newHeight] = animations[i];
                        // const firstBarStyle= bar[firstBar].style;
                        document.getElementsByClassName('bar')[firstBar].style.height = `${newHeight}px`;
                        // this.setState({activeColor: "palegreen"});
                    }, i*this.state.speed );
                }
                count++;
        }
        setTimeout(this.sortComplete.bind(this), animations.length*this.state.speed)
        // console.log(count)
        // if(count===animations.length) this.sortComplete();
        // this.sortComplete();

    }

    quick_sort = () => {
        this.setState({
            butIndex: 5
        })
        document.getElementById('quickS').classList.add('activeBut');
    }

    heap_sort = () => {
        this.setState({
            butIndex: 6
        })
        document.getElementById('heapS').classList.add('activeBut');
    }

    render() {
        
        const {array}= this.state;

        if(this.state.randomRender===true) {
            this.resetArray();
        }
        // console.log(this.state.activeBut);
        return (
            <div className= "wrapper">
            <Navbar array={this.state.array} resetArray={this.resetArray.bind(this)} changeSpeed={this.changeSpeed} />
            <div className="background">
            <div className="stage"></div>
            <BarComponent array={this.state.array} barColor={this.state.activeColor}/>        
            <div className="but-wrap">
                <div className="sort-button remove" id="bubbleS" tabindex="1" onClick={this.bubble_sort}>Bubble Sort</div>
                <div className="sort-button remove" id="selectionS" tabindex="2" onClick={this.selection_sort}>Selection Sort</div>
                <div className="sort-button remove" id="insertionS" tabindex="3" onClick={this.insertion_sort}>Insertion Sort</div>
                <div className="sort-button remove" id="mergeS" tabindex="4" onClick={this.merge_sort} /*ref={this.divRef}*/>Merge Sort</div>
                <div className="sort-button remove" id="quickS" tabindex="5" onClick={this.quick_sort}>Quick Sort</div>
                <div className="sort-button remove" id="heapS" tabindex="6" onClick={this.heap_sort}>Heap Sort</div>
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