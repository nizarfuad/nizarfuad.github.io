const Button = document.getElementById("solve");
const Results = document.getElementById("readResult");

const inWinrate = document.getElementById("winrate");
const inMatch = document.getElementById("match");
const inTarget = document.getElementById("target");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Confirms = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

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
    Toast.fire({
      icon: "error",
      title: "Field tidak boleh kosong",
    });
  } else if (outTarget == 100 && outWinrate == 100) {
    Confirms.fire({
      title: "Kamu membutuhkan",
      html: "<strong>" + "0" + "</strong>" + " match untuk meraih Winrate " + "<strong>" + outTarget + "%</strong>",
      icon: "info",
      confirmButtonText: "Mantap!",
      reverseButtons: true,
    });
  } else if (outMatch == 0 && outWinrate == 0 && outTarget == 100) {
    Confirms.fire({
      title: "Kamu membutuhkan",
      html: "<strong>" + "1" + "</strong>" + " win tanpa lose untuk meraih Winrate " + "<strong>" + outTarget + "%</strong>",
      icon: "info",
      confirmButtonText: "Mantap!",
      reverseButtons: true,
    });
  } else if (outWinrate < 100 && outTarget == 100) {
    Toast.fire({
      icon: "error",
      title: "Gabisa bro, jangan aneh aneh",
    });
  } else if (outWinrate < 0 || outMatch < 0 || outTarget < 0) {
    Toast.fire({
      icon: "error",
      title: "Field tidak boleh kurang dari Nol",
    });
  } else if (outTarget > 100 || outWinrate > 100) {
    Toast.fire({
      icon: "warning",
      title: "Winrate harus kurang atau sama dengan 100%",
    });
  } else if (Final >= 100000) {
    Toast.fire({
      icon: "warning",
      title: "Yakin lu bro? lu butuh 100.000++ match!!!",
    });
  } else if (Final < 1) {
    Confirms.fire({
      title: "Kamu membutuhkan",
      html: "<strong>" + Number(Final.toString().replace(/[-]/g, "")) + "</strong>" + " lose tanpa win untuk meraih Winrate " + "<strong>" + outTarget + "%</strong>",
      icon: "info",
      confirmButtonText: "Mantap!",
      reverseButtons: true,
    });
  } else {
    Confirms.fire({
      title: "Kamu membutuhkan",
      html: "<strong>" + Number(Final.toString().replace(/[-]/g, "")) + "</strong>" + " win tanpa lose untuk meraih Winrate " + "<strong>" + outTarget + "%</strong>",
      icon: "info",
      confirmButtonText: "Mantap!",
      reverseButtons: true,
    });
  }
}
