'use strict';

/**
 * main-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::main-service.main-service');
