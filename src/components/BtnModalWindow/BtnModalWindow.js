import React from 'react'
import './BtnModalWindow.css'
import icon from '../../attachments/pawprint.svg'


export const BtnModalWindow = ({click}) => {


    return (
        <div className={'BtnModalWindow'}>
            <button
                className={'button'}
                onClick={click}
            >
                <img className={'btnImage'} src={icon}/>
            </button>
        </div>
    )
}