import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getRoom, getRooms, updatedRoom, updatedRoomAvailability } from '../controllers/room.js';

const router = express.Router();

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);

//UPDATE
router.put('/:id', verifyAdmin, updatedRoom);
router.put('/availability/:id', updatedRoomAvailability);
//DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//GET
router.get('/:id', getRoom);
//GET ALL
router.get('/', getRooms)

export default router;