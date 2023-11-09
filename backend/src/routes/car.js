import express from 'express';

import verify from '../middleware/verify.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.patch('/api/rentcar', verify, async (req, res) => {
    console.log('rentcar')
    // const { carId, pickupDate, dropOffDate, pickupTime, dropOffTime } = req.body;
    // const renterId = req.user._id;
    // console.log(carId, 'carId');

    // try {
    //     const car = await Car.findById(carId);
    //     if (!car) {
    //         return res.status(404).json({ message: 'Car not found' });
    //     }

    //     const existingRentals = await Rental.find({
    //         car: carId,
    //         $or: [
    //             {
    //                 pickupDate: { $lte: pickupDate },
    //                 dropOffDate: { $gte: pickupDate },
    //             },
    //             {
    //                 pickupDate: { $lte: dropOffDate },
    //                 dropOffDate: { $gte: dropOffDate },
    //             },
    //         ],
    //     });

    //     if (existingRentals.length > 0) {
    //         return res.status(400).json({ message: 'Car is already rented during the requested period' });
    //     }

    //     const newRental = new Rental({
    //         car: carId,
    //         renter: renterId,
    //         pickupDate,
    //         dropOffDate,
    //         pickupTime,
    //         dropOffTime,
    //     });

    //     await newRental.save();

    //     res.status(200).json({ message: 'Car rented successfully', rental: newRental });
    // } catch (error) {
    //     res.status(400).json({ message: 'Error renting car', error });
    //     console.log('Error renting car', error);
    // }
});

export default router;