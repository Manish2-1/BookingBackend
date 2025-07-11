import express, { response } from 'express';
import Hotel from '../models/Hotel.js';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from '../controllers/hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);

//UPDATE

router.put('/:id', verifyAdmin, updatedHotel);
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

//GET
router.get('/find/:id', getHotel);
//GET ALL
router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:id', getHotelRooms)


export default router;