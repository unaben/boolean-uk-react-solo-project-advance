const generateRandomId = () => {
  return `_${Math.random().toString(36).substr(2, 9).toString()}`;
};

export default generateRandomId;
