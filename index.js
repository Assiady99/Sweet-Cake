let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على قائمة الأعضاء
    const membersList = document.getElementById('members-list');

    // دالة لترتيب عناصر القائمة بشكل عشوائي
    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    // استدعاء ترتيب_عشوائي أوليًا
    Reorder_randomly();

});

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var number = document.forms["myForm"]["number"].value;
    var message = document.forms["myForm"]["message"].value;

    if (name == "" || email == "" || number == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    if (!validateNumber(number)) {
        alert("Invalid phone number format");
        return false;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNumber(number) {
    var re = /^\d{10}$/;
    return re.test(number);
}