const { MongooseError, Error } = require('mongoose')


exports.extractErrorMessage = (error) => {

    const isMongooseError = error instanceof MongooseError;
    if (isMongooseError) {
        return Object.values(error.errors).map(e => e.message);
    } else {
        return [error.message];
}
}
// exports.extractErrors = (error) => {
//     const isMongooseError = error instanceof MongooseError;
//     if (isMongooseError) {
//         return Object.values(error.errors).map(e => e.message);
//     } else {
//         return [error.message];
//     }
// }