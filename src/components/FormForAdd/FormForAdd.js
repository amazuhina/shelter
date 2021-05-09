import React , {useState} from 'react'
import './FormForAdd.css'
import {Input} from "./Input/Input";
import {DropDown} from "../DropDown/DropDown/DropDown";
import {OptionsSex, OptionsIsSterilised} from "../OptionsForSelect/OptionsForSelect";
import icon from '../../attachments/pawprint.svg'



export const FormForAdd = ({toggleModalWindow, addItem}) => {
    const [model, setModel] = useState([{
        animal: '',
        name: '',
        breed: '',
        age: '',
        color: '',
        img: '',
        isSterilized: false,
        sex: '',
    },
    ])


    const setAnimal = value => {
        setModel((prevValue) => ({...prevValue, animal: value}))
    }

    const setName = value => {
        setModel((prevValue) => ({...prevValue, name: value}))
    }

    const setBreed = value => {
        setModel((prevValue) => ({...prevValue, breed: value}))
    }

    const setAge = value => {
        setModel((prevValue) => ({...prevValue, age: value - 0}))
    }

    const setColor = value => {
        setModel((prevValue) => ({...prevValue, color: value}))
    }

    const setImg = value => {
        setModel((prevValue) => ({...prevValue, img: value}))
    }

    const setIsSterilized = value => {
        setModel((prevValue) => ({...prevValue, isSterilized: value}))
    }

    const setSex = value => {
        setModel((prevValue) => ({...prevValue, sex: value}))
    }

    const inputs = [
        {
            label: 'Животное:',
            setter: setAnimal,
        },
        {
            label: 'Имя:',
            setter: setName,
        },
        {
            label: 'Порода:',
            setter: setBreed,
        },
        {
            label: 'Возраст:',
            setter: setAge,
        },
        {
            label: 'Цвет:',
            setter: setColor,
        },
        {
            label: 'Фото:',
            setter: setImg,
        },

    ]


    const AddInput = () => {
        addItem(model)
        toggleModalWindow()
    }



    return (

        <div className={'FormForAdd'}>
            <div
                className={'closeForm'}
                onClick={toggleModalWindow}
            >
                x
            </div>
            <div className={'inputs'}>
                {
                    inputs.map(item => <Input label={item.label} setter={item.setter}/>)
                }

                <div className={'dropDownList'}>
                    <div className={'ddItem'}>
                        <DropDown title={'Пол'} options={OptionsSex} setter={setSex}/>
                    </div>
                    <div className={'ddItem'}>
                        <DropDown title={'Стерилизован'} options={OptionsIsSterilised} setter={setIsSterilized}/>
                    </div>
                </div>
            </div>
            <div
                className={'btnToAdd'}
                onClick={AddInput}

            >
                <img style={{backgroundColor: ''}} className={'btnImage'} src={icon}/>
            </div>
        </div>
    )
}