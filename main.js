import express from 'express';
import banner from './routes/bannerVideos.route.js';
import connectDB from './database/db.js';
import bannerimages from "./routes/bannerImages.route.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
connectDB()

// Use the banner router
app.use('/banner', banner);
app.use('/bannerImages', bannerimages);

app.get('/', (req, res) => {
    res.send('SKK Backend');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
