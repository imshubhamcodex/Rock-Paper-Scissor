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
        <v-list-item>
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
              <div @click="openLeftPanel(item.text)">
                <v-icon style="color: white" class="pl-1 left-icon">{{
                  item.icon
                }}</v-icon>
                <p style="font-size: 10px" class="">{{ item.text }}</p>
              </div>
              <div
                v-if="n === left_icon.length - 1"
                style="position: absolute; bottom: -330px"
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

    <v-navigation-drawer
      permanent
      class="ml-16"
      id="aside-hidden-left"
      app
      clipped
      left
      v-if="
        this.showHistory ||
        this.showLeaders ||
        this.showSettings ||
        this.showSupport
      "
    >
      <!--User-->

      <v-list v-if="showSettings">
        <h3 style="color: white; font-family: monospace" class="ml-5">
          Settings
        </h3>
        <v-list-item>
          <v-list-item-content style="padding-bottom: 1px">
            <template>
              <v-card class="history-cards" max-width="344" outlined>
                <v-card-title>
                  <span style="zoom: 0.8" class="ml-n3">{{ user.rank }}.</span>

                  <h5 style="color: white; zoom: 0.9" class="ml-1">
                    {{ user.name }}
                  </h5>
                  <v-spacer></v-spacer>
                  <span
                    v-if="user.rank <= 50"
                    style="zoom: 0.7; float: right"
                    class="mr-n5"
                    >👑</span
                  >
                </v-card-title>
                <v-card-subtitle>
                  <div class="row bright">
                    <div>
                      <h3>WINS:</h3>
                    </div>
                    <div>
                      <h3>{{ user.wins }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>DRAWS:</h3>
                    </div>
                    <div>
                      <h3>{{ user.draw }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>LOSSES:</h3>
                    </div>
                    <div>
                      <h3>{{ user.loss }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>TOTAL BET:</h3>
                    </div>
                    <div>
                      <h3>
                        {{
                          Number(user.wins) +
                          Number(user.loss) +
                          Number(user.draw)
                        }}
                      </h3>
                    </div>
                  </div>
                  <div class="row bright">
                    <div>
                      <h3>COUNTRY:</h3>
                    </div>
                    <div>
                      <h3>{{ user.country.toUpperCase() }}</h3>
                    </div>
                  </div>
                  <div class="row bright">
                    <div>
                      <h3>ACTIVE ON:</h3>
                    </div>
                    <div>
                      <h3>{{ user.last_login }}</h3>
                    </div>
                  </div>
                </v-card-subtitle>
              </v-card>
            </template>
          </v-list-item-content>
        </v-list-item>
        <div class="mt-7 mb-3">
          <v-btn dark color="blue" class="ma-2 white--text" style="width:93.5%">
            LOGOUT
            <v-icon right dark> mdi-logout </v-icon>
          </v-btn>
        </div>
      </v-list>

      <!--Support-->

      <v-list v-if="showSupport">
        <h3 style="color: white; font-family: monospace" class="ml-5">
          Support Fourm
        </h3>
        <v-list-item>
          <v-list-item-content style="padding-bottom: 1px">
            <template>
              <v-card class="history-cards" max-width="344" outlined>
                <v-card-subtitle>
                  <div class="mt-2" style="color: white">
                    <v-text-field
                      dark
                      disabled
                      v-model="username"
                      label="Username"
                      outlined
                      clearable
                      dense
                    ></v-text-field>
                  </div>
                  <div class="mt-3" style="color: white">
                    <v-textarea
                      id="support-text"
                      outlined
                      name="input-7-4"
                      label="Message"
                      color="error"
                      dark
                      placeholder="Type your query here"
                      @keyup="updateSupportQuery"
                      @focus="updateSupportQuery"
                    ></v-textarea>
                  </div>
                  <div class="mt-3">
                    <v-btn
                      dark
                      color="blue"
                      class="ma-2 white--text"
                      :disabled="support_query.trim() === '' ? true : false"
                    >
                      SEND
                      <v-icon right dark> mdi-send </v-icon>
                    </v-btn>
                  </div>
                </v-card-subtitle>
              </v-card>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--Leaders-->

      <v-list v-if="showLeaders">
        <h3 style="color: white; font-family: monospace" class="ml-5">
          Leaders
        </h3>
        <v-list-item v-for="(item, n) in leaders" :key="item.id + 'leader'">
          <v-list-item-content style="padding-bottom: 1px">
            <template>
              <v-card class="history-cards" max-width="344" outlined>
                <v-card-title>
                  <span style="zoom: 0.8" class="ml-n3">{{ n + 1 }}.</span>

                  <h5 style="color: white; zoom: 0.9" class="ml-1">
                    {{ item.name }}
                  </h5>
                  <v-spacer></v-spacer>
                  <span style="zoom: 0.7; float: right" class="mr-n5">👑</span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="row bright">
                    <div>
                      <h3>WINS:</h3>
                    </div>
                    <div>
                      <h3>{{ item.wins }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>DRAWS:</h3>
                    </div>
                    <div>
                      <h3>{{ item.draw }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>LOSSES:</h3>
                    </div>
                    <div>
                      <h3>{{ item.loss }}</h3>
                    </div>
                  </div>

                  <div class="row bright">
                    <div>
                      <h3>TOTAL BET:</h3>
                    </div>
                    <div>
                      <h3>
                        {{
                          Number(item.wins) +
                          Number(item.loss) +
                          Number(item.draw)
                        }}
                      </h3>
                    </div>
                  </div>
                  <div class="row bright">
                    <div>
                      <h3>COUNTRY:</h3>
                    </div>
                    <div>
                      <h3>{{ item.country.toUpperCase() }}</h3>
                    </div>
                  </div>
                  <div class="row bright">
                    <div>
                      <h3>ACTIVE ON:</h3>
                    </div>
                    <div>
                      <h3>{{ item.last_login }}</h3>
                    </div>
                  </div>
                </v-card-subtitle>
              </v-card>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--History-->
      <v-list v-if="showHistory">
        <h3 style="color: white; font-family: monospace" class="ml-5">
          History
        </h3>
        <v-list-item v-for="item in history" :key="item.id">
          <v-list-item-content style="padding-bottom: 1px">
            <template>
              <v-card class="history-cards" max-width="344" outlined>
                <v-card-title>
                  <h5
                    :class="{
                      win: item.result.toLowerCase() === 'win',
                      loss: item.result.toLowerCase() === 'loss',
                      draw: item.result.toLowerCase() === 'draw',
                    }"
                  >
                    {{ item.result }}
                  </h5>
                  <v-spacer></v-spacer>
                  <span
                    v-if="item.result.toLowerCase() === 'win'"
                    style="zoom: 0.8"
                    >😀</span
                  >
                  <span
                    v-if="item.result.toLowerCase() === 'loss'"
                    style="zoom: 0.8"
                    >😞</span
                  >
                  <span
                    v-if="item.result.toLowerCase() === 'draw'"
                    style="zoom: 0.8"
                    >😐</span
                  >
                </v-card-title>

                <v-card-subtitle>
                  <h5 style="color: white">
                    Now total amount is $
                    <span
                      :class="{
                        win: item.result.toLowerCase() === 'win',
                        loss: item.result.toLowerCase() === 'loss',
                        draw: item.result.toLowerCase() === 'draw',
                      }"
                      >{{ item.total_amt }}</span
                    >
                  </h5>
                </v-card-subtitle>
                <v-card-actions class="mt-n8">
                  <v-spacer></v-spacer>

                  <v-btn icon @click="item.show = !item.show">
                    <v-icon style="color: aqua">{{
                      item.show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="item.show">
                    <v-divider></v-divider>
                    <hr style="border: 0.5px solid silver" />
                    <v-card-text>
                      <div class="row">
                        <div style="zoom: 0.6">
                          <h3>Opponent chosen</h3>
                          <img
                            v-if="item.opponent === 'paper'"
                            src="../assets/icon-paper.svg"
                          />
                          <img
                            v-else-if="item.opponent === 'scissor'"
                            src="../assets/icon-scissors.svg"
                          />
                          <img
                            v-else-if="item.opponent === 'rock'"
                            src="../assets/icon-rock.svg"
                          />
                        </div>
                        <div>
                          <h6>VS</h6>
                        </div>
                        <div style="zoom: 0.6">
                          <h3>You chosen</h3>
                          <img
                            style="float: right"
                            v-if="item.you === 'paper'"
                            src="../assets/icon-paper.svg"
                          />
                          <img
                            style="float: right"
                            v-else-if="item.you === 'scissor'"
                            src="../assets/icon-scissors.svg"
                          />
                          <img
                            style="float: right"
                            v-else-if="item.you === 'rock'"
                            src="../assets/icon-rock.svg"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div>
                          <h5>Your bet :</h5>
                        </div>
                        <div>
                          <h5>${{ item.amount }}</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div>
                          <h5>Time:</h5>
                        </div>
                        <div>
                          <h5>{{ item.time }}</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div>
                          <h5>Date:</h5>
                        </div>
                        <div>
                          <h5>{{ item.date }}</h5>
                        </div>
                      </div>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-color--primary" id="main" style="">
      <div id="game_div">
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
    opened_panel: null,
    showHistory: false,
    showLeaders: false,
    showSupport: false,
    showSettings: false,
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
    history: [
      {
        id: 1,
        result: "Win",
        amount: "1000",
        date: "2020-01-01",
        time: "12:00:10",
        total_amt: "2000",
        show: false,
        you: "paper",
        opponent: "rock",
      },
      {
        id: 2,
        result: "Win",
        amount: "2000",
        date: "2020-01-01",
        time: "10:12:12",
        total_amt: "1500",
        show: false,
        you: "rock",
        opponent: "scissor",
      },
      {
        id: 3,
        result: "Loss",
        amount: "1000",
        date: "2020-01-01",
        time: "12:00:10",
        total_amt: "2000",
        show: false,
        you: "rock",
        opponent: "paper",
      },
      {
        id: 4,
        result: "Draw",
        amount: "2000",
        date: "2020-01-01",
        time: "10:12:12",
        total_amt: "2000",
        show: false,
        you: "paper",
        opponent: "paper",
      },
    ],
    leaders: [
      {
        id: 1,
        name: "John Doe",
        wins: "10",
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
      rank: 30,
      name: "Boss 101",
      wins: "109",
      loss: "1",
      draw: "8",
      country: "ITLY",
      last_login: "2025-05-01",
    },
    username: "username",
    support_query: "",
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
    updateSupportQuery() {
      this.support_query = document.getElementById("support-text").value;

      console.log(this.support_query);
    },
    openLeftPanel(panel) {
      if (this.opened_panel == panel) {
        this.opened_panel = null;
        this.showHistory = false;
        this.showLeaders = false;
        this.showSupport = false;
        this.showSettings = false;
      } else {
        this.opened_panel = panel;

        if (panel.toLowerCase() == "history") {
          this.showHistory = true;
          this.showLeaders = false;
          this.showSupport = false;
          this.showSettings = false;
        } else if (panel.toLowerCase() == "leaders") {
          this.showHistory = false;
          this.showLeaders = true;
          this.showSupport = false;
          this.showSettings = false;
        } else if (panel.toLowerCase() == "support") {
          this.showHistory = false;
          this.showLeaders = false;
          this.showSupport = true;
          this.showSettings = false;
        } else if (panel.toLowerCase() == "setting") {
          this.showHistory = false;
          this.showLeaders = false;
          this.showSupport = false;
          this.showSettings = true;
        }
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
      if (i < 0) {
        this.demo_amount = 0;
        return;
      }
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
  watch: {
    opened_panel(val) {
      if (val !== null) {
        document.getElementById("game_div").style.paddingLeft = "250px";
      } else {
        document.getElementById("game_div").style.paddingLeft = "40px";
      }
    },
  },
};
</script>

<style scoped>
.win {
  color: rgb(17, 209, 17);
}
.loss {
  color: red;
}
.draw {
  color: orange;
}
.bright {
  color: white;
  zoom: 0.7;
}
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
#aside-hidden-left {
  height: 100% !important;
  max-height: 92vh !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.history-cards {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: aqua !important;
  font-family: monospace;
}
.row {
  display: flex;
  justify-content: space-between;
}
#game_div {
  padding-left: 40px;
  padding-top: 3px;
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
