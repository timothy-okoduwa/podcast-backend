'use strict';

/**
 * hottest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hottest.hottest');
