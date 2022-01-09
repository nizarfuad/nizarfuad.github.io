const Button = document.getElementById("solve");
const Results = document.getElementById("readResult");

const inWinrate = document.getElementById("winrate");
const inMatch = document.getElementById("match");
const inTarget = document.getElementById("target");

Button.addEventListener("click", function () {
  const outWinrate = parseFloat(inWinrate.value);
  const outMatch = parseFloat(inMatch.value);
  const outTarget = parseFloat(inTarget.value);

  let Win = (outMatch * outWinrate) / 100;
  let Formulas = outTarget / 10;
  let Formula = Formulas * outMatch;
  let Formula1 = 10 * Win;
  let Formula3 = Formulas - 10;
  let Formula4 = Formula1 - Formula;
  let Result = Formula4 / Formula3;
  let Final = Result.toFixed(0);
  console.log("Result Was " + Final);

  validation(outMatch, outWinrate, outTarget, Final);
});

function validation(outMatch, outWinrate, outTarget, Final) {
  if (!outWinrate || !outMatch || !outTarget) {
    Results.innerHTML = "Field harus diisi.";
  } else if (outWinrate == 100 || outTarget == 100) {
    Results.innerHTML = "Kamu perlu <b>0</b> win tanpa lose untuk mencapai Winrate <b>" + outTarget + "%</b>";
  } else if (outWinrate < 0 || outMatch < 0 || outTarget < 0) {
    Results.innerHTML = "Field tidak boleh lebih kecil dari <b>0</b>";
  } else if (outTarget > 100 || outWinrate > 100) {
    Results.innerHTML = "Winrate tidak boleh lebih dari <b>100%</b>";
  } else if (outWinrate > outTarget) {
    Results.innerHTML = "Kamu perlu <b> " + Final + " </b> lose tanpa win untuk mencapai Winrate <b>" + outTarget + "%</b>.";
  } else if (outTarget == 100) {
    Results.innerHTML = "Ga akan bisa bro, awkoakwoakw.";
  } else if (Final >= 100000) {
    Results.innerHTML = "Jangan banyak ngarep bro, lu butuh 100k++ match win tanpa lose.";
  } else {
    Results.innerHTML = "Kamu perlu <b> " + Final + " </b> win tanpa lose untuk mencapai Winrate <b>" + outTarget + "%</b>.";
  }
}
