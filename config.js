module.exports.READ_MAIL_CONFIG = {
  imap: {
    user: "codexprt4@gmail.com",
    password: "qhlpiihkhjonvgoo",
    host: "imap.gmail.com",
    port: 993,
    authTimeout: 10000,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
};

module.exports.SEND_MAIL_CONFIG = {
  service: "gmail",
  auth: {
    user: "codexprt4@gmail.com",
    pass: "qhlpiihkhjonvgoo",
  },
};
