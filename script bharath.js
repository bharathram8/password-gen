//CryptoJS library
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js";
document.head.appendChild(script);



const lenValue = document.getElementById('lennum');

const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':?></.,*-+`~";

//Password Generator
function createpwd() {
    let password = "";
    const length = parseInt(lennum.value);

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("pwd").value = password;
}

function encryptaesPassword(){
        const password = document.getElementById('pwd').value;
        const key = CryptoJS.enc.Utf8.parse('B3HAthsxERnivAsqnb1Vi\\');
        const encrypted = CryptoJS.AES.encrypt(password, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        document.getElementById('encryptedaesPassword').value = encrypted.toString();
}

function encryptdesPassword(){
        const password = document.getElementById('pwd').value;
        const key = CryptoJS.enc.Utf8.parse('B3HAthsxERnivAsqnb1Vi\\');
        const encrypted = CryptoJS.DES.encrypt(password, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        document.getElementById('encrypteddesPassword').value = encrypted.toString();
}

function encryptrabbitPassword(){
    try {
        const password = document.getElementById('pwd').value;
            const key = CryptoJS.enc.Utf8.parse('B3HAthsxERnivAsqnb1Vi\\');
            const encrypted = CryptoJS.Rabbit.encrypt(password, key);
            document.getElementById('encryptedrabbitPassword').value = encrypted.toString();
        } catch (e) {
            console.error("Rabbit encryption failed: ", e);
            document.getElementById('encryptedrabbitPassword').value = "Rabbit encryption not available";
        }
    }
function encryptcaesarPassword(){
        const password = document.getElementById('pwd').value;
        const shift = 3; 
        // You can change this shift value as needed
        const encrypted = caesarCipher(password, shift);
        document.getElementById('encryptedcaesarPassword').value = encrypted;

}
//Caesar Cipher Function
function caesarCipher(str, shift) {
    return str.replace(/[A-Za-z]/g, function (c) {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65); // Uppercase letters
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97); // Lowercase letters
        }
        return c; // Non-alphabetic characters remain unchanged
    });
}

