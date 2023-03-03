import React from 'react';
import './Hex.css';


export default function Hex({ hex }) {
    return (
        <section className='hex'>
            <div className="container">
                <div className="hex__flex">
                    {
                        hex.map((elem) => {
                            return (
                                <div className="hex__item" key={elem} style={{ backgroundColor: `#${elem}` }}
                                    onClick={(e) => {
                                        navigator.clipboard.writeText(`#${elem}`)
                                        e.target.classList.add('flag-active');
                                        setTimeout(() => {
                                            e.target.classList.remove('flag-active');
                                        }, 850);
                                    }}>
                                    <p className='hex__name'>#{elem}</p>
                                    <p className='hex__copied'>Copied!</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}
