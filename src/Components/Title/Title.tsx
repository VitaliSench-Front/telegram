import React from 'react';
import "./Title.css"

type titlePropsType = {
    title: string
}

const Title = (props: titlePropsType) => {
    return (
        <div className="title">
            {props.title}
        </div>
    );
};

export default Title;