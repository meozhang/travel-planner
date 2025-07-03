# Figma MCP Server

This is a Node.js + TypeScript server implementing the Model Context Protocol (MCP) for Figma integration.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server in development mode:
   ```sh
   npm run dev
   ```
   The server will run at http://localhost:4000

3. Build for production:
   ```sh
   npm run build
   npm start
   ```

## Endpoints
- `GET /mcp/ping` — Health check endpoint.

## Next Steps
- Add Figma API integration and MCP endpoints as needed.
- See https://modelcontextprotocol.io/llms-full.txt for more info and examples.
