document.addEventListener("DOMContentLoaded", () => {
  fetchAllCitiesParallel();

  setInterval(() => {
    fetchAllCitiesParallel(); // Refresh setiap 1 menit
  }, 60000);
});

async function fetchAllCitiesParallel() {
  const cities = ["jakarta", "surabaya", "semarang", "medan"];

  const requests = cities.map(city =>
    fetch(`/api/prices?city=${city}`)
      .then(res => res.json())
      .then(data => ({ city, data }))
      .catch(err => ({ city, error: err }))
  );

  const results = await Promise.all(requests);

  // Clear container sebelum render ulang
  const container = document.getElementById("all-cities");
  container.innerHTML = "";

  results.forEach(result => {
    if (result.error) {
      console.error(`Error fetching ${result.city}`, result.error);
    } else {
      renderCityData(result.city, result.data);
    }
  });
}

function renderCityData(city, result) {
  const container = document.getElementById("all-cities");

  const section = document.createElement("section");
  section.classList.add("price-list");

  if (!result.success) {
    section.innerHTML = `<h2>${city}</h2><p>${result.message}</p>`;
    container.appendChild(section);
    return;
  }

  section.innerHTML = `
    <h2>Harga di ${capitalize(city)}</h2>
    <ul>
      ${result.data.map(item => `
        <li>
          <span>${item.name} (${item.unit})</span>
          <span>Rp ${item.price.toLocaleString()}</span>
        </li>
      `).join("")}
    </ul>
    <small>Update terakhir: ${result.data[0]?.lastUpdate}</small>
  `;

  container.appendChild(section);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
