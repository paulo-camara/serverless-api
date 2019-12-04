const ERROR = {
    500: 'Server error',
    400: 'Bad request',
    403: 'Not authorization'
};

module.exports.GenericError = (err) => {
    return {
        statusCode: err,
        body: JSON.stringify({
            msg: ERROR[err]
        })
    };
};