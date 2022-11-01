import React from 'react';
import './AlertBar.css'

interface IProps {
    content: string,
    status: boolean,
    alertStatus: Function
}

export default function AlertBar (props: IProps) {
    if (props.status) {
        props.alertStatus('');
        return (
            <div className='message'>
                <p className='msgtext'>{props.content}</p>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}