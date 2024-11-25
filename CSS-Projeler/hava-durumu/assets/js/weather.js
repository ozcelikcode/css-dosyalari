let img = document.createElement("img");
const input = document.getElementById("input");
const searchForm = document.getElementById("searchForm");
const countryName = document.getElementById("countryName");
const temp = document.getElementById("temp");
const iconContainer = document.getElementById("iconContainer");

// Formun submit olayını yakalayalım
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=373d9519ce35bbd117c5ab984a2f8526`;
  let res = fetch(api);

  res.then((data) => data.json())
    .then((weather) => {
      if (weather.cod === "404") {
        throw new Error("Şehir bulunamadı.");
      }
      countryName.textContent = weather.name;
      temp.textContent = ((weather.main.temp - 273) | 0) + " °C";
      img.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png");
      iconContainer.innerHTML = "";
      iconContainer.appendChild(img);

      // Bu kısımda elementleri görünür yapalım
      countryName.style.display = "block";
      temp.style.display = "block";
      iconContainer.style.display = "block";
    })
    .catch((error) => {
      // Eğer şehir bulunamazsa hata yönetimi
      countryName.textContent = "Şehir bulunamadı.";
      temp.textContent = "";
      iconContainer.innerHTML = "";
      console.error("Bir hata oluştu:", error);

      // Hata durumunda elementleri gizle
      countryName.style.display = "inline-block";
      temp.style.display = "none";
      iconContainer.style.display = "none";
    });
});