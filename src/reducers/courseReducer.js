export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      console.log('state', state);
      return [...state,
        Object.assign({}, action.course)
      ];
  default:
    return state;
  }
}
