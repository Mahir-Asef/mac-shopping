
// ==============================MEMORY SECTION=====================

function memory(size) {
  if (size == 8) {
    document.getElementById("extra-memory-cost").innerText = 0;
  } else if (size == 16) {
    document.getElementById("extra-memory-cost").innerText = 180;
  }
}
document.getElementById("memory-8gb").addEventListener("click", function () {
  memory(8);
  totalPrice();
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  memory(16);
  totalPrice();
});

// ==================STORAGE SECTION================

document
  .getElementById("256gb-ssd-storage")
  .addEventListener("click", function () {
    storageButton(256);
    totalPrice();
  });
document
  .getElementById("512gb-ssd-storage")
  .addEventListener("click", function () {
    storageButton(512);
    totalPrice();
  });
document
  .getElementById("1000gb-ssd-storage")
  .addEventListener("click", function () {
    storageButton(1000);
    totalPrice();
  });

function storageButton(storage) {
  document.getElementById(storage + "gb-ssd-storage");
  if (storage == 256) {
    document.getElementById("extra-storage-cost").innerText = 0;
  } else if (storage == 512) {
    document.getElementById("extra-storage-cost").innerText = 100;
  } else if (storage == 1000) {
    document.getElementById("extra-storage-cost").innerText = 180;
  }
}

// ====================DELIVERY SECTION=====================

function deliveryCost(date) {
  if (date == 25) {
    document.getElementById("delivery-charge").innerText = 0;
  } else if (date == 21) {
    document.getElementById("delivery-charge").innerText = 20;
  }
}
document.getElementById("free-cost").addEventListener("click", function () {
  deliveryCost(25);
  totalPrice();
});
document.getElementById("add-cost").addEventListener("click", function () {
  deliveryCost(21);
  totalPrice();
});

//  ======================TOTAL PRICE SECTION================

function totalPrice() {
  const bestPriceText = document.getElementById("best-price").innerText;
  const bestPrice = parseInt(bestPriceText);
  const extraMemoryCostText =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseInt(extraMemoryCostText);
  const extraStorageCostText =
    document.getElementById("extra-storage-cost").innerText;
  const extraStorageCost = parseInt(extraStorageCostText);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseInt(deliveryChargeText);
  const totalPrice =
    bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("promo-total").innerText = totalPrice;
  document.getElementById("promo-button").disabled = false;
}

//  =====================PROMOCODE ACCESS====================

document.getElementById("promo-button").addEventListener("click", function () {
  const promoInputValue = document.getElementById("promo-input");
  const promoInput = promoInputValue.value;
  const promoTotal = document.getElementById("promo-total").innerText;
  if (promoInput == "stevekaku") {
    let total = promoTotal * 0.8;
    promoInputValue.value = "";
    document.getElementById("promo-total").innerText = total;
    document.getElementById("promo-button").disabled = true;
    const promoError = document.getElementById("promo-error");
    promoError.style.visibility = "hidden";
  } else {
    const promoError = document.getElementById("promo-error");
    promoError.style.visibility = "visible";
    promoError.style.color = "red";
  }
});
