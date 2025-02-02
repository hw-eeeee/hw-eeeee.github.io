import PropTypes from 'prop-types';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>This is the Contact Me section of the page.</p>
    </div>
  );
};

Contact.propTypes = {
  onArrowClick: PropTypes.func.isRequired,
};

export default Contact;
