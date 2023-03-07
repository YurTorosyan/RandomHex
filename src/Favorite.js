import React from 'react';
import './Favorite.css';
import ToggleClick from './ToggleClick';


export default function Favorite({ favorite, deleteFavorite, addFavorite }) {
    return (
        <section className='favorite'>
            <div className="container">
                <h2 className='favorite__title'>Favorite</h2>
                <p className='favorite__sub-title'>In this section Your favorite colors</p>
                <div className="favorite__flex">
                    {
                        favorite.map((elem) => {
                            return (
                                <div className="favorite__item" key={elem} style={{ backgroundColor: `#${elem}` }}
                                    onClick={(e) => {
                                        navigator.clipboard.writeText(`#${elem}`)
                                        e.target.classList.add('flag-active');
                                        setTimeout(() => {
                                            e.target.classList.remove('flag-active');
                                        }, 850);
                                    }}>
                                    <button className='favorite__remove' onClick={() => deleteFavorite(elem)}><i class="fa-solid fa-xmark"></i></button>
                                    <p className='favorite__name' >#{elem}</p>
                                    <p className='favorite__copied'>Copied!</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section >
    );
}