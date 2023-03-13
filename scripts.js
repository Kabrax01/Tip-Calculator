"use strict";

const bill = document.querySelector("#bill_input");
const tipSlider = document.querySelector("#tip_range");
const tipOutput = document.querySelector("#tip_output");
const tipAmount = document.querySelector("#tip_amount");
const tipTotal = document.querySelector("#tip_total");

tipSlider.addEventListener("input", function () {
  tipOutput.innerHTML = tipSlider.value + "%";
  tipAmount.textContent = Math.round(bill.value * (tipSlider.value / 100));
  tipTotal.textContent = Number(bill.value) + Number(tipAmount.textContent)
});

// var tipValue = bill * (tip/100)
// var finalBill = bill + tipValue
