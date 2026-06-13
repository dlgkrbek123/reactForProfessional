const express = require("express");
const path = require("path");

const React = require("react");
const ReactDOMServer = require("react-dom/server");

const App = require("./src/App");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);

  res.send(`
      <!DOCTYPE html>
      <html>
        <body>
          <div>${html}</div>
        </body>
      </html>
  `);
});

app.listen(3000);
