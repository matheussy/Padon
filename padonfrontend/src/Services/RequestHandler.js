const URL = 'http://localhost:8080';


export async function getApi(endpoint) {
    var token = "";
    if (sessionStorage.getItem("token") != null) {
        token = sessionStorage.getItem("token");
    }

    return fetch(URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': token,
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na request get com token');
            }
            return response.json();
        })
        .catch(error => {
            window.location.href = "/Login";
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
            throw new Error(`Erro no REQUEST GET com Token, Resposta: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        window.location.href = "/Login";
        throw new Error(`Erro no REQUEST: ${error.message}`);
    }
};

// Requests sem Token de Validação
export const postApiNoToken = async (endpoint, data) => {
    try {
        const response = await fetch(URL + endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Erro no REQUEST POST sem Token, Resposta: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        window.location.href = "/Login";
        throw new Error(`Erro no REQUEST: ${error.message}`);
    }
};

export async function getApiNoToken(endpoint) {
    return fetch(URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro no Request GET sem Token');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
            window.location.href = "/Login";
        });
}



