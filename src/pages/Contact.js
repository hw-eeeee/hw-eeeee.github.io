import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="left-contact">
        <h2 className="title-contact">Contact Me</h2>
        <h3 className="desc-contact">
          Feel free to contact me via Linkedin / Email or send me a message
          using the form on the right. Thank you :){' '}
        </h3>
        <h3 className="email-contact">
          <span style={{ fontWeight: 'bold' }}>Email: </span>{' '}
          <a
            style={{ textDecoration: 'none', color: '#466046' }}
            href="mailto:shan.pan@hotmail.com"
          >
            shan.pan@hotmail.com
          </a>{' '}
          <br />
        </h3>
        <div className="icon-contact">
          <a
            href="https://www.linkedin.com/in/hui-shan-pan-9119a8217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: '#466046', fontSize: 40 }} />
          </a>
          <a href="mailto:shan.pan@hotmail.com">
            <EmailIcon sx={{ color: '#466046', fontSize: 40 }} />
          </a>
        </div>
      </div>
      <div className="right-contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
