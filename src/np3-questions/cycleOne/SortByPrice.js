import React, { useState } from 'react';

const initialData = [
    {
      id: 1,
      name: "shoes",
      price: 100
    },
    {
      id: 2,
      name: "jacket",
      price: 400
    },
    {
      id: 3,
      name: "hat",
      price: 50
    },
    {
      id: 4,
      name: "sunglasses",
      price: 250
    },
    {
      id: 5,
      name: "gloves",
      price: 300
    }
];

export default function SortByPrice() {
    const [itemsData, setItemsData] = useState(initialData);

    function sortItems(sortOrder) {
        if (sortOrder === 'asc') {
            const sortedItems = [...itemsData].sort((a, b) => a.price - b.price);
            setItemsData(sortedItems);
        }
        else {
            setItemsData([...itemsData].sort((a, b) => b.price - a.price))
        }
    }

    return(
        <>
        <button onClick={() => sortItems('asc')}>Sort Asc</button>
        <button onClick={() => sortItems('desc')}>Sort Desc</button>
        {
            itemsData.map((item, index) => {
                return (
                    <div key={item.id}>{index}. {item.name} ${item.price}</div>
                )
            })
        }
        </>
    )
}