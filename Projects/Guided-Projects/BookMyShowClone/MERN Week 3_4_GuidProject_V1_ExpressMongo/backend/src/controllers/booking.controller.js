const bookingService = require("../services/booking.service");

//create booking
exports.createBooking = async (req,res) => {
    try{
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            message:"Booking created successfully",
            data:booking,
        });

    }
    catch(error){
        next(error);
    }
};

//Get bookings 
exports.getMyBookings = async(req,res) => {
    try{
        const bookings = await bookingService.getUserBookings(req.user._id);
        res.status(200).json({
            success:true,
            message:"Bookings fetched .",
            data:bookings,
        });
    }
    catch(error){
        next(error);

    }
};

//Cancel bookings 
exports.cancelBooking = async(req,res) => {
    try{
        const booking = await bookingService.cancelBooking(req.user._id, req.params.id);
        res.status(200).json({
            success:true,
            message:"Booking cancelled successfully",
            data:booking,
        });
    }
    catch(error){
        next(error);

    }
};