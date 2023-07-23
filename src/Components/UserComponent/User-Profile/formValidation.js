// Regular expressions for form field validation
const nameRegex = /^[a-zA-Z]+$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;// At least 8 characters, one letter, and one number and one special character

// Function to validate the form fields
export const validateFormFields = (firstName, lastName, address, mobileNumber, email, password) => {
  const alerts = {};

  if (!nameRegex.test(firstName)) {
    alerts.firstNameAlert = 'First name is not valid';
  }
  if (!nameRegex.test(lastName)) {
    alerts.lastNameAlert = 'Last name is not valid';
  }
  if (!addressRegex.test(address)) {
    alerts.addressAlert = 'Address is not valid';
  }
  if (!phoneRegex.test(mobileNumber)) {
    alerts.mobileNumberAlert = 'Mobile number is not valid';
  }
  if (!emailRegex.test(email)) {
    alerts.emailAlert = 'Email is not valid';
  }
  if (!passwordRegex.test(password)) {
    alerts.passwordAlert = 'Password must be at least 8 characters and contain at least one letter and one number';
  }

  return alerts;
};
