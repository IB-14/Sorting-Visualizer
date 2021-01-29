import React, {Component} from 'react';
import './BarContainer.css';

export default class BarContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const barColor = this.props.barColor;
        return (
            <div className="container">
                {this.props.array.map((value, index) => (
                    <div className="bar"
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