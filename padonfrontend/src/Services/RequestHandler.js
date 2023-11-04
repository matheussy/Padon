//import React from 'react';

const URL = 'https://localhost:8080';
// Função para fazer uma solicitação POST para um endpoint específico
export const postApi = async (endpoint, data) => {
    try {
        const response = await fetch(URL + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
