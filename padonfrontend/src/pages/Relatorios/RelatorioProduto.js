import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getApi, postApi } from '../../Services/RequestHandler';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RelatorioListaProdutos from './RelatorioListaProdutos';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import jsPDF from 'jspdf';

export default function RelatoriosProdutos() {
    const doc = new jsPDF();
    // Info
    const [vendas, setVendas] = useState([]);

    //Datas do Filtro
    const [dataIni, setDataIni] = useState((new Date().setFullYear((new Date()).getFullYear() - 1)));
    const [dataFim, setDataFim] = useState(new Date());

    useEffect(() => {
        var req = { dtinicial: format(dataIni, 'dd/MM/yyyy'), dtfinal: format(dataFim, 'dd/MM/yyyy') }
        //console.log(req);

        postApi('/relatorio/produtos', req)
            .then((data) => {
                setVendas(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleDateIniChange = (date) => {
        setDataIni(date);
        requestRelatorio(date, dataFim);
    };
    const handleDateFimChange = (date) => {
        setDataFim(date);
        requestRelatorio(dataIni, date);
    };

    const requestRelatorio = (ini = dataIni, fim = dataFim) => {
        var req = { dtinicial: format(ini, 'dd/MM/yyyy'), dtfinal: format(fim, 'dd/MM/yyyy') }

        postApi('/relatorio/produtos', req)
            .then((data) => {
                setVendas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleButtonBaixar = () => {
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', putOnlyUsedFonts: true });

        doc.html(document.getElementById('relatorio'), {
            async callback(doc) {
                await doc.save('document');
            },

            x: 15,
            y: 15,
            autoPaging: 'text',
            width: 170,
            windowWidth: 700

        });
    };

    return (
        <div className='justify-content-center row'>
            <div className='col-11 col-md-8'>
                <div className='card mt-1'>
                    <div className='card-header text-center'>
                        <span className='h4'>Relatórios de Vendas com Produtos</span>
                    </div>

                    <div className='card-body'>
                        <div className='row justify-content-center'>
                            <div className='col text-center'>
                                <span className='h5'>Periodo do Relatório</span>
                                <div className='row justify-content-between'>
                                    <div className="col mb-3">
                                        <label htmlFor="dataIni" className="form-label me-2">Data Inicial: </label>
                                        <DatePicker id="dataIni" selected={dataIni} onChange={handleDateIniChange} dateFormat="dd/MM/yyyy" placeholderText="Selecione uma data" className='form-control' />
                                    </div>
                                    <div className="col mb-3">
                                        <label htmlFor="dataFim" className="form-label me-2">Data da Venda: </label>
                                        <DatePicker id="dataFim" selected={dataFim} onChange={handleDateFimChange} dateFormat="dd/MM/yyyy" placeholderText="Selecione uma data" className='form-control' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='text-end'>
                                        <Button variant='warning' onClick={handleButtonBaixar}>
                                            <i className="bi bi-download"></i>
                                            <span className='mx-1'>Baixar</span>
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='row'>
                            <div className='container' id="relatorio">
                                <div className='row text-center'>
                                    <span className='h3'>Relatório de Vendas com Produtos:</span>
                                    <div>{format(dataIni, 'dd/MM/yyyy')} - {format(dataFim, 'dd/MM/yyyy')}</div>
                                </div>
                                {vendas.length > 0 ?
                                    <Table responsive>
                                        <thead>
                                            <tr key={0}>
                                                <th colSpan={4}>Venda Id</th>
                                                <th colSpan={4}>Data</th>
                                                <th colSpan={4}>Sub Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vendas.map((v, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td colSpan={4}>{v.vendaId}</td>
                                                            <td colSpan={4}>{format(parseISO(v.dataVenda), 'dd/MM/yyyy')}</td>
                                                            <td colSpan={4}>R${v.valorTotal}</td>
                                                        </tr>
                                                        <RelatorioListaProdutos produtos={v.produtos} />
                                                    </>
                                                )
                                            }
                                            )}
                                        </tbody>
                                    </Table>
                                    :
                                    <div className='row text-center mt-2'>
                                        <span className='h5'>Sem Vendas finalizadas</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}