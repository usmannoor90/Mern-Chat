const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      {
        headers: { "private-key": "e1cf99e1-361c-4be8-b4ef-09dfd847b214" },
      }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    return res.status(e.response.status).json(e.response.data);
  }
});

const port = process.env.PORT || 3300;
app.listen(port, async () => {
  console.log(`listeing to port ${port}`);
});
