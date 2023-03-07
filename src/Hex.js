import React, { useState } from 'react';

import ToggleClick from './ToggleClick';
import './Hex.css';


export default function Hex({ hex, addFavorite, deleteFavorite }) {
    return (
        <section className='hex'>
            <div className="container">
                <h2 className='hex__title'>Random Hex</h2>
                <p className='hex__sub-title'>In this section random hexes</p>
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
                                    <ToggleClick firstFunc={() => addFavorite(elem)} secondFunc={() => deleteFavorite(elem)} />
                                    <p className='hex__name' >#{elem}</p>
                                    <p className='hex__copied'>Copied!</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section >
    );
}
