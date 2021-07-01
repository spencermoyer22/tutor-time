import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try{
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else
                return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        //get the user's token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        //saves the user's token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    logout() {
        //removes user's token & profile data from localStorage
        localStorage.removeItem('id_token');

        window.location.assign('/');
    }
}

export default new AuthService();
