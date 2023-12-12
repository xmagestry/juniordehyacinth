
  document.getElementById('showRegisterForm').addEventListener('click', function() {
    showRegistrationForm();
  });
  
  document.getElementById('showLoginForm').addEventListener('click', function() {
    showLoginForm();
  });
  
  function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('showRegisterForm').style.display = 'none';
    document.getElementById('showLoginForm').style.display = 'inline-block';
  }
  
  function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('showLoginForm').style.display = 'none';
    document.getElementById('showRegisterForm').style.display = 'inline-block';
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    alert(`Registered successfully! Username: ${newUsername}, Email: ${email}`);
    
    showLoginForm();
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let emailLogin = document.getElementById('emailLogin').value;
    let password = document.getElementById('password').value;
    
    if (emailLogin === 'hya@gmail.com' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } 
    else {
      alert('Invalid username or password!');
    }
  });