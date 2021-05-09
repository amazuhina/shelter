import React from 'react'
import './Input.css'


export const Input = ({label, setter}) => {
    return (
        <div className={'Input'}>
            <label> {label}
                <input
                    className={'inputField'}
                    type={'text'}
                    onChange={(event) =>{
                        const value = event.target.value
                        setter(value);
                    }}

                    />
            </label>
        </div>
    )
}