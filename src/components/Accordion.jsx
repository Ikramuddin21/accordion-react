import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './accordion.css';

function Accordion () {
    return (
        <>
            <div className="accordion-item">
                <div className="heading">
                    Accordion item 1
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic non placeat nihil odit deleniti magni assumenda aut quo magnam pariatur officia atque aliquid, dolores quae ex qui corrupti commodi adipisci nostrum quasi enim unde. Animi quidem dignissimos voluptatibus molestiae!</p>
                </div>
            </div>
            <div className="accordion-item">
                <div className="heading">
                    Accordion item 1
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic non placeat nihil odit deleniti magni assumenda aut quo magnam pariatur officia atque aliquid, dolores quae ex qui corrupti commodi adipisci nostrum quasi enim unde. Animi quidem dignissimos voluptatibus molestiae!</p>
                </div>
            </div>
        </>
    )
}

export default Accordion;