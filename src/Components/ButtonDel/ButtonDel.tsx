import React from 'react';
import "./ButtonDel.css"

type buttonDelType = {
    title: string
    callBackDeleteButton: () => void
}

const ButtonDel = (props: buttonDelType) => {

    const clickHandler = () => {
        props.callBackDeleteButton()
    }

    return (
        <button
            onClick={clickHandler}
            className="delete">{props.title}</button>
    );
};

export default ButtonDel;