// import * as allimport from "./percentage.js";

// import * as allimport from "./aspect-ratio.js";

// import * as Percentage from "./percentage.js";

import { modulo, percentage, percentageOf, difference } from "./percentage.js";
// import { fixRoundingErrors, calculateAspectRatio } from "./percentage.js";

const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");
// percentage
const percentage_1 = document.querySelector("#percentage_1");
const percentage_2 = document.querySelector("#percentage_2");
const percentage_result = document.querySelector("#percentage_result");
// percentageof
const percentageOf_1 = document.querySelector("#percentageOf_1");
const percentageOf_2 = document.querySelector("#percentageOf_2");
const percentageOf_result = document.querySelector("#percentageOf_result");
// difference-form
const difference_1 = document.querySelector("#difference_1");
const difference_2 = document.querySelector("#difference_2");
const difference_result = document.querySelector("#difference_result");
// EventListener
modulo1.addEventListener("input", () => {
  const outputMOdulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputMOdulo;
});
modulo2.addEventListener("input", () => {
  const outputMOdulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputMOdulo;
});
// percentage
percentage_1.addEventListener("input", () => {
  const outputPercentage = percentage(+percentage_1.value, +percentage_2.value);
  percentage_result.value = outputPercentage;
});
percentage_2.addEventListener("input", () => {
  const outputPercentage = percentage(+percentage_1.value, +percentage_2.value);
  percentage_result.value = outputPercentage;
});

// percentageOf
percentageOf_1.addEventListener("input", () => {
  const outputPercentageOf = percentage(
    +percentageOf_1.value,
    +percentageOf_2.value
  );
  percentageOf_result.value = outputPercentageOf;
});
percentageOf_2.addEventListener("input", () => {
  const outputPercentageOf = percentage(
    +percentageOf_1.value,
    +percentageOf_2.value
  );
  percentageOf_result.value = outputPercentageOf;
});

// difference-form
difference_1.addEventListener("input", () => {
  const outputDifference = difference(+difference_1.value, +difference_2.value);
  difference_result.value = outputDifference;
});
difference_2.addEventListener("input", () => {
  const outputDifference = difference(+difference_1.value, +difference_2.value);
  difference_result.value = outputDifference;
});
