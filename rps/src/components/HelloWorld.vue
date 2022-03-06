<template>
  <v-app id="inspire" class="bg-color--primary">
    <v-system-bar app>
      <h4 class="heading">Welcome To Arena</h4>
      <v-spacer></v-spacer>

      <img height="18" src="../assets/icon-rock.svg" alt="Rock" />
      <img
        height="18"
        class="mr-2 ml-2"
        src="../assets/icon-paper.svg"
        alt="Paper"
      />
      <img height="18" src="../assets/icon-scissors.svg" alt="Scissor" />
    </v-system-bar>

    <v-app-bar app clipped-right flat height="50" class="top-bar">
      <h4>ROCK PAPER SCISSOR</h4>
      <v-spacer></v-spacer>

      <v-responsive max-width="156" class="pb-2 pt-2">
        <v-btn rounded outlined color="teal" dark>
          Play <v-icon right dark> mdi-motion-play </v-icon></v-btn
        >
      </v-responsive>
    </v-app-bar>

    <!-- <v-navigation-drawer class="aside-nav" app left>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="bg-color--primary"> This is main </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped>
.bg-color--primary {
  background: radial-gradient(at top, var(--bg-grad-1), var(--bg-grad-2));
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
