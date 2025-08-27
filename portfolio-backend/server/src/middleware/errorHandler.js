export const notFound = (req, res, next) => {
  res.status(404).json({ ok: false, error: "Route not found" });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    error: err.message || "Internal Server Error"
  });
};