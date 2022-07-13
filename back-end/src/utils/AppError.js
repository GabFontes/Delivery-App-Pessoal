module.exports = class AppError {
  constructor(message, code = 400) {
    this.message = message;
    this.code = code;
  }
}
