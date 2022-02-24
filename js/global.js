function Announcer() {
  const Item = document.querySelector("#topAnnouncer");
  let array = 0;

  const Instagram = `<a class="u-00 text-danger" href="https://www.instagram.com/nizar.gdem/" target="_blank">nizar.gdem</a>`;
  const Nazaar = `<a class="u-00 text-danger" href="https://www.instagram.com/nazaar.store/" target="_blank">Nazaar.Store</a>`;
  const Tiktok = `<a class="u-00 text-danger" href="https://tiktok.com/@nazaarnizar" target="_blank">@nazaarnizar</a>`;

  const f1 = `<p class="animation mb-0 text-truncate">Topup diamond murah di instagram ${Nazaar}</p>`;
  const f2 = `<p class="animation mb-0 text-truncate">Follow instagram pribadi gua ${Instagram}</p>`;
  const f3 = `<p class="animation mb-0 text-truncate">Nazaar Store, layanan topup trusted</p>`;
  const f4 = `<p class="animation mb-0 text-truncate">Stay Safe guys</p>`;
  const f5 = `<p class="animation mb-0 text-truncate">Temukan konten menarik di tiktok pribadi gua: ${Tiktok}</p>`;
  const f6 = `<p class="animation mb-0 text-truncate">Thanks for visiting my website <3</p>`;

  let arrayEl = [f1, f2, f3, f4, f5, f6];
  let arrayMax = 6;
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
