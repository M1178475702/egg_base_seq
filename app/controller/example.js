const Controller = require('../../core/controller/ApiController');
const { Route, HttpGet, Middleware, filters } = require('../../../plugin/egg-decorator-router/lib');
const { ExceptionHandler } = require('../../../plugin/egg-controller-exception-handler/lib');

@Route('/')
class ExampleController extends Controller{

    @HttpGet('/')
    @ExceptionHandler()
    async example(){
        this.result.data = await this.service.example.example();
        return '请求成功'
    }
}

module.exports = UserController;
