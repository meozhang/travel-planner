import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// MCP endpoint example
app.get('/mcp/ping', (req, res) => {
  res.json({ status: 'ok', message: 'Figma MCP server is running.' });
});

// TODO: Add Figma integration and MCP endpoints here

app.listen(port, () => {
  console.log(`Figma MCP server listening at http://localhost:${port}`);
});
