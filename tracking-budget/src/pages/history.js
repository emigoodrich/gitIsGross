import React, { useEffect, useState, useRef } from "react";
import OutputtingLists from '../components/outPuttingLists'
import TotalSum from '../components/totalSum';
import ListContext from '../components/listContext';

const defaultList = []
const History = () => {
    const listLength = useRef()
    const [list, setList] = useState(defaultList);
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'));
        if (list) {
            setList(list)
        }
    }, []);
    const deletingListItem = (id) => {
        setList(list => {
            return list.filter(item => item.id !== id)
        })
        console.log(id)
        console.log(list)
    }
    useEffect(() => {
        if (list !== defaultList) {
            localStorage.setItem("list", JSON.stringify(list));
        }
    }, [list])
    useEffect(() => {
        listLength.current = list.length;
    }, [list])
    return (
            <ListContext.Provider value={list}>
                <div>
            <div id="review-titles">
                <h1>Your history</h1>
                <h1><TotalSum list={list}/></h1>
            </div>
            <h5>Amount of items: {listLength.current}</h5>
            <OutputtingLists list={list}  deletingListItem={deletingListItem}/>
            </div>
            </ListContext.Provider>
    )
}
export default History;