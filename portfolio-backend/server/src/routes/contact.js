import { Router } from "express";
import { body, validationResult } from "express-validator";
import { createMessage, listMessages } from "../controllers/contactController.js";

const router = Router();

const contactValidators = [
  body("name").isString().trim().isLength({ min: 2, max: 80 }),
  body("email").isEmail().normalizeEmail(),
  body("message").isString().trim().isLength({ min: 2, max: 2000 }),
];

router.post("/contact", contactValidators, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.array() });
  }
  return createMessage(req, res, next);
});

// Simple protected listing endpoint
router.get("/messages", listMessages);

export default router;