import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({data}) {
  return (
    <motion.div  drag   className=" relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-600 text-white px-5 py-10 overflow-hidden ">
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
            <div className='flex items-center justify-between py-3  px-8  mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-red-900 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> :<MdOutlineFileDownload size=".8em" color='white' /> }
                    
                </span>
            </div>
            {
                data.tag.isOpen && (

                    <div className= {`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold '>{data.tag.tagtitle }</h3>
                    </div>

                )
            }
            
        </div>


            
    </motion.div>

  );
}

export default Card