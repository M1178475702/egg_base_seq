const Service = require('../core/service/ApiService');
const {Transactional, PROPAGATION} = require('../../plugin/egg-sequelize-transactional');

class ExampleService extends Service {

    @Transactional(PROPAGATION.MANDATORY)
    async example(id) {
        return 0;
    }
}

module.exports = AService;
