'use strict';

/**
 * single controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::single.single');
