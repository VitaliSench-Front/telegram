import React, {KeyboardEvent, useState} from 'react';
import './App.css';
import Title from "./Components/Title/Title";
import Input from "./Components/Input/Input";
import ButtonSend from "./Components/ButtonSend/ButtonSend";
import ButtonClear from "./Components/ButtonClear/ButtonClear";
import ButtonDel from "./Components/ButtonDel/ButtonDel";
import {v1} from "uuid";


type messageType = {
    id: string,
    text: string
}


function App() {

    const MAX_COUNT_MESSAGE = 5

    const [messages, setMessages] = useState<Array<messageType>>([])
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addMessage = (text: string) => {
        setMessages([...messages, {id: v1(), text}])
    }
    const callBackSendButton = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            addMessage(trimmedTitle)
        } else {
            setError("Message is missing!")
        }
        setTitle("")
    }
    const callBackClearButton = () => {
        setTitle("")
    }
    const callBackDeleteButton = () => {
        setMessages(messages.slice(0, messages.length - 1))
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            callBackSendButton()
        }
    }


    return (
        <div className="App">
            <div className="title">
                <Title title={"List of messages"}/>
            </div>
            <div className="error">
                {error && <div className="error-message">{error}</div>}
            </div>
            <div className="FullInput">
                <Input title={title} setTitle={setTitle} keyDownHandler={keyDownHandler}/>
                <ButtonSend title={"Send"} addMessage={callBackSendButton}
                            isDisable={messages.length === MAX_COUNT_MESSAGE}
                />
                <ButtonClear title={"Clear"} callBackClearButton={callBackClearButton}/>
            </div>

            <div className="deleteLast">
                <ButtonDel title="Delete last message" callBackDeleteButton={callBackDeleteButton}/>
            </div>
            <div>
                <ul>
                    {messages.map(message => <li key={message.id}>
                        <span>{message.text}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
