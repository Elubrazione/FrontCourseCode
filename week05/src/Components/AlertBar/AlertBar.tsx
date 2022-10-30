import React from 'react';
import './AlertBar.css'

interface IProps {
    content: string;
}

export default function AlertBar (props: IProps) {

    return (
        <div className='message'>
            <p className='msgtext'>{props.content}</p>
        </div>
    )
}