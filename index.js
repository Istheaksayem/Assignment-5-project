document.addEventListener("DOMContentLoaded", function () {
  const favCount = document.getElementById("fav-count");
  const heartIcons = document.querySelectorAll(".fa-heart");

  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      let current = parseInt(favCount.textContent, 10);
      favCount.textContent = current + 1;
    });
  });
});

// Coin element
let coins = parseInt(document.querySelector("#coin-count").textContent, 10);

// Call buttons
document.querySelectorAll(".btn.btn-success").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.p-4");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector("span.block").textContent;

    if (coins < 20) {
      alert("Not enough coins to make this call. You need at least 20.");
      return;
    }

    // Deduct coins
    coins -= 20;
    document.querySelector("#coin-count").textContent = coins;

    // Time generate
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    // Alert
    alert("Calling " + serviceName + " (" + serviceNumber + ")...");

    // Add to call history
    const entry = document.createElement("div");
    entry.className = "flex justify-between items-center border-b pb-1";
    entry.innerHTML = `
      <div>
        <span class="font-medium text-gray-700">${serviceName}</span><br>
        <span class="text-sm text-gray-500">${serviceNumber}</span>
      </div>
      <span class="text-xs text-gray-400">${timeString}</span>
    `;
    document.querySelector("#history-list").prepend(entry);
  });
});

// Clear history button
document.querySelector("#clear-history").addEventListener("click", function () {
  document.querySelector("#history-list").innerHTML = "";
});

// Copy section
let copyCount = parseInt(document.querySelector("#copy-count").textContent, 10);

document.querySelectorAll(".btn.btn-neutral.btn-outline").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.p-4");
    const number = card.querySelector("span.block").textContent;

    navigator.clipboard.writeText(number).then(function () {
      alert(number + " copied to clipboard!");
    });

    copyCount++;
    document.querySelector("#copy-count").textContent = copyCount;
  });
});