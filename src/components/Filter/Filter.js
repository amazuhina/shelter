import React, {useState} from 'react'
import './Filter.css'
import {DropDown} from "../DropDown/DropDown/DropDown";
import {OptionsIsSterilised, OptionsSex} from "../OptionsForSelect/OptionsForSelect";

import {Input} from "../FormForAdd/Input/Input";


export const Filter = ({model}) => {
    const [animal, setAnimal] = useState('')
    const [sex, setSex] = useState(null)
    const [isSterilized, setIsSterilized] = useState(null)


    // const setterIsSterilized = (value) => {
    //     if (value === 'Стерелизован(а)') {
    //         setIsSterilized(true)
    //     } else if (value === 'Не стерилизован(а)') {
    //         setIsSterilized(false)
    //     } else {
    //         setIsSterilized(null)
    //     }
    // }


    const allAnimal = () => {

        return model.filter(i => (i.isSterilized == isSterilized || isSterilized == null)
            && (i.sex == sex || sex == null)
            && i.animal.toLowerCase() == animal.toLowerCase().trim()).length
    }

    return (
        <div className={'Filter'}>
            <Input label={'Животное'} setter={setAnimal}/>
            <DropDown title={'Пол'} setter={setSex} options={OptionsSex}/>
            <DropDown title={'Стерилизован'} options={OptionsIsSterilised} setter={setIsSterilized}/>
            <div className={'result'}>
                Животных в приюте: {allAnimal()}
            </div>
        </div>
    )
}