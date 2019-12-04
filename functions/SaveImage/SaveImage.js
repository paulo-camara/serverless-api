const HandleError = require('../HandleErrors/HandleErrors');

'use strict';

module.exports.handler = async (event) => {
    const payload = JSON.parse(event.body);

    if (!payload.image) return HandleError.GenericError(400);

    return UploadImageS3(payload.image);
};

const UploadImageS3 = (image) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                imageUploaded: true,
                imageName: image
            }
        ),
    };
};