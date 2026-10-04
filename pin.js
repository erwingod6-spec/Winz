// ===============================
// PIN YANG BENER
// Ganti sesuai selera
// ===============================
const CORRECT_PIN = '4821';

// ===============================
// HANDLE FORM SUBMIT
// ===============================
document.getElementById('pinForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pin = document.getElementById('pin').value.trim();
    const result = document.getElementById('result');

    // Validasi format
    if (!/^[0-9]{4}$/.test(pin)) {
        result.innerHTML = '<div class="result error">PIN harus 4 digit angka</div>';
        return;
    }

    result.innerHTML = '<div class="result">Loading...</div>';

    setTimeout(() => {
        if (pin === CORRECT_PIN) {
            result.innerHTML = '<div class="result success">PIN_SUCCESS - PIN benar: ' + pin + '</div>';
        } else {
            result.innerHTML = '<div class="result error">PIN_WRONG</div>';
        }
    }, 100);
});