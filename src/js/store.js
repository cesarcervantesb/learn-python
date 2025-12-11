
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    questions: []
  },
  getters: {
    questions({ state }) {
      return state.questions;
    }
  },
})
export default store;
