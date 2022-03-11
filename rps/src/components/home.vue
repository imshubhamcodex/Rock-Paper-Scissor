<template>
  <v-app id="inspire" class="bg-color--primary">
    <v-app-bar app clipped-right flat height="50" class="top-bar">
      <img height="30" class="mr-2 ml-1" src="../assets/logo.png" alt="Paper" />
      <h4 class="ml-5">ROCK PAPER SCISSOR</h4>
      <v-spacer></v-spacer>
      <div style="height: 50px; width: 138px" class="">
        <span style="font-size: 11px; color: orange; font-family: monospace"
          >DEMO ACCOUNT</span
        >
        <br />
        <span>${{ demo_amount }}</span>
        <span style="float: right">🤑</span>
      </div>
    </v-app-bar>

    <v-navigation-drawer permanent class="aside-nav-right" app clipped right>
      <v-list>
        <v-list-item v-for="n in 1" :key="n">
          <v-list-item-content>
            <v-list-item-title class="v-list-item-title">
              <div
                style="
                  color: white;
                  display: flex;
                  justify-content: space-between;
                "
              >
                <div>
                  <h5>Game Rules</h5>
                  <h5>Legacy Game</h5>
                </div>
                <div>
                  <v-icon @click="openRule()" right style="color: #70808c">
                    mdi-information
                  </v-icon>
                </div>
              </div>
              <div class="mt-6" style="color: white">
                <v-text-field
                  dark
                  v-model="amount"
                  label="Amount"
                  outlined
                  clearable
                  dense
                  type="number"
                  @keyup="amountChange"
                  @change="amountChange"
                  @click="amountChange"
                  placeholder="0"
                ></v-text-field>
                <div class="mt-n5">
                  <v-btn
                    class="mx-2"
                    style="zoom: 0.5; float: left"
                    dark
                    small
                    color="#70808c"
                    @click="subAmount"
                  >
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-2"
                    style="zoom: 0.5; float: right"
                    dark
                    small
                    color="#70808c"
                    @click="addAmount"
                  >
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="mt-9" style="color: white">
                <v-text-field
                  dark
                  disabled
                  v-model="time_left"
                  label="Live Time"
                  outlined
                  clearable
                  dense
                ></v-text-field>
              </div>
              <div class="mt-n2" v-if="low_fund">
                <div>
                  <p style="font-size: 13px; color: Red">Insufficient funds</p>
                </div>
              </div>
              <div class="mt-4">
                <h5 style="color: white">Make Your Choice</h5>
              </div>
              <div :key="componentKey">
                <div
                  class="mt-4 ml-7 box"
                  style="
                    height: 90px;
                    width: 90px;
                    border: 1px solid white;
                    border-radius: 50%;
                  "
                  @click="choice('rock')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    class="ml-5 mt-5"
                  >
                    <path
                      fill="#70808c"
                      d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"
                    />
                  </svg>
                </div>
                <div
                  class="mt-4 ml-7 box"
                  style="
                    height: 90px;
                    width: 90px;
                    border: 1px solid white;
                    border-radius: 50%;
                  "
                  @click="choice('paper')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    class="ml-4 mt-4"
                  >
                    <path
                      fill="#70808c"
                      d="M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"
                    />
                  </svg>
                </div>
                <div
                  class="mt-4 ml-7 box"
                  style="
                    height: 90px;
                    width: 90px;
                    border: 1px solid white;
                    border-radius: 50%;
                  "
                  @click="choice('scissor')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    class="ml-5 mt-4"
                  >
                    <path
                      fill="#70808c"
                      d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"
                    />
                  </svg>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer permanent class="aside-nav-left" app clipped left>
      <v-list>
        <v-list-item v-for="(item, n) in left_icon" :key="item.link" link>
          <v-list-item-content style="padding-bottom: 1px">
            <v-list-item-title class="v-list-item-title">
              <div>
                <v-icon style="color: white" class="pl-1 left-icon">{{
                  item.icon
                }}</v-icon>
                <p style="font-size: 10px" class="">{{ item.text }}</p>
              </div>
              <div
                v-if="n === left_icon.length - 1"
                style="position: absolute; bottom: -320px"
              >
                <span style="font-size: 12px; color: white; padding-left: 4px">
                  {{ online_players }}</span
                >
                <p style="font-size: 10px">online</p>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-color--primary" id="main">
      <div style="">
        <Game v-if="!showResult" />
        <Result
          @resetGame="resetGame()"
          @updateMoney="updateMoney()"
          v-if="showResult"
        />
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="350">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  id="dialog-btn"
                  style="width: 0px; height: 0px; display: none"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
              <v-card>
                <v-icon
                  @click="dialog = false"
                  style="color: #de1738; cursor: pointer; float: right"
                  class="mr-4 mt-5"
                  right
                  >mdi-close-circle</v-icon
                >
                <v-card-title class="text-h6 mb-5"> Game Rules </v-card-title>
                <v-card-text
                  ><img
                    src="../assets/image-rules.svg"
                    alt="Rules Image"
                    class="rules-img"
                /></v-card-text>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Game from "./Game.vue";
