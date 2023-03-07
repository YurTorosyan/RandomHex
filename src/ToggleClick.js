import React, { useState } from 'react';

export default function ToggleClick({ firstFunc, secondFunc }) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(e) {
        if (isClicked) {
            secondFunc();
            setIsClicked(false)
            if (e.target.tagName === "I") {
                e.target.classList.replace("fa-solid", "fa-regular")
            } else if (e.target.tagName === "BUTTON") {
                e.target.firstElementChild.classList.replace("fa-solid", "fa-regular")
            }
        } else {
            firstFunc();
            setIsClicked(true);
            if (e.target.tagName === "I") {
                e.target.classList.replace("fa-regular", "fa-solid")
            } else if (e.target.tagName === "BUTTON") {
                e.target.firstElementChild.classList.replace("fa-regular", "fa-solid")
            }
        }
    }

    return (
        <button className='hex__favorite' onClick={handleClick}><i className="fa-regular fa-heart hex__icon"></i></button>
    );
}