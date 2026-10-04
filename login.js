// ===============================
// DATABASE USER (simulasi)
// Di web nyata, ini ada di server + database
// ===============================
const USERS = {
    'admin': 'password123',
    'toya': 'rahasia456',
    'winz': 'qwerty789',
    'user': 'user123',
    'root': 'toor'
};

// ===============================
// HANDLE FORM SUBMIT
// ===============================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    result.innerHTML = '<div class="result">Loading...</div>';

    // Simulasi delay server (biar keliatan seperti request network)
    setTimeout(() => {
        if (USERS[username] && USERS[username] === password) {
            result.innerHTML = '<div class="result success">LOGIN_SUCCESS - Welcome, ' + username + '</div>';
        } else {
            result.innerHTML = '<div class="result error">INVALID_CREDENTIALS</div>';
        }
    }, 100);
});