module.exports = (app) => {
  app.use("/app-events", async (req, res) => {
    const { payload } = req.body;
    console.log(" ============ Shopping Service received event ==============");
    return res.status(200).json(payload);
  });
};
