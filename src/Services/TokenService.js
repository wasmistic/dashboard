const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const AUTH_USER = 'Auth_User'
const OTP = 'OTP'
const APP_SECRET = 'app_secret'
const COMPANY_ID = 'companyid'
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },
    getAppSecret() {
        return localStorage.getItem(APP_SECRET)
    },
    getcompanyid() {
        return localStorage.getItem(COMPANY_ID)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    saveAppSecret(appSecret) {
        localStorage.removeItem(APP_SECRET);
        localStorage.setItem(APP_SECRET, appSecret);
    },
    saveCompanyId(companyid) {
        localStorage.removeItem(COMPANY_ID);
        localStorage.setItem(COMPANY_ID, companyid);
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.clear();
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    },
    verifyUser(otp) {
        localStorage.setItem(OTP, otp)
    },
    getVerifyCode() {
        return localStorage.getItem(OTP);
    },
    saveUser(data) {
        localStorage.setItem(AUTH_USER, data);
    },
    getUser() {
        return localStorage.getItem(AUTH_USER)

    },
    removeUser() {
        localStorage.removeItem(AUTH_USER)
    }
}

export {TokenService}
