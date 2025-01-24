import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BlinkingArrow.css';

const BlinkingArrow = ({ onClick, color = '#80619e', size = '6rem' }) => {
  return (
    <div className="blinking-arrow-container">
      <button
        className="blinking-arrow"
        onClick={onClick}
        style={{ fontSize: size, color }}
      >
        <ExpandMoreIcon />
      </button>
    </div>
  );
};

// Prop validation
BlinkingArrow.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick is a function and required
  color: PropTypes.string, // Optional string for color
  size: PropTypes.string, // Optional string for size
};

// Default props
BlinkingArrow.defaultProps = {
  color: '#80619e',
  size: '6rem',
};

export default BlinkingArrow;
