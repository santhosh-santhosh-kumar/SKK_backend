import express from 'express';
import banner from './routes/bannerVideos.route.js';
import connectDB from './database/db.js';

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())
connectDB()

// Use the banner router
app.use('/banner', banner);

app.get('/', (req, res) => {
    res.send('SKK Backend');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
