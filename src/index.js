import {createStore} from 'redux';

const regions = ['Piemonte', 'Lombardia', 'Liguria'];
const kitTypes = ['Tinta unita', 'Quarti', 'Scacchi', 'Righe verticali', 'Righe orizzontali', 'Cerchiata', 'Scudata', 'Crociata', 'Striscia obliqua', 'V'];
const initialState = {
  year: 1890,
  day: 0,
  player: {
    teamName: '',
    region_id: 0,
    teamKit: {
      type_id: 0,
      color1: '',
      color2: '',
      shortsColor: '',
      socksColor: ''
    },
    balance: 500,
    attack: 0,
    midfield: 0,
    defense: 0,
    condition: 0
  },
  teams: ['Genoa FC', 'Internazionale Torino', 'Ginnastica Torino', 'FC Torinese']
};

function reducer(state, action) {
  return state;
}

function render() {
}

const store = createStore(reducer);
store.subscribe(render);