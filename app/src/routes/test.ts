import * as Router from 'koa-router';
import {TestController} from '../controller'

const router:Router = new Router();
router.prefix('/test');

const testRouter = router
    .get('/info/', TestController.getInfo);


export default testRouter;
