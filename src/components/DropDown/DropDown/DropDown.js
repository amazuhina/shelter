import React from 'react'
import './DropDown.css'


export const DropDown = ({title, setter, options}) => {
    return (
        <div className={'DropDown'}>
            <div className={'dropList'}>
                <div className={'title'}>
                    {title}
                </div>
                <select onChange={e => {
                    const value = e.target.value
                    const obj = options.find(i => i.label == value)
                    setter(obj.value)
                }}>
                    {
                        options.map(i => <option>{i.label}</option>)
                    }
                </select>
            </div>
        </div>
    )
}