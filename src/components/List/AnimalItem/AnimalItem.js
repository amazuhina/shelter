import React from 'react'
import './AnimalItem.css'


export const AnimalItem = ({id, animal, name, breed, age, color, img, isSterilized, sex, removeItem}) => {
    const resultSterilized = (isSterilized) => {
       return isSterilized ? 'да': 'нет'
    }
    return (
        <div className={'AnimalItem'}>
            <div className={'information'}>
                <div className={'columnText'}>
                    <div className={'row'}>Животное: {animal}</div>
                    <div className={'row'}>Имя: {name}</div>
                    <div className={'row'}>Порода: {breed}</div>
                    <div className={'row'}>Возраст: {age}</div>
                    <div className={'row'}>Цвет: {color}</div>
                    <div className={'row'}>Стерилизован: {resultSterilized(isSterilized)} </div>
                    <div className={'row'}>Пол: {sex}</div>
                </div>
                <div className={'columnPhoto'}>
                    <div>
                        <img className={'photo'} src={img}/>
                    </div>
                </div>
            </div>
            <div
                className={'btnDeleteItem'}
                onClick={() => {
                    removeItem(id)
                }}
            >х
            </div>
        </div>
    )
}