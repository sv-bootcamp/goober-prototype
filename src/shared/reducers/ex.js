/**
 * Created by chan on 2016. 8. 23..
 */

import reduceReducers from 'reduce-reducers';

const defaultState = {
  num: 0
};

export default reduceReducers(
  (state = defaultState, action) => {
    switch(action.type) {
      case 'TYPE_1':
        return {
          num: 1
        };
      default:
        return state;
    }
    return state;
  }
);
