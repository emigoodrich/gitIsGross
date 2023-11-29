import React, { useEffect, useState } from "react";
import OutputtingLists from '../components/outPuttingLists'
import TotalSum from '../components/totalSum';

const History = () => {
    const [list, setList] = useState([]);
    //const [num, setNum] = useState(0)
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'));
        if (list) {
            setList(list)
        }
    }, []);
  
    const deletingListItem = (index) => {
        console.log(list[index].id)
        setList(list => {
            return list.filter(item => item.id !== index)
        })
        
    }
    return (
        <div>
            <div id="review-titles">
                <h1>Your history</h1>
                <h1><TotalSum /></h1>
            </div>
            <OutputtingLists list={list}  deletingListItem={deletingListItem}/>
        </div>
    )
}
export default History;