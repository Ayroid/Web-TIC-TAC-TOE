var player1,
  player2,
  turn,
  line,
  winner = 0,
  count = 0;

function setValue(element) {
  if (
    document.getElementById(element).innerText === "" &&
    player1 != undefined &&
    player2 != undefined
  ) {
    if (turn === 1) {
      document.getElementById(element).innerText = player1;
    } else {
      document.getElementById(element).innerText = player2;
    }
    turn = (turn + 1) % 2;
    turnValue();
    count += 1;
    winnerCheck();
    if (count === 9 && winner === 0) {
      winner = 3;
      winnerDeclare();
    }
  }
}

function turnValue() {
  if (turn === 1) {
    document.getElementById("play1").style.background = "chartreuse";
    document.getElementById("play2").style.background = "bisque";
  } else {
    document.getElementById("play1").style.background = "bisque";
    document.getElementById("play2").style.background = "chartreuse";
  }
}

function startGame() {
  document.getElementById("start").style.display="none";
  document.getElementById("playAgain").style.display = "flex";

  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  p1.style.display = "block";
  p2.style.display = "block";

  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    document.getElementById("play1").innerText = "P1 : X";
    document.getElementById("play2").innerText = "P2 : O";
    player1 = "X";
    player2 = "O";
    turn = 1;
  } else {
    document.getElementById("play1").innerText = "P1 : O";
    document.getElementById("play2").innerText = "P2 : X";
    player1 = "O";
    player2 = "X";
    turn = 2;
  }
  turnValue();
}

function winnerCheck() {
  let a = document.getElementById("ele_1").innerText;
  let b = document.getElementById("ele_2").innerText;
  let c = document.getElementById("ele_3").innerText;
  let d = document.getElementById("ele_4").innerText;
  let e = document.getElementById("ele_5").innerText;
  let f = document.getElementById("ele_6").innerText;
  let g = document.getElementById("ele_7").innerText;
  let h = document.getElementById("ele_8").innerText;
  let i = document.getElementById("ele_9").innerText;

  for (let x = 0; x < 8; x++) {
    line = "";
    switch (x) {
      case 0:
        line = a + b + c;
        break;

      case 1:
        line = d + e + f;
        break;

      case 2:
        line = g + h + i;
        break;

      case 3:
        line = a + d + g;
        break;

      case 4:
        line = b + e + h;
        break;

      case 5:
        line = c + f + i;
        break;

      case 6:
        line = a + e + i;
        break;

      case 7:
        line = c + e + g;
        break;
    }
    if (line === "XXX") {
      if (player1 === "X") {
        winner = 1;
      } else {
        winner = 2;
      }
      console.log(line);
      winnerDeclare();
    } else if (line === "OOO") {
      if (player1 === "O") {
        winner = 1;
      } else {
        winner = 2;
      }
      console.log(line);
      winnerDeclare();
    }
  }
}

function winnerDeclare() {
  document.getElementById("board").style.display = "none";

  if (winner === 1) {
    document.getElementById("winner1").style.display = "flex";
  } else if (winner === 2) {
    document.getElementById("winner2").style.display = "flex";
  } else if (winner === 3) {
    document.getElementById("draw").style.display = "flex";
  }
}

function replay() {
  window.location.reload();
}
