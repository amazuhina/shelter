import React , {useState} from 'react'
import './App.css';
import {BtnModalWindow} from "./components/BtnModalWindow/BtnModalWindow";
import {ModalWindow} from "./components/ModalWindow/ModalWindow";
import {List} from "./components/List/List";
import {Filter} from "./components/Filter/Filter";

function App() {

    const [model, setModel] = useState([{
        id: 1,
        animal: 'Собака',
        name: 'Вотан',
        breed: 'Овчарка',
        age: '1',
        color: 'Коричневый',
        img: 'http://vseprosobak.ru/wp-content/uploads/2013/12/foto_00511.jpg',
        isSterilized: false,
        sex: 'Мужской',
    },
        {
        id: 2,
        animal: 'Кот',
        name: 'Корица',
        breed: 'нет',
        age: '1,5',
        color: 'Коричневый',
        img: 'https://i.pinimg.com/originals/b7/78/ab/b778abc1025a9e6a4538bd5b715a8300.png',
        isSterilized: true,
        sex: 'Женский',
    },
        {
            id: 2,
            animal: 'Кот',
            name: 'Мартин',
            breed: 'Шотландец',
            age: '2',
            color: 'Белый',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQek2GIcjkHVhQtD3fVj43LDZyx4gKIewE_w&usqp=CAU',
            isSterilized: true,
            sex: 'Мужской',
        },
    ])


    const addItem = (item) => {
        item.id = Date.now()
        setModel(model.concat([item]))
    }

    const removeItem = (id) => {

        setModel(model.filter(i => i.id !== id))
    }

    const [isShowModalWindow, setIsShowModalWindow] = useState(false)

    const toggleModalWindow = () => {
        setIsShowModalWindow(!isShowModalWindow)
    }

    return (
        <div className="App">
            <div className={'mainTitle'}>
                <h1>Приют для животных</h1>
            </div>
            <div className={'toAddNewAnimal'}>
                <BtnModalWindow click={toggleModalWindow}/>
                    {
                        (isShowModalWindow)
                            ? <ModalWindow toggleModalWindow={toggleModalWindow} addItem={addItem}/>
                            : null
                    }
            </div>
            <div className={'main'}>
                <div className={'column'}>
                    <List model={model} removeItem={removeItem}/>
                </div>
                <div className={'column'}>
                    <Filter model={model}/>
                </div>
            </div>
        </div>
    );
}

export default App;




/*
1. не могу добавить картинку из папки
2. не могу рассчитать всего животных по фильтру (у меня
явные проблемы с простым js. все самые простые алгоритмы даются тяжелее, чем реакт)
3. в карточке не понимаю как завязать булевое значение на выводе "стерелизован: да/нет"
 */
