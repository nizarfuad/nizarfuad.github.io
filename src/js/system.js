function validas() {
  var alert = document.getElementById("alert-0");
  var alertA = document.getElementById("alert-1");
  var form = document.getElementById("form-input");
  var winrate = parseInt(document.getElementById("winrate").value);
  var match = parseInt(document.getElementById("match").value);
  var target = parseInt(document.getElementById("target").value);
  var menang = (match * winrate) / 100;
  var psp = target / 10;
  var st = psp * match;
  var st1 = 10 * menang;
  var st3 = psp - 10; // 1
  var st4 = st1 - st; // 2
  var hasil = st4 / st3;
  var total = hasil.toFixed(0);

  document.getElementById("hasil").innerHTML = "You need about " + total + " matches.";
  document.getElementById("tran").innerHTML = "Kamu membutuhkan sekitar " + total + " pertandingan.";
  alert.classList.remove("d-none");
  alertA.classList.add("d-none");
  form.reset();

  if (winrate == 100) {
    if (target == 100) {
      document.getElementById("hasil").innerHTML = "You need about 0 matches.";
      document.getElementById("tran").innerHTML = "Kamu membutuhkan sekitar 0 pertandingan.";
      alert.classList.remove("d-none");
      alertA.classList.add("d-none");
      form.reset();
    }
  } else if (winrate < 100) {
    if (target == 100) {
      document.getElementById("hasil").innerHTML = "You will never get 100% winrate.";
      document.getElementById("tran").innerHTML = "Kamu mustahil mendapatkan winrate 100%.";
      alert.classList.remove("d-none");
      alertA.classList.add("d-none");
      form.reset();
    } else if (target > 100) {
      document.getElementById("hasil-error").innerHTML = "Target can't be more than 100%.";
      document.getElementById("tran-error").innerHTML = "Target tidak boleh lebih dari 100%.";
      alertA.classList.remove("d-none");
      alert.classList.add("d-none");
      form.reset();
    }
  } else if (winrate > 100) {
    document.getElementById("hasil-error").innerHTML = "Winrate can't be more than 100%.";
    document.getElementById("tran-error").innerHTML = "Winrate tidak boleh lebih dari 100%.";
    alertA.classList.remove("d-none");
    alert.classList.add("d-none");
    form.reset();
    if (target > 100) {
      document.getElementById("hasil-error").innerHTML = "Winrate and Target can't be more than 100%.";
      document.getElementById("tran-error").innerHTML = "Winrate dan Target tidak boleh lebih dari 100%.";
      alertA.classList.remove("d-none");
      alert.classList.add("d-none");
      form.reset();
    }
  } else {
    document.getElementById("hasil-error").innerHTML = "Fill the field.";
    document.getElementById("tran-error").innerHTML = "Field harus diisi.";
    alertA.classList.remove("d-none");
    alert.classList.add("d-none");
    form.reset();
  }

  if (target) {
  } else {
    document.getElementById("hasil-error").innerHTML = "Fill the field.";
    document.getElementById("tran-error").innerHTML = "Field harus diisi.";
    alertA.classList.remove("d-none");
    alert.classList.add("d-none");
    form.reset();
  }

  if (match) {
  } else {
    document.getElementById("hasil-error").innerHTML = "Fill the field.";
    document.getElementById("tran-error").innerHTML = "Field harus diisi.";
    alertA.classList.remove("d-none");
    alert.classList.add("d-none");
    form.reset();
  }
  form.reset();
}
