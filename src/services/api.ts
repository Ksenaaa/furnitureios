const baseURL = process.env.REACT_APP_DEV_MODE ?? '';

const headers = new Headers();

function setContentType() {
    return headers.set('Content-Type', 'application/json');
}

const getFullPath = (path: string): string => {
    return `${baseURL}${path}`;
};


export async function get(path: string, signal: AbortSignal) {
    setContentType();

    return await http(new Request(getFullPath(path), { method: 'get', headers, signal }));
}

export async function del(path: string, signal: AbortSignal) {
    setContentType();

    return await http(new Request(getFullPath(path), { method: 'delete', headers, signal }));
}

// eslint-disable-next-line
export async function post(path: string, body: any, signal: AbortSignal) {
    setContentType();

    return await http(new Request(getFullPath(path), {
        method: 'post',
        headers,
        body: JSON.stringify(body),
        signal
    }));
}

// eslint-disable-next-line
export async function put(path: string, body: any, signal: AbortSignal) {
    setContentType();

    return await http(new Request(getFullPath(path), {
        method: 'put',
        headers,
        body: JSON.stringify(body),
        signal
    }));
}

async function http(request: RequestInfo) {
    try {
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        const { name, message } = error as Error;

        if (name === 'AbortError') {
            console.log('request abort:', message);
        } else {
            throw error;
        }
    }
}
