import { Router } from 'express';

const router = Router();


router.get('/', () => console.log('rota login / get'));
router.post('/', () => console.log('rota login / post'));

export default router;

// /register
// /
