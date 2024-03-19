'use strict';

/**
 * main-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-service.main-service');
