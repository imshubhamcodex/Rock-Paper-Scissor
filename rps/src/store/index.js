import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    choice: null,
    start_game: false,
    opponentChoice: null,
    result: null,
    bet_money: 0,
    demo_money: 1000,
  },
  mutations: {
    setChoice(state, choice) {
      state.choice = choice;
    },
    setStartGame(state, start_game) {
      state.start_game = start_game;
    },
    setOpponentChoice(state, opponentChoice) {
      state.opponentChoice = opponentChoice;
    },
    setResult(state, result) {
      state.result = result;
    },
    setBetMoney(state, bet_money) {
      state.bet_money = Number(bet_money).toFixed(2);
    },
    setDemoMoney(state, demo_money) {
      state.demo_money = Number(demo_money).toFixed(2);
    },
  },
});
