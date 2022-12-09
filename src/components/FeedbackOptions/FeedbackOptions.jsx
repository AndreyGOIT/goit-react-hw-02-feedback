// import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options }) => {
  return (
    <div>
      {options.map(key => (
        <Button
          key={key}
          name={key}
          type="button"
          onClick={() => {
            console.log('c');
          }}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
