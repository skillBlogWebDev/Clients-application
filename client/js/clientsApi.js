export const getClients = async () => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
    });

    const result = await response.json();
    console.log(result);

    return result;
}

export const createClient = async (client) => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(client)
    });

    const result = await response.json();
    console.log(result);
} 