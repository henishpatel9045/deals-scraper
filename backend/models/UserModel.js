const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    encryptedPassword: {
      type: String,
      required: true,
    },
    salt: String,
    city: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { strict: false }
);

UserSchema.virtual("password").set((password) => {
  this._password = password;
  this.salt = this.makeSalt();
  this.encryptedPassword = this.encryptPassword(password);
});

UserSchema.methods = {
  makeSale: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
  encryptPassword: function (password) {
    if (!password) return "";
    return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
  },
  authenticate: function (password) {
    return this.encryptedPassword === this.encryptPassword(password);
  },
};

module.exports = mongoose.model("User", UserSchema);
