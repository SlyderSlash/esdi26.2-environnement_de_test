const callAPI = async (url) => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(data.message);
    }
    const data = await response.json();
    return data;
}

async function logIn (username, password){
    const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    });
    if(!response.ok) {
        throw new Error(data.message);
    }
    const data = await response.json();
    if(!data.token) {
        throw new Error('No token found');
    }
    localStorage.setItem('token', data.token);
    return data;
}

module.exports = { callAPI, logIn }