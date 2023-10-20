const { MongooseError, Error } = require('mongoose')


exports.extractErrorMessage = (error) => {

    if (error instanceof MongooseError || error instanceof Error) {
        return Object.values(error.errors).map(err => err.message)
    } else if (error) {
        return [error.message]
    }
    res.status(400).send(error.message)
}


// try { } catch (error) {
//     console.log(error);
//     // checking validation
//     if (error.name === "ValidationError") {
        
//         const message = Object.values(error.errors).map(value => value.message);
//         return res.status(400).json({
//             error: message
//         })
//     }
//     res.status(400).json(error.message)
// }