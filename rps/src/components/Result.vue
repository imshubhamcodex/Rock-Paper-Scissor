<template>
  <div class="container">
    <header style="display: flex; justify-content: space-between">
      <h2>Opponent picked</h2>
      <h2>VS</h2>
      <h2 class="mr-13">You picked</h2>
    </header>
    <section class="game">
      <button class="choice-btn" data-choice="paper">
        <div class="choice">
          <img
            v-if="this.opponentChoice.name === 'paper'"
            src="../assets/icon-paper.svg"
          />
          <img
            v-else-if="this.opponentChoice.name === 'scissor'"
            src="../assets/icon-scissors.svg"
          />
          <img
            v-else-if="this.opponentChoice.name === 'rock'"
            src="../assets/icon-rock.svg"
          />
        </div>
      </button>
      <button class="choice-btn" data-choice="scissors">
        <div class="choice">
          <img :src="loadUserChoice()" />
        </div>
      </button>
    </section>
    <div
      class="mt-15"
      style="display: flex; justify-content: space-between; width: 93%"
    >
      <div><h2>Result :</h2></div>
      <div>
        <h2 class="result" style="color:cyan">{{ result }}</h2>
      </div>
    </div>
    <br />
    <br />
    <h4 style="color: #70808c">Game restarting in {{ timer }} sec .</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userChoice: this.$store.state.choice,
      opponentChoice: { name: "dummy" },
      result: "You loss/wins",
      timer: 5,
      CHOICES: [
        {
          name: "paper",
          beats: "rock",
        },
        {
          name: "scissor",
          beats: "paper",
        },
        {
          name: "rock",
          beats: "scissor",
        },
      ],
    };
  },
  methods: {
    loadUserChoice() {
      if (this.userChoice === "paper") {
        return require("../assets/icon-paper.svg");
      } else if (this.userChoice === "scissor") {
        return require("../assets/icon-scissors.svg");
      } else if (this.userChoice === "rock") {
        return require("../assets/icon-rock.svg");
      }
    },
    startTimer() {
      this.timer = 8;
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          this.resetGame();
        }
      }, 1000);
    },
    resetGame() {
      clearInterval(this.timerInterval);
      this.timer = 5;
      this.userChoice = "";
      this.opponentChoice = { name: "dummy" };
      this.result = "You loss/wins";
      this.$store.commit("setChoice", null);
      this.$store.commit("setResult", null);
      this.$store.commit("setOpponentChoice", null);
      this.$store.commit("setStartGame", false);
      this.$emit("resetGame");
    },
    async play() {
      const opponentChoice = await this.getOpponentChoice();
      const result = await this.getResult(opponentChoice);
      this.result = result;
      this.$emit("updateMoney");
      this.startTimer();
      this.opponentChoice = opponentChoice;
      this.$store.commit("setChoice", null);
      this.$store.commit("setResult", result);
      this.$store.commit("setOpponentChoice", opponentChoice);
    },
    async getOpponentChoice() {
      const rand = Math.floor(Math.random() * this.CHOICES.length);
      return this.CHOICES[rand];
    },
    async getResult(opponentChoice) {
      if (this.userChoice === opponentChoice.name) {
        this.$store.commit(
          "setDemoMoney",
          Number(this.$store.state.demo_money) +
            Number(this.$store.state.bet_money)
        );
        return "Draw";
      }

      if (this.userChoice === opponentChoice.beats) {
        this.$store.commit(
          "setDemoMoney",
          Number(this.$store.state.demo_money) + 0
        );
        return "You LOST";
      } else {
        this.$store.commit(
          "setDemoMoney",
          Number(this.$store.state.demo_money) +
            2 * Number(this.$store.state.bet_money)
        );
        return "You WON";
      }
    },
  },
  mounted() {
    this.play();
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  font-family: monospace;
}

/* Main Content */
.container {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 2rem;
}

/* Game */
.game {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 20rem;
  padding-top: 4rem;
  grid-gap: 0 250px;
}

.choice-btn {
  border: none;
  outline: none;
  background: none;
}
.choice {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: cyan;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 2rem #223351;
  zoom: 1.2;
}
.choice::before,
.choice::after {
  content: "";
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  z-index: -1;
  box-shadow: 0 0 0 2rem #223351;
  z-index: -2;
}

.choice img {
  transform: scale(1.5);
}

@media (max-width: 450px) {
  .container {
    max-width: 400px;
  }
  .game {
    zoom: 0.4;
    grid-gap: 140px 0px;
  }
}
</style>
