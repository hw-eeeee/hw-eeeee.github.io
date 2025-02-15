import { useState } from 'react';
import './ContactForm.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  // Email validation function using RegEx
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email format check
  };

  // Handle email input change
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail)); // Validate as user types
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      setWarningMessage('Error: Invalid email format');
      return;
    }

    const formData = new FormData(event.target);

    formData.append('access_key', '27e7c643-57b0-47e7-98e9-f702cd2ed200');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      setEmail('');
      setSuccessMessage(
        'Your message has been sent successfully! I will get back to you ASAP!',
      ); // Set success message
    }
  };

  return (
    <section className="contact-form">
      <Stack sx={{ width: '85%', mb: 2 }}>
        {successMessage && (
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setSuccessMessage('')}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {successMessage}
          </Alert>
        )}
      </Stack>
      <Stack sx={{ width: '85%', mb: 2 }}>
        {warningMessage && (
          <Alert
            severity="error" // Changed from "warning" to "error"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => setWarningMessage('')}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {warningMessage}
          </Alert>
        )}
      </Stack>
      <form className="form-box" onSubmit={onSubmit}>
        <TextField
          required
          className="fields"
          id="req-field"
          label="Full Name"
          name="name"
        />

        <TextField
          required
          className="fields"
          id="req-field"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={!isEmailValid}
          helperText={!isEmailValid ? 'Please enter a valid email address' : ''}
          name="email"
        />
        <TextField className="fields" label="Subject" name="subject" />
        <TextField
          required
          className="fields"
          id="req-field"
          label="Message"
          multiline
          rows={8}
          name="message"
        />
        <Button
          variant="outlined"
          type="submit"
          className="form-button"
          sx={{
            bgcolor: '#466046',
            color: 'white',
            boxShadow: 1,
            borderRadius: 2,
            p: 1.2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'background-color 0.3s ease-in-out',
            border: 'none',
            '&:hover': {
              bgcolor: '#b5c4b6', // Lighter green on hover
              color: 'black',
            },
          }}
        >
          {' '}
          <SendIcon fontSize="small" /> Send Message
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
