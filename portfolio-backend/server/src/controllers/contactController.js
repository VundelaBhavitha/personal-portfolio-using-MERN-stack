import Message from "../models/Message.js";

export const createMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const doc = await Message.create({ name, email, message });
    return res.status(201).json({
      ok: true,
      message: "Message received. We'll get back to you soon.",
      data: { id: doc._id, createdAt: doc.createdAt }
    });
  } catch (err) {
    next(err);
  }
};

export const listMessages = async (req, res, next) => {
  try {
    const adminKey = req.header("x-admin-key");
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ ok: false, error: "Unauthorized" });
    }
    const docs = await Message.find().sort({ createdAt: -1 }).lean();
    return res.json({ ok: true, count: docs.length, data: docs });
  } catch (err) {
    next(err);
  }
};