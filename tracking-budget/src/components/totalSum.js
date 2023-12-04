import React, {useContext, useEffect, useState} from 'react';
import ListContext from './listContext';

const TotalSum = () => {
    const [total, setTotal] = useState(0)

    const contextValue = useContext(ListContext);

    useEffect(() => {
        const list = contextValue ?? [];
        setTotal(list?.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.amount), 0))
    }, [])
    return (
        <div>${total}</div>
    )
}
export default TotalSum;