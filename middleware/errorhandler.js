const { contacts } = require("../constants");

let errorhandler = (err, req, res, next) => {
  const statuscode = res.statusCode ? res.statusCode : 500;
  switch (statuscode) {
    case contacts.validation_errors:
      res.json({
        message: "validation error",
        error: err.message,
        stacktrace: err.stack,
      });
      break;
    case contacts.serverError:
      res.json({
        message: "server Error",
        error: err.message,
        stacktrace: err.stack,
      });
      break;

    default:
      console.log("No error ,all goood!!");
      break;
  }
  //   res.json({ message: err.message, stacktrace: err.stack });
};

module.exports = errorhandler;
