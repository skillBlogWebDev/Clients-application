export const getClients = async () => {
    try {
        const response = await fetch('https://vast-castle-97855.herokuapp.com/api/clients', {
            method: 'GET'
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const sendClientData = async (client, method, id = null) => {
    try {
        const response = await fetch(`https://vast-castle-97855.herokuapp.com/api/clients/${method === 'POST' ? '' : id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method,
            body: JSON.stringify(client)
        });

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
    }
} 

export const deleteClientItem = async (id) => {
    try {
        await fetch(`https://vast-castle-97855.herokuapp.com/api/clients/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

export const findClient = async (value) => {
    try {
        const response = await fetch(`https://vast-castle-97855.herokuapp.com/api/clients?search=${value}`, {
            method: 'GET'
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}