
const login = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    // To simulate successful login
    if (email === 'akezasaloi@gmail.com' && password === '1pas2ss3word!') {
        return { success: true, message: 'Login successful.' };
    } else {
        return { success: false, message: 'Invalid credentials.' };
    }
};
const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    // To simulate successful signup
    return { success: true, message: 'Signup successful.' };
};
module.exports = { login, signup };