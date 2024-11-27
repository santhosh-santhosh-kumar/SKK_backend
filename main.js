import express from 'express';
import banner from './routes/bannerVideos.route.js';
import connectDB from './database/db.js';
import bannerimages from "./routes/bannerImages.route.js";
import cors from "cors";
import bannerShorts from './routes/bannerShorts.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname,'Banner_Images')))
connectDB()

// Use the banner router
app.use('/banner', banner);
app.use('/bannerimages', bannerimages);
app.use('/bannershorts', bannerShorts);

app.get('/', (req, res) => {
    res.send('SKK Backend');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
