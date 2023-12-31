import React from 'react';

const OutputtingLists = ({ list, deletingListItem }) => {
    return   <div> 
    {list.map((item, index) => (
        <div key={index} id={item.id} class="review-list-item">
            <div class="list-items">
                <div>${JSON.parse(JSON.stringify(item.amount))}</div>
                <div>{JSON.parse(JSON.stringify(item.des))}</div>
            </div>
            <div class="item-right-side">
                <div onClick={() => deletingListItem(item.id)}>x</div>
            </div>
        </div>
    ))}  
</div>  
}

export default OutputtingLists;