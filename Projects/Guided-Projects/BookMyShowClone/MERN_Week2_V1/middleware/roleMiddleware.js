//Checks the permission for the req and allows it or rejects it 
const CustomError = require("../utils/CustomError");

function roleMiddleware(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user){
            return next(new CustomError("User info not found.",401));
        }
        if (!allowedRoles.includes(req.user.role)) {
            return next(new CustomError("Forbidden: You don't have permission to access this resource.",401));
        }
        next();
    };
}

module.exports = roleMiddleware;
