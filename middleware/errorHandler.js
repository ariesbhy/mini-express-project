const errorHandler = (error, req, res, next) => {
  try {
    return res
      .status(error.status || 500)
      .json({ error: error || "server went down" });
  } catch (error) {
    next(error);
  }
};
