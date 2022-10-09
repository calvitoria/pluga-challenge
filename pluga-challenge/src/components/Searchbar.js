import toolsContext from '../context/toolsContext';
import React, { useContext } from 'react';

function Searchbar() {
    const { context: { setSearchedValues } } = useContext(toolsContext);


    const setsSearchedValues = ({ target: { value } }) => { // pega o que for digitado e manda para o context.
        setSearchedValues(value);
    }

    return (
        <section className='pt-14'>
            <div className='sm:mx-16'>
                <input
                    className='border-2 border-slate-400 focus:ring-sky-500 py-2 w-full text-pluga focus:outline-none 
                    focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md px-6'
                    type="text"
                    placeholder="Buscar +60 ferramentas"
                    onChange={setsSearchedValues}
                />
            </div>
        </section>
    );
}

export default Searchbar;