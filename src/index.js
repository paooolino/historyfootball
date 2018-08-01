import {createStore} from 'redux';
import {Renderer} from './Renderer.js';

const initialState = {
  year: 1890,
  week: 1,
  teams: []
};

function reducer(state, action) {
  return state;
}

var renderer = new Renderer();
function render() {
  renderer.render('container');
}
render();

const store = createStore(reducer);
store.subscribe(render);