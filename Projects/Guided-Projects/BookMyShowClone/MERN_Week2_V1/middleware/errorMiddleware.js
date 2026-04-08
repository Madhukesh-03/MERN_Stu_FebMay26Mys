// Generic error handler is created 

function errorMiddleware(Err,req,res,next){
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        success:false,
        message:err.message || "Internal Server error"
    });
}

module.exports = errorMiddleware;