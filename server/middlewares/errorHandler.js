module.exports = (error, req, res, next) => {
    let message = 'Internal Server Error'
    let status = 500
    console.log(error);
    switch (error.name) {
        // case 'InvalidCredentials':
        //     message = 'Email/Password Invalid'
        //     status = 401
        //     break;
        // case 'SequelizeValidationError':
        // case 'SequelizeUniqueConstraintError':
        //     message = error.errors[0].message
        //     status = 400
        //     break;
        case 'already_subscribed':
            message = 'You already a subscriber'
            status = 400
            break;
        // case 'Unauthenticated':
        // case 'JsonWebTokenError':
        //     status = 401
        //     message = 'Error Authentication'
        //     break
        case 'Data Not Found':
            status = 404
            message = 'Data Not Found'
            break
    }
    res.status(status).json({ message })
}