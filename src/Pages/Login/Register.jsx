// // src/Register.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useUser } from './UserContext';

// const Register = () => {
//   const history = useHistory();
//   const { registerUser } = useUser();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profilePhoto: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === 'profilePhoto') {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add registration logic here, including API calls to handle the form data
//     console.log('Registration submitted:', formData);

//     // Simulate a successful registration by updating the user context
//     registerUser(formData);

//     // Navigate to the app page
//     history.push('/');
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         {/* ... (same as before) */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
