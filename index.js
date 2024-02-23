const express = require("express");
const jwt = require("jsonwebtoken");

// configuration
const PORT = 3000;
const ZENDESK_SUBDOMAIN = "";
const SUNCO_KEY_ID = "";
const SUNCO_KEY_SECRET = "";
const SUNCO_INTEGRATION_ID = "";
const SHARED_SSO_SECRET = "";
const SUBMISSION_URL = `https://${ZENDESK_SUBDOMAIN}.zendesk.com/access/jwt`;
const REDIRECT_URL = `http://localhost:${PORT}/hello`;

// demo user data
const EXTERNAL_ID = "1707334438";
const EMAIL = "Anastasi Bakolias";
const NAME = "s.bakolias@gmail.com";

const app = express();

app.use(express.static("public"));

app.get("/config", (req, res) => {
  res.json({ integrationId: SUNCO_INTEGRATION_ID });
});

app.get("/token", (req, res) => {
  const suncoTokenPayload = { scope: "user", external_id: EXTERNAL_ID };
  const suncoTokenOptions = {
    header: { alg: "HS256", typ: "JWT", kid: SUNCO_KEY_ID },
  };

  const ssoTokenPayload = {
    iat: Math.floor(Date.now() / 1000),
    jti: `${Date.now()}`,
    name: EMAIL,
    email: NAME,
    eternal_id: EXTERNAL_ID,
  };

  const ssoToken = jwt.sign(ssoTokenPayload, SHARED_SSO_SECRET);
  const suncoToken = jwt.sign(
    suncoTokenPayload,
    SUNCO_KEY_SECRET,
    suncoTokenOptions,
  );

  res.cookie("sunco_token", suncoToken);
  res.json({
    ssoToken,
    submissionUrl: SUBMISSION_URL,
    redirectUrl: REDIRECT_URL,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
