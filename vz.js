var klik = new Audio("https://ems-links.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;

const NamaAllKodam = [
  "Monyet Kutub",
  "Ranger Pink",
  "Ikan Mujair",
  "Tuyul Mulet",
  "Kuntilanak Tobrut",
  "Pocong Ngesot",
  "Abu Geprek",
  "Si Manis Kucing Oren",
  "Raja Ngantuk",
  "Nenek Lampir Ceria",
  "Pangeran Kuda Kepang",
  "Ratu Jamur Enoki",
  "Dewa Tahu Bulat",
  "Putri Es Campur",
  "Jenderal Boba",
  "Sang Penguasa Cimol",
  "Sultan Nasi Goreng",
  "Tuan Ubi Ungu",
  "Putri Mangga Manis",
  "Dewa Angin Sepoi",
  "Nona Roti Bakar",
  "Pangeran Donat Gula",
  "Ratu Teh Tarik",
  "Kang Martabak Keju",
  "Sang Pemanah Lidi",
  "Jenderal Pisang Coklat",
  "Ratu Es Lilin",
  "Pangeran Mie Goreng",
  "Nenek Keripik Pedas",
  "Dewa Cendol Dawet",
  "Putri Kerupuk Udang",
  "Sultan Bakso Ikan",
  "Tuan Sate Ayam",
  "Ratu Singkong Rebus",
  "Pangeran Susu Jahe",
  "Nona Kue Cubit",
  "Dewa Kacang Hijau",
  "Putri Lapis Legit",
  "Jenderal Sosis Bakar",
  "Sang Penjaga Popcorn",
  "Raja Kue Lumpur",
  "Nenek Puding Mangga",
  "Pangeran Siomay",
  "Ratu Batagor",
  "Dewa Nanas Madu",
  "Sultan Serabi Solo",
  "Tuan Pisang Goreng",
  "Putri Buah Naga",
  "Jenderal Keripik Balado",
  "Sang Penguasa Kuping Gajah",
  "Raja Kelapa Parut",
  "Nenek Es Teler",
  "Pangeran Keripik Singkong",
  "Ratu Wedang Jahe",
  "Kinkong Kejepit Pager",
];

const VzBody = document.querySelector(".VzBody");
const Bodyx = document.querySelector("body");

function CekKodam() {
  const randomIndex = Math.floor(Math.random() * NamaAllKodam.length);
  const randomKodam = NamaAllKodam[randomIndex];
  const Nama = document.getElementById("nama").value.trim();

  if (Nama === "") {
    const ErrorMessage = document.querySelector(".text-error");
    ErrorMessage.innerHTML = `<p class="text-red-800 text-center text-1xl font-bold">Nama tidak boleh kosong</p>`;
    ErrorMessage.style.display = "block";
    return;
  } else {
    const ErrorMessage = document.querySelector(".text-error");
    ErrorMessage.style.display = "none";
  }
  const LoadingContainer = document.querySelector(".LoadingContainer");
  LoadingContainer.classList.add("ShowLoading");
  setTimeout(function () {
    LoadingContainer.classList.remove("ShowLoading");
    const HasilKodam = document.getElementById("EndKodam");
    HasilKodam.innerHTML = `<p class="text-lg-1xl text-center">Kodam ${Nama} adalah <b class="text-red-700">${randomKodam}</b></p>`;
  }, 700);

  const InputName = document.getElementById("nama");
  InputName.value = "";

  const Btnx = document.querySelector(".Btnx");
  const Reset = document.querySelector(".Reset");
  Reset.style.display = "none";
  Btnx.style.display = "block";
}

document.getElementById("FormKodam").addEventListener("submit", function (event) {
  event.preventDefault();
  CekKodam();
});

// Body Function

function OpenMenu() {
  VzBody.classList.add("VzBodyShow");
}
// Close Menu Function
function CloseMenu() {
  VzBody.classList.remove("VzBodyShow");
}
// Link Social Media

function MkxXxInsta() {
  window.location.replace("https://instagram.com/marchell_kevandra");
  klik.play();
}
function MkxXxTiktok() {
  window.location.replace("https://tiktok.com/@mkxchl");
  klik.play();
}
function MkxXxFacebook() {
  window.location.replace("https://facebook.com/chellgnzxz");
  klik.play();
}
function MkxXxEms() {
  window.location.replace("https://ems-links.netlify.app/");
  klik.play();
}
function MkPortfolio() {
  window.location.replace("https://mkxchl.github.io/portfolio-tailwind-css/");
  klik.play();
}
function MkSpotifyPlaylistX() {
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=3326f41cde64402d");
  klik.play();
}
function MkxxGithub() {
  window.location.replace("https://github.com/mkxchl");
  klik.play();
}
function MkxxTele() {
  window.location.replace("https://t.me/Marchell_Junior");
  klik.play();
}
function MkxxDiscord() {
  window.location.replace("https://discordapp.com/users/611666120520237070");
  klik.play();
}
