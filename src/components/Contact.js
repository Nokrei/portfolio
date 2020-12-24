import React, { useState } from 'react';
import { validEmail } from './utils';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Contact = () => {
  let [contactState, setContactState] = useState({
    errors: [],
    success: false,
  });

  let nameField;
  let emailField;
  let messageField;

  const handleClick = (e) => {
    e.preventDefault();
    let errorMessages = [];
    if (nameField.value.length === 0) {
      errorMessages.push('Please enter your name');
    }
    if (!validEmail(emailField.value)) {
      errorMessages.push('Please enter a valid email');
    }
    if (messageField.value.length === 0) {
      errorMessages.push('Please enter a message');
    }
    if (errorMessages.length > 0) {
      setContactState({
        ...contactState,
        errors: errorMessages,
      });
    } else {
      setContactState({
        ...contactState,
        errors: [],
        success: true
      });
    }
    let templateParams = {
      name: nameField.value,
      email: emailField.value,
      message: messageField.value,
    };

    if (errorMessages.length === 0) {
      emailjs
        .send(
          'service_689hzdi',
          'template_6d6oh8s',
          templateParams,
          'user_kilSXZW50vxzo281c7KKu',
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
    console.log(contactState);
  };

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'var(--accentOrange)',
      },
      '& label': {
        color: 'white',
      },
      '& input': {
        color: 'white',
      },

      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          transitionDuration: '250ms',
          width: '20em',
        },
        '&:hover fieldset': {
          borderColor: 'var(--accentOrange)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'var(--accentOrange)',
        },
      },
    },
  })(TextField);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiInputBase-root.Mui-disabled': {
        color: 'white',
      },
      '& .MuiFormLabel-root.Mui-disabled': {
        color: 'white',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div className="contact" id="contact"> 
      <h1>Contact me</h1>
      <div className={classes.root} noValidate >
        <CssTextField
          className={classes.margin}
          name='name'
          type="name"
          label="Name"
          variant="outlined"
          id="custom-css-outlined-input"
          inputRef={(comp) => (nameField = comp)}
        />
        <CssTextField
          className={classes.margin}
          label="Email"
          variant="outlined"
          id="custom-css-outlined-input"
          name='email'
          type="email"
          inputRef={(comp) => (emailField = comp)}
        />

        <CssTextField
          className={classes.margin}
          label="Message"
          variant="outlined"
          id="custom-css-outlined-input"
          multiline
          rows="10"
          name="message"
          type="message"
          inputRef={(comp) => (messageField = comp)}
        />
        {contactState.errors.length > 0 && (
          <div>
            <div
              style={{
                textAlign: 'left',
                marginLeft: '1em',
              }}
            >
              {contactState.errors.map((error) => (
                <p>{error}</p>
              ))}
            </div>
          </div>
        )}
        {contactState.success === true && (
          <div>
            <div
              style={{
                textAlign: 'left',
                marginLeft: '1em',
              }}
            >
              Your message has been sent.
            </div>
          </div>
        )}
        <button className="contact__button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
