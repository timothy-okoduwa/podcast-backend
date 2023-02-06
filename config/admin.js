module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("7isluTMFBc7H6gb1m89hsQ=="),
  },
});
