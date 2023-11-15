import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { format } from 'date-fns';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function VendaCreate() {
    let navigate = useNavigate();

    const [comanda, setComanda] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (event) => {
        const comanda = event.target.value;
        if (comanda > 0) 
            setComanda(comanda);
        else 
            setComanda(1);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            comanda: comanda,
            valor: 0,
            data: format(selectedDate, 'dd/MM/yyyy'),
            status:true,
        }

        console.log("Teste ->"+JSON.stringify(data));

        postApi('/venda/create', data).then(data => {
            navigate("/vendas/" + data.vendaId);
        });
    }

    return (
        <div className='justify-content-center row'>
            <div className='col-11 col-md-8'>
                <div className='card mt-1'>
                    <div className='card-header text-center'>
                        <span className='h4'>Iniciar Venda</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label htmlFor="comanda" className="form-label">Comanda da Venda:</label>
                                <input type="text" name="comanda" id="comanda" className='form-control' value={comanda || ""} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label me-2">Data da Venda: </label>
                                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="dd/MM/yyyy" placeholderText="Selecione uma data" className='form-control' disabled />
                            </div>

                            <button type="submit" className='btn btn-success'>
                                <i className="bi bi-bag"></i>
                                <span className='mx-1'>Iniciar Venda</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}