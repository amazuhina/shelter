import React from 'react'
import './ModalWindow.css'
import {FormForAdd} from "../FormForAdd/FormForAdd";


export const ModalWindow = ({toggleModalWindow, addItem}) => {
    return (
        <div className={'bright'}>
            <div className={'ModalWindow'}>
                <FormForAdd toggleModalWindow={toggleModalWindow} addItem={addItem}/>
            </div>
        </div>

    )
}