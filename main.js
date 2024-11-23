import express from 'express';
import banner from './routes/bannerVideos.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Use the banner router
app.use('/banner', banner);

app.get('/', (req, res) => {
    res.send('Test route works!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
