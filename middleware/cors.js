module.exports = function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");

  if (req.method === 'OPTIONS') {
    res.send();
  }
  else {
    next();
  }
};
