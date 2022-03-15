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
    history: [],
    leaders: [
      {
        id: 1,
        name: "John Doe",
        wins: "50",
        loss: "5",
        draw: "2",
        country: "USA",
        last_login: "2020-01-01",
      },
      {
        id: 2,
        name: "Baby boss",
        wins: "19",
        loss: "1",
        draw: "8",
        country: "India",
        last_login: "2020-03-01",
      },
    ],
    user: {
      rank: 2,
      name: "Baby boss",
      wins: "19",
      loss: "1",
      draw: "8",
      country: "India",
      last_login: "2020-03-01",
    },
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
    setHistory(state, history) {
      state.history = history;
    },
  },
});
