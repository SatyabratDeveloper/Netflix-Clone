const extractUserInfo = (user) => {
  const { uid, displayName, email, phoneNumber, photoURL } = user;
  return { uid, displayName, email, phoneNumber, photoURL };
};

export { extractUserInfo };
