//import React from 'react';

const URL = 'http://localhost:8080';
// Função para fazer uma solicitação POST para um endpoint específico 'Content-Type': 'application/json',

/*export async function postApi(endpoint,data) {
    return fetch(URL + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação');
            }
            console.log("API2 ->" + JSON.stringify(response));
            return response.json();
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
}*/

export async function getApi(endpoint) {
    return fetch(URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
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
            headers: { 'Content-Type': 'application/json' },
            body: data,
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


/*export const getApi = async (endpoint) => {
    try {
        await fetch(URL + endpoint, {
            method: 'GET'
        })
            .then(response => response.json()) // Analisa a resposta como JSON
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => {
                console.error('Erro ao fazer a solicitação:', error);
            });

        /*if (!response.ok) {
            throw new Error(`Erro no REQUEST, Resposta: ${response.status}`);
        }

        const responseData = await response.json();
        alert("ResponseData ->"+JSON.stringify(responseData));
        return responseData;
    } catch (error) {
        throw new Error(`Erro no REQUEST: ${error.message}`);
    }
};*/



