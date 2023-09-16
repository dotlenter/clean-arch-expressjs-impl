const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");

const router = express.Router();

router.post("/login", validate(authValidation.login), authController.login);
router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);
router.post(
  "/refresh-tokens",
  validate(authValidation.refreshTokens),
  authController.refreshTokens
);
router.post(
  "/forgot-password",
  validate(authValidation.forgotPassword),
  authController.forgotPassword
);
router.get(
  "/request-email-verification",
  validate(authValidation.resendEmailVerification),
  authController.resendEmailVerification
);
router.post(
  "/verify-email",
  validate(authValidation.verifyEmail),
  authController.verifyEmail
);
router.post(
  "/reset-password",
  validate(authValidation.resetPassword),
  authController.resetPassword
);
router.get(
  "/validator/email",
  validate(authValidation.emailCheck),
  authController.email
);

module.exports = router;
