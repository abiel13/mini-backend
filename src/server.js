const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority';

const startServer = async () => {
  try {
    await connectDB(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

