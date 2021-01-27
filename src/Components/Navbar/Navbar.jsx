import React, {useState} from 'react';
import './Navbar.css';

function Navbar(props) {
    var [s, setSpeed]= useState(1);
    var [randomRender, clicked] = useState(false);
    // var [speed, setSpeed] = useState('x'+`${s}`);
    var speed= 'x'+`${s}`;    

    // console.log(randomRender);
    clicked = () => {
        window.location.reload(false)
        randomRender= true;
        console.log(randomRender);
    }

    // changeSpeed=(e)=> {
    //     setSpeed(e.target.value);
    // }

    // function setSpeed(value) {
    //     s= value;
    //     console.log(s);
    // }

    return (
        <nav className="nav">
            <div>
                Sorting Visualizer
            </div>
            <div className="buts">
                <div className="button" onClick={(clicked)}>
                    Random
                </div>
                <dic className="drop">
                    <div className="button speed" /*onClick={()=>setSpeed('x'+`${2*s}`)}*/>
                        {speed}
                    </div>
                    <div className="drop-content">
                        
                            <div value="0.5" onClick={()=>{setSpeed(0.5)}}>x0.5</div>
                            <div value="1" onClick={()=>{setSpeed(1)}}>x1</div>
                            <div value="2" onClick={()=>{setSpeed(2)}}>x2</div>
                            <div value="4" onClick={()=>{setSpeed(4)}}>x4</div>
                        
                    </div>    
                </dic>
            </div>
        </nav>
    )
}

export default Navbar;