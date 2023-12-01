import React, {useEffect, useState} from 'react'

const TotalSum = ({list}) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(list.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.amount), 0))
    }, [list, total])
    return (
        <div>${total}</div>
    )
}
export default TotalSum;