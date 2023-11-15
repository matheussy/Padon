//import React from 'react';

const URL = 'http://localhost:8080';
// Função para fazer uma solicitação POST para um endpoint específico 'Content-Type': 'application/json',

export async function getApi(endpoint) {
    var token = "";
    if (sessionStorage.getItem("token") != null) {
        token = sessionStorage.getItem("token");
    }
    console.log("Teste ->"+token);
    return fetch(URL + endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          mode: 'no-cors',
          'token': token,
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
        var token = "";
        if (sessionStorage.getItem("token") != null) {
            token = sessionStorage.getItem("token");
        }

        const response = await fetch(URL + endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token, },
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



