import React, {useState, useEffect} from 'react'

const HistoryList = ({list}) => {
    const size = 3;
    const [dog, setDog] = useState([]);
   useEffect(() => {
       setDog( list.slice(list.length - size, list.length))
    }, [list]);
    console.log(dog);
    return (
        <div>{dog.map((item) => (
            <div class="historyItems"><div>{JSON.parse(JSON.stringify(item.des))}</div><div>${JSON.parse(JSON.stringify(item.amount))}</div></div>
        ))}
            </div>
    )
}

export default HistoryList;