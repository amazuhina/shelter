import React from 'react'
import './List.css'
import {AnimalItem} from "./AnimalItem/AnimalItem";


export const List = ({model, removeItem}) => {
    return (
        <div className={'List'}>

                <h2 className={'listTitle'}>
                    Все животные приюта:
                </h2>
            <div className={'cards'}>
                {
                    (model.length > 0)
                        ? model.map(i => <AnimalItem
                            id={i.id}
                            animal={i.animal}
                            name={i.name}
                            breed={i.breed}
                            age={i.age}
                            color={i.color}
                            img={i.img}
                            isSterilized={i.isSterilized}
                            sex={i.sex}
                            removeItem={removeItem}

                            key={i.id}
                        />)
                        : <h2>В приюте никого нет ^^</h2>
                }
            </div>
        </div>
    )
}