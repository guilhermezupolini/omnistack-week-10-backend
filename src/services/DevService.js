const DevRespository = require('../repositories/DevRepository');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

const mountLocation = (latitude, longitude) => {
    return location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };
};

module.exports = {
    async store (body) {
        const { github_username, techs, latitude, longitude } = body;
        
        let dev = await DevRespository.findOne(github_username);

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = apiResponse.data
            
            const techsArray = parseStringAsArray(techs);
        
            const location = mountLocation(latitude, longitude);
        
            dev = {
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            };           

            dev = await DevRespository.create(dev);
        }

        return dev;
    },

    async find(){
        return await DevRespository.find();
    }
};