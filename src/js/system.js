function validas() {
  var winrate = parseInt(document.getElementById("winrate").value);
  var match = parseInt(document.getElementById("match").value);
  var target = parseInt(document.getElementById("target").value);
  var menang = (match * winrate) / 100;
  var psp = target / 10;
  var st = psp * match;
  var st1 = 10 * menang;
  var st3 = psp - 10; // 1
  var st4 = st1 - st; // 2
  var total = st4 / st3;

  document.getElementById("hasil").innerHTML = "You need about " + total + " matches.";
  document.getElementById("tran").innerHTML = "Kamu membutuhkan sekitar " + total + " pertandingan.";

  if (winrate == 100) {
    if (target == 100) {
      document.getElementById("hasil").innerHTML = "You need about 0 matches.";
      document.getElementById("tran").innerHTML = "Kamu membutuhkan sekitar 0 pertandingan.";
    }
  } else if (winrate < 100) {
    if (target == 100) {
      document.getElementById("hasil").innerHTML = "You will never get 100% winrate.";
      document.getElementById("tran").innerHTML = "Kamu mustahil mendapatkan winrate 100%.";
    } else if (target > 100) {
      document.getElementById("hasil").innerHTML = "Target can't be more than 100%.";
      document.getElementById("tran").innerHTML = "Target tidak boleh lebih dari 100%.";
    }
  } else if (winrate > 100) {
    document.getElementById("hasil").innerHTML = "Winrate can't be more than 100%.";
    document.getElementById("tran").innerHTML = "Winrate tidak boleh lebih dari 100%.";
    if (target > 100) {
      document.getElementById("hasil").innerHTML = "Winrate and Target can't be more than 100%.";
      document.getElementById("tran").innerHTML = "Winrate dan Target tidak boleh lebih dari 100%.";
    }
  } else {
    document.getElementById("hasil").innerHTML = "Fill the field.";
    document.getElementById("tran").innerHTML = "Field harus diisi.";
  }

  if (target) {
  } else {
    document.getElementById("hasil").innerHTML = "Fill the field.";
    document.getElementById("tran").innerHTML = "Field harus diisi.";
  }

  if (match) {
  } else {
    document.getElementById("hasil").innerHTML = "Fill the field.";
    document.getElementById("tran").innerHTML = "Field harus diisi.";
  }
}
