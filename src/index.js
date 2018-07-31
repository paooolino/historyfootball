import {createStore} from 'redux';

function Team() {
}

const regions = ['Piemonte', 'Lombardia', 'Liguria'];
const kitTypes = ['Tinta unita', 'Quarti', 'Scacchi', 'Righe verticali', 'Righe orizzontali', 'Cerchiata', 'Scudata', 'Crociata', 'Striscia obliqua', 'V'];
const initialState = {
  year: 1890,
  week: 1,
  teams: []
};

function reducer(state, action) {
  return state;
}

function render() {
}

const store = createStore(reducer);
store.subscribe(render);