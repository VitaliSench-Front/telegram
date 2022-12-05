import React from 'react';
import "./ButtonClear.css"

type buttonClearType = {
    title: string
    callBackClearButton: () => void
}

const ButtonClear = (props: buttonClearType) => {

    const clearHandler = () => {
        props.callBackClearButton()
    }

    return (
        <button
            onClick={clearHandler}
            className="clear">{props.title}</button>
    );
};

export default ButtonClear;