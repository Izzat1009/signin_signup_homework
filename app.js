// Foydalanuvchilarni saqlash uchun global massiv
const users = [];

// Ro'yxatdan o'tish funksiyasi
function signUp() {
    try {
        // Input qiymatlarini olish
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validatsiya
        if (name.length < 1) {
            throw new Error("Ism uzunligi 1 belgidan kam bo'lishi mumkin emas!");
        }
        if (username.length < 4) {
            throw new Error("Username uzunligi 4 belgidan kam bo'lishi mumkin emas!");
        }
        if (password.length < 6) {
            throw new Error("Password uzunligi 6 belgidan kam bo'lishi mumkin emas!");
        }

        // Foydalanuvchini massivga qo'shish
        const user = { name, username, password };
        users.push(user);

        // Muvaffaqiyatli xabar
        alert("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi!");

        // Input maydonlarini tozalash
        document.getElementById("name").value = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

    } catch (error) {
        // Xatoni chiqarish
        alert("Xato: " + error.message);
    }
}

// Tizimga kirish funksiyasi
function signIn() {
    try {
        // Input qiymatlarini olish
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Ro'yxatdan o'tgan foydalanuvchilarni tekshirish
        if (users.length === 0) {
            throw new Error("Hech qanday foydalanuvchi ro'yxatdan o'tmagan!");
        }

        const signInUser = users.find(u => u.username === username && u.password === password);

        if (signInUser) {
            alert("Tizimga muvaffaqiyatli kirdingiz!");
        } else {
            throw new Error("Login yoki parol noto'g'ri!");
        }

    } catch (error) {
        // Xatoni chiqarish
        alert("Xato: " + error.message);
    }
}