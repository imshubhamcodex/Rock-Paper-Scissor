<template>
  <div class="container">
    <header style="display: flex; justify-content: space-between">
      <h2 id="head_oppo">Opponent picked</h2>
      <h2 id="vs">VS</h2>
      <h2 id="head_you" class="mr-13">You picked</h2>
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
        <div class="choice choice-user">
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
        <h2
          class="result choice-user"
          style="background: transparent !important"
        >
          {{ result }}
        </h2>
      </div>
    </div>
    <br />
    <br />
    <h4 id="head_restart" style="color: #70808c">
      Game restarting in {{ timer }} sec .
    </h4>
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
      this.timer = 3;
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
      this.opponentChoice = await this.getOpponentChoice();
      const result = await this.getResult(this.opponentChoice);
      this.result = result;
      if (result === "You WON") {
        document.getElementsByClassName("choice-user")[0].classList += " win";
        document.getElementsByClassName("choice-user")[1].classList += " win";
      } else if (result === "You LOST") {
        document.getElementsByClassName("choice-user")[0].classList += " loss";
        document.getElementsByClassName("choice-user")[1].classList += " loss";
      } else {
        document.getElementsByClassName("choice-user")[0].classList += " draw";
        document.getElementsByClassName("choice-user")[1].classList += " draw";
      }
      this.$emit("updateMoney");

      this.$store.commit("setChoice", null);
      this.$store.commit("setResult", result);
      this.$store.commit("setOpponentChoice", this.opponentChoice);
      let history = this.$store.state.history;
      history.unshift({
        id: history.length + 1,
        result:
          result === "You WON"
            ? "Win"
            : result === "You LOST"
            ? "Loss"
            : "Draw",
        amount: this.$store.state.bet_money,
        date: new Date().toISOString().substring(0, 10),
        time: this.liveTime(),
        total_amt: this.$store.state.demo_money,
        show: false,
        you: this.userChoice,
        opponent: this.opponentChoice.name,
      });
      this.startTimer();
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
    liveTime() {
      const d = new Date();
      let s = d.getSeconds();
      let m = d.getMinutes();
      let h = d.getHours();
      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;
      return h + ":" + m + ":" + s;
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
.win {
  background: linear-gradient(
    to bottom,
    var(--green-low),
    var(--green-high)
  ) !important;
  color: green;
}
.loss {
  background: linear-gradient(
    to bottom,
    var(--rock-1),
    var(--rock-2)
  ) !important;
  color: red;
}
.draw {
  background: linear-gradient(
    to bottom,
    var(--scissors-1),
    var(--scissors-2)
  ) !important;
  color: yellow;
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
  background: rgb(228, 228, 222);
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
    grid-gap: 150px 0px;
    margin-top: -100px;
  }
  #head_oppo {
    font-size: 19px;
    margin-left: 25px;
  }
  #head_you {
    font-size: 19px;
    margin-left: 20px;
  }
  #vs {
    font-size: 19px;
    margin: 40px;
  }
  #head_restart {
    margin-top: -50px;
  }
}
@media (max-width:380px) {
  .container {
    zoom: 0.75;
  }
}
</style>
