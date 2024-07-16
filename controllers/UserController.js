class UserController {
  static async login(req, res) {
    res.json({ access_token: "login" })
  }
}

module.exports = UserController
