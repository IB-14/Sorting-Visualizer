import React, {useState} from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: 'x'+1
        }
    }

    // var [s, setSpeed]= useState(1);
    // var [randomRender, clicked] = useState(false);
    // var [speed, setSpeed] = useState('x'+`${s}`);
    // var speed= 'x'+`${s}`;    

    // console.log(randomRender);

    setSpeed(x) {
        this.setState({
            speed: 'x'+ x
        })
    }

    // clicked = () => {
    //     window.location.reload(false)
    //     randomRender= true;
    //     console.log(randomRender);
    // }

    resetArray = () => {
        this.props.resetArray(this.state.array);
    }

    // changeSpeed=(e)=> {
    //     setSpeed(e.target.value);
    // }

    // function setSpeed(value) {
    //     s= value;
    //     console.log(s);
    // }

    render() {
    return (
        <nav className="nav">
            <div>
                Sorting Visualizer
            </div>
            <div className="buts">
                <div className="button" onClick={this.resetArray}>
                    Random
                </div>
                <div className="drop">
                    <div className="button speed" /*onClick={()=>setSpeed('x'+`${2*s}`)}*/>
                        {this.state.speed}
                    </div>
                    <div className="drop-content">
                        
                            <div value="1" onClick={()=>{this.setSpeed(1)}}>x1</div>
                            <div value="2" onClick={()=>{this.setSpeed(2)}}>x2</div>
                            <div value="4" onClick={()=>{this.setSpeed(4)}}>x4</div>
                            <div value="8" onClick={()=>{this.setSpeed(8)}}>x8</div>

                    </div>    
                </div>
            </div>
        </nav>
    )
}
}
export default Navbar;