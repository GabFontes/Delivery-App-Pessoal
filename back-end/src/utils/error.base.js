module.exports = (msg, code = 400) => {
  const err = new Error(msg);
  err.code = code;
  return err;
};
