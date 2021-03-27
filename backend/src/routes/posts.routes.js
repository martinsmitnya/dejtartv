import express from 'express';
const cors = require('cors');
import { postsController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', postsController.get);

export default router;