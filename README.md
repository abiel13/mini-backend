## Quick Portfolio Backend

A minimal Express server that exposes read-only endpoints for skills and projects stored in MongoDB.

### Setup

1. Create a `.env` file in the project root and set `MONGO_URI` to your MongoDB connection string. Optionally override `PORT`.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The API listens on `http://localhost:4000` by default.

### Endpoints

- `GET /health` – simple health check.
- `GET /api/skills` – list all skills. Supports `search` query param to match skill names.
- `GET /api/skills/:id` – fetch a single skill by MongoDB id.
- `GET /api/projects` – list all projects. Supports `search` (matches name/description) and `tool` query params.
- `GET /api/projects/:id` – fetch a single project by MongoDB id.

All endpoints return JSON.

