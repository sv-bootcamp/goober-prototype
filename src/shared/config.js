import extend from 'extend';
import Common from '../../config/common.json';
import Local from '../../config/local.example.json';
import Test from '../../config/test.json';

export default extend(true, Common, Local, Test);
