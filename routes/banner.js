import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Banner route works!');
});

router.post('/', (req, res) => {
    res.send('Banner route works!');
});

router.put('/:id', (req, res) => {
    res.send('Banner route works!');
});

router.delete('/:id', (req, res) => {
    res.send('Banner route works!');
});

export default router;
