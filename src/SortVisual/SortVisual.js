import React, { Component } from 'react';
import './SortVisual.css';
import { getMergeSortAnimations } from '../algorithm/mergeSort';
import { getBubbleSortAnimations } from '../algorithm/bubbleSort';
import { getSelectSortAnimations } from '../algorithm/selectSort';
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortVisual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],  
        }
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < 290; i++)
        {
            array.push(randomIntFromIntervals(5, 730));
        }
        this.setState({ array });
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
        
            
            
        
    bubbleSort() {
        

        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            
                const [barOneIdx, barTwoIdx,barOneheight,barTwoheight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
             
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellow';
                    barTwoStyle.backgroundColor = 'yellow';
                }, i * 10);
                setTimeout(() => {
                    barOneStyle.height = `${barTwoheight}px`;
                    barTwoStyle.height = `${barOneheight}px`;
                    barOneStyle.backgroundColor = 'blue';
                        barTwoStyle.backgroundColor = 'blue' ;
                }, i * 7);
            
            
            
        }

    }
    selectSort() {
        

        const animations = getSelectSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            
                const [barOneIdx, barTwoIdx,barOneheight,barTwoheight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
             
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'yellow';
                    barTwoStyle.backgroundColor = 'yellow';
                }, i * 5);
                setTimeout(() => {
                    barOneStyle.height = `${barTwoheight}px`;
                    barTwoStyle.height = `${barOneheight}px`;
                    barOneStyle.backgroundColor = 'blue';
                    // barTwoStyle.backgroundColor = 'blue' ;
                }, i * 10);
            
            
            
        }

    }
    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{ height: `${value}px` }}>
                </div>
            ))}
                <button onClick={() => this.resetArray()}>Generate new array  </button>
                <button onClick={() => this.mergeSort()}>Merge sort</button>
                <button onClick={() => this.bubbleSort()}>bubble sort</button>
                <button onClick={()=>this.selectSort()}>selection sort</button>
                
                
            </div>
            
                );
            
  }
}
function randomIntFromIntervals(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
