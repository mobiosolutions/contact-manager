const response = (req, res, status, payload) => {
  const response = {
    status: status,
    data: payload
  };
  res.send(response);
};

module.exports = response;
