const baseURL = process.env.REACT_APP_DEV_MODE ?? '';

const headers = new Headers();

function setContentType() {
    return headers.set('Content-Type', 'application/json');
}

const getFullPath = (path: string): string => {
    return `${baseURL}${path}`;
};


export async function get(path: string) {
    setContentType();

    return await http(new Request(getFullPath(path), { method: 'get', headers: headers }));
}

export async function del(path: string) {
    setContentType();

    return await http(new Request(getFullPath(path), { method: 'delete', headers: headers }));
}

// eslint-disable-next-line
export async function post(path: string, body: any) {
    setContentType();

    return await http(new Request(getFullPath(path), {
        method: 'post',
        headers: headers,
        body: JSON.stringify(body)
    }));
}

// eslint-disable-next-line
export async function put(path: string, body: any) {
    setContentType();

    return await http(new Request(getFullPath(path), {
        method: 'put',
        headers: headers,
        body: JSON.stringify(body)
    }));
}

async function http(request: RequestInfo) {
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}
