'use strict';

/**
 * single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single.single');
