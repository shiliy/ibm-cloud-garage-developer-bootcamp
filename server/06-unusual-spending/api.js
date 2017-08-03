const api = (userId, month) => {
  if (month === 8) return [{amount: 90, category: 'golf'},{amount: 490, category: 'dinner'}];
  return [{amount: 780, category: 'basketball'}, {amount: 290, category: 'bicycle'}];
};

export {api};
