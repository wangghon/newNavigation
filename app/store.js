import { createStore } from 'redux';
import { enhance } from './enhance';
import reducers from 'reducers';

const create = enhance(createStore);

export default (create(reducers));
