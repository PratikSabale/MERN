import { useState } from "react";
import React from "react";

export default function Calculator() {
  function calculate() {
    var r = document.getElementById("rate").value;

    var q = document.getElementById("quantity").value;
     
    var cal = r*q;

    document.getElementById("amount").value = cal;
  }

  return (
    <div>
      <div>
        <label for="rate">Rate : </label>
        <input type="text" id="rate" />

        <label for="quantity">Quantity : </label>
        <input type="text" id="quantity" />

        <label for="amount">Amount : </label>
        <input type="text" id="amount" readOnly />

        <button
          type="button"
          onClick={() => {
            calculate()
          }}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
