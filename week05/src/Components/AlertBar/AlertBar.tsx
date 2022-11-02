import React from 'react';
import { IAlert } from '../../Utils/props';
import './AlertBar.css'

interface IProps {
    alertValue: IAlert
    alertUpdate: Function
}

export default function AlertBar (props: IProps) {
    if (props.alertValue.status) {
        props.alertUpdate('');
        return (
            <div className='message'>
                <p className='msgtext'>{props.alertValue.content}</p>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}