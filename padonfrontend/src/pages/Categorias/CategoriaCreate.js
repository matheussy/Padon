import React from 'react';
import { useState } from 'react';

export default function CategoriaCreate() {
    // Manipulador de envio do formulário
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    }

    return (
        <div className='justify-content-center row'>
            <div className='col col-md-8'>
                <div className='card mt-1'>
                    <div className='card-header'>
                        <span>Adicionar Categoria</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>


    );
}