

  // Coin element
  let coins = parseInt(document.querySelector("#coin-count").textContent);

  // Call buttons
  document.querySelectorAll(".btn.btn-success").forEach(btn => {
    btn.addEventListener("click", () => {
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

      
        const now = new Date();
    const timeString = now.toLocaleTimeString();

      // Alert
      alert(`Calling ${serviceName} (${serviceNumber})...`);

      // Add to call history
      const entry = document.createElement("div");
      entry.className = "flex justify-between items-center border-b pb-1";
      entry.innerHTML = `
        <span class="font-medium text-gray-700">${serviceName}</span>
        <span class="text-sm text-gray-500">${serviceNumber}</span>
      `;
      document.querySelector("#history-list").prepend(entry);
    });
  });


  // Clear history button
  document.querySelector("#clear-history").addEventListener("click", () => {
    document.querySelector("#history-list").innerHTML = "";
  });

// copy section


let copyCount = parseInt(document.querySelector("#copy-count").textContent);

document.querySelectorAll(".btn.btn-neutral.btn-outline").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest("div.p-4");
    const number = card.querySelector("span.block").textContent;

    navigator.clipboard.writeText(number).then(() => {
      alert(`${number} copied to clipboard!`);
    });

    // Copy count 
    copyCount++;
    document.querySelector("#copy-count").textContent = copyCount;
  });
});


