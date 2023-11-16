import React from 'react';


export default function RelatorioListaProdutos({ produtos }) {
  return (
    produtos != null && produtos.length > 0 ? (
      <>
        <tr className='table-light'>
          <th colSpan={1}>Produto Id</th>
          <th colSpan={2}>Nome</th>
          <th colSpan={2}>Código de Barras</th>
          <th colSpan={2}>Fabricante</th>
          <th colSpan={2}>Preço Unitário</th>
          <th colSpan={1}>Quantidade</th>
          <th colSpan={2}>Preço Total</th>
        </tr>
        {
          produtos.map((p, i) => {
            return (
              <tr className='table-light'>
                <th colSpan={1}>{p.produtoId}</th>
                <td colSpan={2}>{p.nome}</td>
                <td colSpan={2}>{p.codigoDeBarras}</td>
                <td colSpan={2}>{p.fabricante}</td>
                <td colSpan={2}>{p.precoAtual}</td>
                <td colSpan={1}>{p.quantidade}</td>
                <td colSpan={2}>{p.precoTotal}</td>
              </tr>
            );
          })
        }
      </>
    )
      :
      <tr>
        <td colSpan={12} className='text-center'> - Sem Produtos na Venda - </td>
      </tr>

  );
}

/*return (
            produtos.map((p, i) => {

              return (
                <tr className='p-3'>
                  <td colSpan={3}>1</td>
                  <td colSpan={3}>1</td>
                  <td colSpan={3}>1</td>
                  <td colSpan={3}>1</td>
                </tr>
              )
            })
          ); */