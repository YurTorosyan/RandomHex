import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <h1 className='header__title'>Random Hex Color for CSS</h1>
                    <p className="header__info">This Page created by <a href="https://github.com/YurTorosyan" target="_blank">Yuri Torosyan</a> with the help of <a href="https://reactjs.org/" target="_blank">React</a></p>
                </div>
            </header>

        </div>
    );
}