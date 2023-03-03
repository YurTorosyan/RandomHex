import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className='header__title'>Random Hex Color for CSS</h1>
                <h3 className='header__info'>In this page you can take the color you liked!</h3>
                <div className="header__instruction">
                    <h3 className='header__instruction-title'>Instruction</h3>
                    <p className='header__instruction-text'>
                        <span>1.</span> Click to "Load Hex" button to generate 20 random hex colors. <br />
                        <span>2.</span> Click on the color you like to copy to clipboard. <br />
                        <span>3.</span> Click one more time to "Load Hex" button to generate 20 more hex colors.
                    </p>
                </div>

            </div>
        </header>
    );
}