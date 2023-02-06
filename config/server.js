module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "vnkP/vUK9m4m19QZYychgg==",
      "jmiIoqtK0ooV6NVB79LScQ==",
      "W/psnyl8pFw2irpeXTciGQ==",
      "9RlKXJbZikhprAElczQP4w==",
    ],
  },
});
