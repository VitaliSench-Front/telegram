import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import "./Input.css"

type inputType = {
    title: string
    setTitle: (title: string) => void
    keyDownHandler: (e : KeyboardEvent<HTMLInputElement>) => void
}


const Input = (props:inputType) => {



    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    const keyDownHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        props.keyDownHandler(e)
    }

    return (
        <input
            onKeyDown={keyDownHandler}
            value={props.title}
            onChange={changeHandler}
            className="Input"
            placeholder="Enter your message please"
        />
    );
};

export default Input;