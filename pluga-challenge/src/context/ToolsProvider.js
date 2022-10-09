import toolsContext from "./toolsContext";
import React, { useState, useEffect } from 'react';



function ToolsProvider({ children }) {
    const [dataAPI, setDataAPI] = useState([]);
    const [searchedValues, setSearchedValues] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});


    useEffect(() => {
        const getAPIdata = async () => {
          const response = await fetch('https://pluga.co/ferramentas_search.json');
          const dataAPI = await response.json();
          setDataAPI(dataAPI);
        };
        getAPIdata();
      }, []);

    const context = { 
        dataAPI,
        setSearchedValues,
        searchedValues,
        showModal,
        setShowModal,
        modalData,
        setModalData,
    };

    return (
        <toolsContext.Provider value={{context}}>
            { children }
        </toolsContext.Provider>
    )
}

export default ToolsProvider;