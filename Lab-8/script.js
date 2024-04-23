function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var isValid = true;

  // Check for empty fields
  if (firstName == "") {
    document.getElementById("firstNameError").innerHTML = "First name is required";
    isValid = false;
  } else {
    document.getElementById("firstNameError").innerHTML = "";
  }

  if (lastName == "") {
    document.getElementById("lastNameError").innerHTML = "Last name is required";
    isValid = false;
  } else {
    document.getElementById("lastNameError").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  // Check password match
  if (password != confirmPassword) {
    document.getElementById("passwordError").innerHTML = "Passwords do not match";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
  }

  return isValid;
}

