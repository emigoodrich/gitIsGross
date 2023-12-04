import React, {useCallback, useState, useEffect, useMemo} from 'react';
import {TextField, Button} from '@mui/material'

const AddTransaction = () => {
    const [list, setList] = useState(() => {
        const rawValue = localStorage.getItem('list');
        const initialValue = JSON.parse(rawValue);
        return initialValue || [];
    })
    const [count, setCount] = useState(() => {
        const rawCount = localStorage.getItem('count');
        const initialCount = JSON.parse(rawCount)
        return parseInt(initialCount) || 0;
    })
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [clickedOption, setClickedOption] = useState(false)
    const handleChangeAmount = useCallback((event) => {
        if (isNaN(event.target.value)){
            alert('numbers only! refresh if you need to clear it because its bugged a lil')
        } else {
            setAmount(event.target.value)
        }
    }, []);
    function handleChangeDescription(event) {
        setDescription(event.target.value)
    }
    const handleAdd = useCallback(() => {
        
        if (clickedOption) {
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
        } else {
            alert('choose to deposit or withdraw!!')
        }
    }, [amount, description, count, list, clickedOption]);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('count', JSON.stringify(count))
    }, [list, count]);

    const amountAndDescription = useMemo(() => {
        return `${amount} ${description} `;
    }, [amount, description]);
    
    function negativeFunction() {
        setAmount(-Math.abs(amount))
        setClickedOption(true)
    }
    function positiveFunction() {
        setAmount(Math.abs(amount))
        setClickedOption(true)
    }
    
    return (
        <div id="transaction-main-div">
            <div>
            <h1>Add Transaction</h1>
            <h3>Amount</h3>
            <TextField id="outlined-basic fullWidth" label="Amount" variant="outlined" value={amount} onChange={handleChangeAmount}/>
            <h3>Description</h3>
            <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={handleChangeDescription}/>
            <span id="ugh">
                <div class="decisionButtons" onClick={positiveFunction}>DEPOSIT</div>
                <div class="decisionButtons" onClick={negativeFunction}>WITHDRAWAL</div>
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