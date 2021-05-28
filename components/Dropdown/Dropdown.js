import React, { useState, useEffect } from 'react';

export const Dropdown = ({
    serviceTypes,
    parentCallback
}) => {
    const [service, setService] = useState([]);
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);

    // initial render set the service types
    useEffect(() => {
        setService(serviceTypes)
    }, []);

    const sendData = (value) => {
        parentCallback(value);
    }

    const handleOnClick = (value) => {
        setDisplay(false);
        setSearch(value);
        sendData(value);
    }

    return (
        <>
            <input 
                id="dropdown"
                onClick={() => setDisplay(true)}
                defaultValue={search}
                placeholder="Enter appointment type"
                />
                {display && 
                    service.map((v,i)=> {
                    return (
                        <div className="service-entry"
                        key={`service-option-${v}-${i}`}
                        onClick={()=>handleOnClick(v)}
                        tabIndex="0"
                        >
                            <span>{v}</span>
                        </div>
                    )
                })}
        </>
    )
}