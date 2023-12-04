import React, {useCallback, useState, useEffect, useMemo} from 'react';
import {TextField, Button} from '@mui/material'

const AddTransaction = () => {
    const [list, setList] = useState(() => {
        const rawValue = localStorage.getItem('list');
        const initialValue = JSON.parse(rawValue);
        return initialValue || [];
    })
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const handleChangeAmount = useCallback((event) => {
        if (isNaN(event.target.value)){
            alert('numbers only!')
        } else {
            setAmount(event.target.value)
        }
    }, []);
    function handleChangeDescription(event) {
        setDescription(event.target.value)
    }
    const handleAdd = useCallback(() => {
        console.log(list)
        const newList = list.concat({
            amount: amount, 
            des: description,
            id: count
        })
        setList(newList)
        console.log(list)
        setCount(count + 1)
        setAmount('')
        setDescription('')
        console.log(count)
    }, [amount, description, count, list]);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const amountAndDescription = useMemo(() => {
        return `${amount} ${description} `;
    }, [amount, description]);
    return (
        <div id="transaction-main-div">
            <div>
            <h1>Add Transaction</h1>
            <h3>Amount</h3>
            <TextField id="outlined-basic fullWidth" label="Amount" variant="outlined" value={amount} onChange={handleChangeAmount}/>
            <h3>Description</h3>
            <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={handleChangeDescription}/>
            <span id="ugh">
                <div class="decisionButtons">DEPOSIT</div>
                <div class="decisionButtons">WITHDRAWAL</div>
            </span>
            <Button onClick={handleAdd}>Submit</Button>
            </div>
            <div>
                <h2>Current:</h2>
                <h2><span>$</span>{amountAndDescription}</h2> 
            </div>
        </div>
    )
}
export default AddTransaction;