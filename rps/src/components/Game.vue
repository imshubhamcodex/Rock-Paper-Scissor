<template>
  <div class="container">
    <section class="game">
      <button class="choice-btn" data-choice="paper">
        <div class="choice paper">
          <img src="../assets/icon-paper.svg" alt="Paper" />
        </div>
      </button>
      <button class="choice-btn" data-choice="scissors">
        <div class="choice scissors">
          <img src="../assets/icon-scissors.svg" alt="Scissors" />
        </div>
      </button>
      <button class="choice-btn" data-choice="rock">
        <div class="choice rock">
          <img src="../assets/icon-rock.svg" alt="Rock" />
        </div>
      </button>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  grid-template-columns: (repeat(2, 1fr));
  grid-template-areas:
    "paper scissors"
    "rock rock";
  place-items: center;
  height: 30rem;
  padding-top: 4rem;
  grid-gap: 130px 0px;
  animation: spin 20s linear infinite;
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
  background: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: spin 6s linear infinite;
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

.choice.paper::before {
  background: linear-gradient(to bottom, var(--green-low), var(--green-high));
}
.choice.scissors::before {
  background: linear-gradient(to bottom, var(--scissors-1), var(--scissors-2));
}
.choice.rock::before {
  background: linear-gradient(to bottom, var(--rock-1), var(--rock-2));
}

.choice-btn[data-choice="paper"] {
  grid-area: paper;
}
.choice-btn[data-choice="scissors"] {
  grid-area: scissors;
}
.choice-btn[data-choice="rock"] {
  grid-area: rock;
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


@media(max-width:450px){
    .container{
        max-width: 400px;
    }
    .game{
        zoom: 0.4;
        grid-gap: 140px 0px;
    }
}
</style>
