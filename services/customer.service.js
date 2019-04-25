const db = require('../utils/connection');
const { successHandler } = require('../utils/responseHandler');
const { errorHandler } = require('../utils/responseHandler');
const Customer = require('../models/Voucher');

module.exports = {

    create: async (reqParams) => {

        try {

            transaction = await db.transaction();

            await Customer.create(reqParams, { transaction });

            await transaction.commit();

            return new Promise(resolve => {
                resolve(successHandler.creation("Voucher created successfully"));
            })

        } catch (e) {

            if (transaction) await transaction.rollback();

            return new Promise((resolve, reject) => {
                reject(errorHandler.server("Internal server error", e))
            })

        }

    }

    // Other functions

};