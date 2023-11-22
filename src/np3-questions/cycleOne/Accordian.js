import React, { useState } from 'react';
import AccordianPanel from './AccordianPanel';

const accordianData = [
    {
        id: 0,
        title: 'Panel 1',
        content: 'Content for Panel 1',
    },
    {
        id: 1,
        title: 'Panel 2',
        content: 'Content for Panel 2',
    },
    {
        id: 2,
        title: 'Panel 3',
        content: 'Content for Panel 3',
    }
]

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(0);

    return(
    <>
        {accordianData.map((acc) => 
        <AccordianPanel 
            data={acc} 
            isActive={acc.id === activeIndex} 
            togglePanel={() => setActiveIndex(acc.id)} 
        />)}
    </>
    )
}