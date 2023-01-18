/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const { validationResult } = require("express-validator");
const argon2 = require("argon2");
const nodemailer = require("nodemailer");
const userModel = require("../models/userModel");
const { jwtSign } = require("../middlewares/jwt");

const userController = {
  getAllUsers: (req, res, next) => {
    if (req.roleId === 1) {
      userModel
        .findAll()
        .then((users) => res.status(200).send(users))
        .catch((err) => next(err));
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  },
  getUserById: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => next(err));
  },

  createUser: async (req, res, next) => {
    const errors = validationResult(req);
    const { role_id, firstname, lastname, job_id, city, email, password } =
      req.body;
    const hashedPassword = await argon2.hash(password);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      userModel
        .createOne({
          role_id,
          firstname,
          lastname,
          job_id,
          city,
          email,
          password: hashedPassword,
        })
        .then(([response]) => {
          console.warn(response);
          return res.status(201).send({
            message: "User created successfully",
            email,
            firstname,
            lastname,
          });
        });
    } catch (err) {
      return next(err);
    }
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    userModel
      .findByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ message: "Invalid email or password" });
        } else {
          const {
            id,
            role_id,
            email: userEmail,
            firstname,
            lastname,
            password: hashedPassword,
          } = user;

          if (await argon2.verify(hashedPassword, password)) {
            const token = jwtSign(
              { id, userEmail, firstname, lastname, role_id },
              { expiresIn: "1h" }
            );
            res
              .cookie("acces_token", token, { httpOnly: true, secure: true })
              .status(200)
              .send({
                message: "User logged in successfully",
                id,
                email,
                firstname,
                lastname,
                role_id,
              });
          } else {
            res.status(404).send({ message: "Invalid email or password" });
          }
        }
      })
      .catch((err) => next(err));
  },

  deleteUser: (req, res, next) => {
    const { id } = req.params;
    userModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`user ${id} not found`);
        }
        return res.status(200).send(`user ${id} deleted`);
      })
      .catch((err) => next(err));
  },
  /* eslint-disable no-unused-vars */
  resetPassword: (req, res, next) => {
    const { email } = req.body;
    userModel.findByEmail(email).then(([user]) => {
      if (!user) {
        res.status(404).send("User not found");
      }
      const token = jwtSign({ id: user.id, email }, { expiresIn: "15m" });

      const newData = {
        reset_token: token,
      };

      nodemailer.createTestAccount((err, account) => {
        if (err) {
          console.error(`Failed to create a testing account. ${err.message}`);
          return process.exit(1);
        }

        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        const message = {
          from: "olga_yasn@hotmail.com",
          to: email,
          subject: "Your password reset link",
          text: "Hello to myself!",
          html: `<p>Hello! Did you forget your password ? Please follow the link below to reset your password</p> <a href="${process.env.FRONTEND_URL}/resetPassword/${token}" target="_blank">Reset password</a>`,
        };

        userModel.updateOne(newData, user.id).then((result) => {
          if (result.affectedRows === 0) {
            return res.status(404).send("Error uploading reset link");
          }

          transporter.sendMail(message, (error, info) => {
            if (error) {
              console.warn(`Error occurred. ${err.message}`);
              return process.exit(1);
            }

            console.warn("Message sent: %s", info.messageId);
            console.warn("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            return res.status(200).send({
              message: "email sent successfully please follow instructions",
              preview: nodemailer.getTestMessageUrl(info),
            });
          });
        });
      });
    });
  },
};

module.exports = userController;
