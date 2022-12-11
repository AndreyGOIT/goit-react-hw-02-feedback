const buttonStyles = {
  padding: '4px 7px',
  borderRadius: 4,
  backgroundColor: 'white',
  color: 'black',
  textTransform: 'capitalize',
};

export const Button = ({ children }) => {
  return <button style={buttonStyles}>{children}</button>;
};
