import React, { useState } from "react";
import accordionData from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiSelect, setMultiSelect] = useState([]);

    // function for single selection
    function handleSingleSelection(getDataId) {
        setSelected(getDataId === selected ? null : getDataId);
    }
    
    // function for Multiselection
    function handleMultiSelection(getDataId) {
        let copyMultiple = [...multiSelect];
        const findIndexOfCurrentId = copyMultiple.indexOf(getDataId);

        if(findIndexOfCurrentId === -1) {
            copyMultiple.push(getDataId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultiSelect(copyMultiple);
    }

    console.log(selected, multiSelect);
    return (
        <div className='flex justify-center items-center flex-col gap-[20px] h-[100vh] w-[100vw]'>
            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable Multiselection</button>
            <div className='w-[500px]'>
                {
                    accordionData && accordionData.length > 0 ? (
                        accordionData.map(item => (
                            <div className='bg-amber-600 mb-[10px] px-[10px] py-[20px] rounded-[8px] shadow-md shadow-amber-500' key={item.id}>
                                <div onClick={enableMultiSelect ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} 
                                    className='text-white flex justify-between items-center cursor-pointer'
                                >
                                    <h3>{item.title}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelect ? 
                                    multiSelect.indexOf(item.id) !== -1 && (
                                        <div className='text-black h-auto bg-amber-50 py-4 my-2 rounded-[8px]'>
                                            {item.content}
                                        </div>
                                    ) : selected === item.id && (
                                        <div className='text-black h-auto bg-amber-50 py-4 my-2 rounded-[8px]'>
                                            {item.content}
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    ) : (<div> No Data Found !</div>) 
                }
            </div>
        </div>
    )   
}