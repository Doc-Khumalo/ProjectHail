/* @flow */

import { Map } from 'immutable';

const initialState = Map({
  message: null,
});

type actionType = {
  type: string,
  payload: {
    message: string,
  },
}

export default function (
  state: Map<string, any> = initialState,
  action: actionType) {
  switch (action.type) {

    case 'SET_MESSAGE': {
      //   : undefined;
      return state.withMutations((map) => {
        map
          .set('message', action.payload.message);
      });
    }
    default: {
      return state;
    }
  }
}

//Mutate and map if thers is multiple states and payload
