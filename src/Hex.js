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
                                <div className="hex__item" key={elem} style={{ backgroundColor: `#${elem}` }}>
                                    <p className='hex__name'>#{elem}</p>
                                    <button className='hex__copy' onClick={() => navigator.clipboard.writeText(`#${elem}`)}>Copy to Clipboard</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}
