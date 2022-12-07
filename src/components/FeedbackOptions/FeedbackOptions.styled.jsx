const buttonStyles = {
  padding: '5px 5px',
  borderRadius: 4,
  backgroundColor: 'gray',
  color: 'black',
};

export const Button = ({ children }) => {
  return <button style={buttonStyles}>{children}</button>;
};
