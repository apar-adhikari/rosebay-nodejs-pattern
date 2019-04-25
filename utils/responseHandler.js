module.exports = {

    successHandler: {

        creation: (message, data) => {
            return {
                code: 201,
                status: 'SUCCESS',
                message: message || null,
                data: data || null
            }
        },
    
        update: (message, data) => {
            return {
                code: 200,
                status: 'SUCCESS',
                message: message || null,
                data: data || null
            }
        },
    
        get: (data) => {
            return {
                code: 200,
                status: 'SUCCESS',
                data: data || null
            }
        }

    },

    errorHandler: {

        validation: (message, data) => {
            return {
                code: 422,
                status: 'ERROR',
                message: message || 'Validation Error',
                data: data || null
            }
        },
    
        server: (message, data) => {
            console.error(data);
            return {
                code: 500,
                status: 'ERROR',
                message: message || 'Internal Server Error',
                data: data.message || null
            }
        },
    
        badRequest: (message) => {
            return {
                code: 400,
                status: 'ERROR',
                message: message || 'Bad Request',
            }
        },
    
        authentication: (message, data) => {
            console.log(data);
            return {
                code: 401,
                status: 'ERROR',
                message: message || 'Authentication Error'
            }
        },
    
        forbidden: (message) => {
            return {
                code: 403,
                status: 'ERROR',
                message: message || 'Forbidden'
            }
        }

    }

}