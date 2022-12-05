import React from 'react';
import "./ButtonSend.css"

type buttonSendType = {
    title: string
    addMessage: () => void
    isDisable: boolean
}

const ButtonSend = (props:buttonSendType) => {


    const addMessage = () => {
        props.addMessage()
    }



    return (
        <button
            className={props.isDisable? "isDisabled" : "send"}
            disabled={props.isDisable}
            onClick={addMessage}
        >{props.title}</button>
    );
};

export default ButtonSend;