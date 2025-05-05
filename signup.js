function submitForm() {

    const username = document.querySelector('input[placeholder="username"]').value.trim();
    const surname = document.querySelector('input[placeholder="surname"]').value.trim();
    const email = document.querySelector('input[placeholder="email"]').value.trim();
    const phone = document.querySelector('input[placeholder="cellphone number"]').value.trim();
    const password = document.querySelector('input[placeholder=" password"]').value.trim();
    const confirmPassword = document.querySelector('input[placeholder=" confirm password"]').value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (!username || !surname || !email|| !phone || !password|| !confirmPassword ){
        alert('fill in the missing form');
        return;
    }
    
    alert('seccesfully logged in');
    window.location.href = 'login.html'
}
