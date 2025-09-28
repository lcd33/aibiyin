const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848a',
  },
  textColor: {
    primary: '#484848',
    secondary: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease-in-out;
      &:hover {
        box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.18);
      }`
  }
}

export default theme