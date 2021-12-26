import http from '@/netClient/config';

export async function doRegistration(login, password) {
    try {
        const response = await http.post('/auth/registration', {
            login,
            password
        });
        return response.data;
    } catch (error) {
        console.error({error})
        throw error;
    }
}

export async function doLogin(login, password) {
    try {
        const response = await http.post('/auth/login', {
            login,
            password
        });
        const {accessToken} = response.data;
        localStorage.accessToken = accessToken;
        return accessToken;
    } catch (error) {
        console.error({error})
        throw error;
    }
}

export async function doLogout() {
    try {
        const response = await http.post('/users/logout', {},);
        //localStorage.clear();
        localStorage.removeItem('x-access-token')
        return response.data;
    } catch (error) {
        console.error({error})
        throw error;

    }
}