import React, {Component} from 'react';
import './BarContainer.css';

export default class BarContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const barColor = this.props.barColor;
        let n= this.props.array.length;
        let gap;
        (n<50 ? gap = 20 : gap = 5);
        return (
            <div className="container"
                style={{
                    gridTemplateColumns : `repeat(${n} ,1fr`,
                    gridGap: `${gap}px`
                }}
            >
                {this.props.array.map((value, index) => (
                    <div className="bar" id= {index}
                        key={index}
                        style={{
                            height: `${value}px`,
                            backgroundColor: `${barColor}`
                        }}></div>   
                ))}
            </div>
        )
    }
}