function Announcer() {
  const Item = document.querySelector("#topAnnouncer");
  let array = 0;

  const Instagram = `<a class="u-00 text-danger" href="https://www.instagram.com/nizar.gdem/" target="_blank"><b>nizar.gdem</b></a>`;
  const Nazaar = `<a class="u-00 text-danger" href="https://www.instagram.com/nazaar.store/" target="_blank"><b>Nazaar.Store</b></a>`;
  const Whatsapp = `<a class="u-00 text-danger" href="https://api.whatsapp.com/send?phone=6282313542756" target="_blank"><b>Whatsapp</b></a>`;
  const Tiktok = `<a class="u-00 text-danger" href="https://tiktok.com/@nazaarnizar" target="_blank"><b>@nazaarnizar</b></a>`;

  const f1 = `<p class="animation mb-0 text-truncate">TOPUP DI INSTAGRAM ${Nazaar} YGY</p>`;
  const f2 = `<p class="animation mb-0 text-truncate">Follow instagram pribadi gua ${Instagram}</p>`;
  const f3 = `<p class="animation mb-0 text-truncate">Nazaar Store, layanan topup trusted</p>`;
  const f4 = `<p class="animation mb-0 text-truncate">Stay Safe guys</p>`;
  const f5 = `<p class="animation mb-0 text-truncate">Follow tiktok pribadi gua guys ${Tiktok}</p>`;
  const f6 = `<p class="animation mb-0 text-truncate">Kalo mau mabar chat ${Whatsapp} saya guys</p>`;
  const f7 = `<p class="animation mb-0 text-truncate">Thanks for visiting my website <3</p>`;

  let arrayEl = [f1, f2, f3, f4, f5, f6, f7];
  let arrayMax = 7;
  setInterval(() => {
    Item.innerHTML = arrayEl[array];

    array++;
    if (array >= arrayMax) {
      array = 0;
    }
  }, 4000);
}

window.onload = function () {
  Announcer();
};