import Result from "./Result.vue";
export default {
  components: {
    Game,
    Result,
  },
  data: () => ({
    drawer: null,
    dialog: false,
    online_players: 100,
    componentKey: 0,
    amount: 0,
    demo_amount: 0,
    time_left: "",
    showResult: false,
    low_fund: false,
    left_icon: [
      {
        icon: "mdi-history",
        text: "History",
        link: "/history",
      },
      {
        icon: "mdi-trophy-variant",
        text: "Leaders",
        link: "/leaders",
      },
      {
        icon: "mdi-forum",
        text: "Support",
        link: "/help",
      },
      {
        icon: "mdi-cog",
        text: "Setting",
        link: "/setting",
      },
    ],
  }),
  methods: {
    resetGame() {
      this.showResult = false;
      this.componentKey++;
    },
    openRule() {
      document.getElementById("dialog-btn").click();
    },
    updateMoney() {
      this.incAni(
        this.$store.state.bet_money > 200
          ? this.$store.state.demo_money - 200
          : this.$store.state.demo_money - this.$store.state.bet_money,
        this.$store.state.demo_money
      );
    },
    amountChange() {
      if (this.amount > this.demo_amount) {
        this.amount = Number(this.demo_amount);
      }
      if (this.amount < 0) {
        this.amount = 0;
        this.demo_amount = Number(this.$store.state.demo_money);
      }
    },
    addAmount() {
      if (this.amount + 5 < this.demo_amount) {
        this.amount += 5;
      } else {
        this.amount = this.demo_amount;
      }
    },
    subAmount() {
      if (this.amount - 3 > 0) {
        this.amount -= 3;
      } else {
        this.amount = 0;
      }
    },
    choice(choice) {
      if (this.demo_amount > 0) {
        this.amountChange();
        let boxes = document.getElementsByClassName("box");
        let paths = document.getElementsByTagName("path");

        if (!this.$store.state.start_game) {
          this.$store.commit("setChoice", choice);
          this.$store.commit("setStartGame", true);
          this.$store.commit("setBetMoney", this.amount);
          this.$store.commit(
            "setDemoMoney",
            this.$store.state.demo_money - this.amount
          );
          this.showResult = true;
        }
        this.demo_amount = this.demo_amount - this.amount;

        if (!this.$store.state.start_game) {
          if (choice === "rock") {
            boxes[0].style.background = "rgb(212, 207, 207)";
            boxes[1].style.background = "transparent";
            boxes[2].style.background = "transparent";

            paths[0].style.fill = "rgba(0, 255, 255,0.9)";
            paths[1].style.fill = "#70808c";
            paths[2].style.fill = "#70808c";
          } else if (choice === "paper") {
            boxes[0].style.background = "transparent";
            boxes[1].style.background = "rgb(212, 207, 207)";
            boxes[2].style.background = "transparent";

            paths[0].style.fill = "#70808c";
            paths[1].style.fill = "rgba(0, 255, 255,0.9)";
            paths[2].style.fill = "#70808c";
          } else if (choice === "scissor") {
            boxes[0].style.background = "transparent";
            boxes[1].style.background = "transparent";
            boxes[2].style.background = "rgb(212, 207, 207)";

            paths[0].style.fill = "#70808c";
            paths[1].style.fill = "#70808c";
            paths[2].style.fill = "rgba(0, 255, 255,0.9)";
          }
        } else {
          let user_final_choice = this.$store.state.choice;

          if (user_final_choice === "rock") {
            boxes[0].style.background = "rgb(212, 207, 207)";
            boxes[1].style.background = "transparent";
            boxes[2].style.background = "transparent";

            paths[0].style.fill = "black";
            paths[1].style.fill = "#70808c";
            paths[2].style.fill = "#70808c";
          } else if (user_final_choice === "paper") {
            boxes[0].style.background = "transparent";
            boxes[1].style.background = "rgb(212, 207, 207)";
            boxes[2].style.background = "transparent";

            paths[0].style.fill = "#70808c";
            paths[1].style.fill = "black";
            paths[2].style.fill = "#70808c";
          } else if (user_final_choice === "scissor") {
            boxes[0].style.background = "transparent";
            boxes[1].style.background = "transparent";
            boxes[2].style.background = "rgb(212, 207, 207)";

            paths[0].style.fill = "#70808c";
            paths[1].style.fill = "#70808c";
            paths[2].style.fill = "black";
          }
        }
      } else {
        this.low_fund = true;
      }
    },

    incAni(i, end_num) {
      if (i < end_num) {
        i++;
        this.demo_amount = i;
        setTimeout(() => {
          this.incAni(i, end_num);
        }, 5);
      }
    },
    liveTime() {
      var d = new Date();
      var s = d.getSeconds();
      var m = d.getMinutes();
      var h = d.getHours();
      if (h < 10) h = "0" + h;
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;
      this.time_left = h + ":" + m + ":" + s;
    },
  },
  mounted() {
    if (window.innerWidth < 450) {
      document
        .getElementsByClassName("aside-nav-right")[0]
        .classList.replace(
          "v-navigation-drawer--open",
          "v-navigation-drawer--close"
        );

      document
        .getElementsByClassName("aside-nav-left")[0]
        .classList.replace(
          "v-navigation-drawer--open",
          "v-navigation-drawer--close"
        );
    }

    setInterval(this.liveTime, 1000);

    this.incAni(
      this.$store.state.demo_money - 100
        ? this.$store.state.demo_money - 100
        : 0,
      this.$store.state.demo_money
    );
  },
};
</script>

<style scoped>
.bg-color--primary {
  background: radial-gradient(at top, var(--bg-grad-1), var(--bg-grad-2));
}

.aside-nav-right {
  width: 170px !important;
  margin: 0;
  background-color: transparent !important;
}
.aside-nav-left {
  width: 80px !important;
  margin: 0;
  background-color: transparent !important;
  padding-left: 1px;
  padding-right: 1px;
}
.v-list-item-title {
  color: #70808c !important;
  font-family: monospace;
}
.top-bar {
  left: 0px !important;
  background: transparent !important;
  color: white !important;
  font-family: monospace;
}
.box {
}
.box:hover {
  cursor: pointer;
  background: white;
}
.box:hover path {
  fill: rgba(0, 255, 255, 1);
}
#main {
  border: 2px solid black;
  color: white !important;
  padding-left: 89px !important;
  padding-right: 185px !important;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media (max-width: 450px) {
  #main {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}

/*@media (max-width: 992px) {
  .aside-nav {
    width: 100px !important;
    margin: 0;
  }
  .top-bar {
    left: 0px !important;
  }
}*/
</style>
