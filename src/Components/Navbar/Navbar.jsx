import React, {useState} from 'react';
import './Navbar.css';

function Navbar(props) {
    var s=1;
    var [randomRender, clicked] = useState(false);
    var [speed, setSpeed] = useState('x'+`${s}`);

    console.log(randomRender);
    clicked = () => {
        window.location.reload(false)
        randomRender= true;
        console.log(randomRender);
    }

    return (
        <nav className="nav">
            <div>
                Sorting Visualizer
            </div>
            <div className="buts">
                <div className="button" onClick={(clicked)}>
                    Random
                </div>
                <div className="button speed" onClick={()=>setSpeed('x'+`${2*s}`)}>
                    {speed}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;