//import React from 'react';

const URL = 'http://localhost:8080';
// Função para fazer uma solicitação POST para um endpoint específico 'Content-Type': 'application/json',

export async function getApi(endpoint) {
    return fetch(URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': sessionStorage.getItem("token")
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
}

export const postApi = async (endpoint, data) => {
    try {
        const response = await fetch(URL + endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','token': sessionStorage.getItem("token") },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error(`Erro no REQUEST, Resposta: ${response.status}`);
        }
        
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw new Error(`Erro no REQUEST: ${error.message}`);
    }
};



