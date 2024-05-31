class AuthController {
  static login = (req, res) => {
    res.send('Login page dari controller');
  };
  static register = (req, res) => {
    res.send('Register page dari controller');
  }
}

module.exports = AuthController;