import React, { useState } from 'react'
import Card from './Card';


function Foreground() {

    
    

    const data =[
        {desc: "hi this is alok annd doing react.",filesize: ".9mb", close: false, tag: {isOpen: false, tagtitle:"Downlaod Now",tagColor:"green" }, },
        {desc: "hi this is alok annd doing react.",filesize: ".9mb", close: true, tag: {isOpen: true, tagtitle:"Downlaod Now",tagColor:"green" }, },
        {desc: "hi this is alok annd doing react.",filesize: ".9mb", close: false, tag: {isOpen: true, tagtitle:"Upload Now",tagColor:"blue" }, },

    ];
    
  return (
    <div   className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5   '>
        {data.map((item, index)=>(
            <Card data={item}  />
        ))}
        
        
    </div>
    
  );
}

export default Foreground