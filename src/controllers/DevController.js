const DevService = require('../services/DevService')

module.exports = {
    async index (request, response) {
        const devs = await DevService.find();

        return response.json(devs);
    },

    async store (request, response) {
        const dev = await DevService.store(request.body);
        return response.json(dev);
    }
};