const Dev = require('../models/Dev');

module.exports = {
    async create (dev) {
        return await Dev.create(dev)
    },

    async findOne (github_username) {
        return await Dev.findOne({ github_username });
    },

    async find(){
        return await Dev.find();
    }
};