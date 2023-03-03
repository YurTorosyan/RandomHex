import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <p className="footer__info">This Page created by <a href="https://github.com/YurTorosyan" target="_blank">Yuri Torosyan</a> with the help of <a href="https://reactjs.org/" target="_blank">React</a></p>
                <p className="footer__copyright">&copy; Copyright 2023</p>
                <p className="footer__source">RandomHex Github <a href="https://github.com/YurTorosyan/random_color_page" target="_blank">Source</a> page</p>
            </div>
        </footer>
    )
}
