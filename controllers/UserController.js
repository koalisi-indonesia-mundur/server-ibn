class UserController {
  static async login(req, res) {
    res.json({ access_token: "login" })
  }
  static async register(req, res) {
    res.json({ message: "User registerd successfully" })
  }
}

module.exports = UserController


