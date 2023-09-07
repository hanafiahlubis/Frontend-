
async function send(endpoint, method, body, header = "application/json") {
    const response = await fetch(`https://techtest.youapp.ai/api${endpoint}`, {
        method,
        headers: {
            // 'accept': ' */*',
            "Content-Type": header,
        },
        // mode: "no-cors",
        body: {
            "email": "ali@gmail.com",
            "username": "ali hanafiah",
            "password": "123456789"
        },
    });
    const data = await (method === "GET" ? response.json() : response.text());
    return data;
}

export const api = {
    get: (endpoint) => send(endpoint, "GET"),
    post: (endpoint, body) => send(endpoint, "POST", body),
    put: (endpoint, body) => send(endpoint, "PUT", body),
    delete: (endpoint, body) => send(endpoint, "DELETE", body),
    post2: (endpoint, body, header) => send(endpoint, "POST", body, header),
};

