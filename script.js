let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchase = document.getElementById("purchase-btn");

let penTotal = cid[0][1];
let nicTotal = cid[1][1];
let dimTotal = cid[2][1];
let quaTotal = cid[3][1];
let oneTotal = cid[4][1];
let fivTotal = cid[5][1];
let tenTotal = cid[6][1];
let tweTotal = cid[7][1];
let hunTotal = cid[8][1];

let paid = Number(cash.value);
let due = Number(paid - price).toFixed(2);
let giveOut = "";

function printDrawer(num, name) {
    if (num > 0) {
      giveOut += name + ": " + num + " ";
    }
}

function countDrawer(number, name, total) {
  let count = Math.floor(due / number);
  if (total > due) {
    due -= (count * number);
    giveOut += name + ": " + (count * number) + " ";
  } else {
    due -= total;
    giveOut += name + ": " + total + " ";
  }
}

function checkCash() {
  let paid = Number(cash.value);
  if (paid < price) {
      alert("Customer does not have enough money to purchase the item"); 
} else if (paid === price) {
  changeDue.textContent = "No change due - customer paid with exact cash";
} else {
  let due = Number(paid - price).toFixed(2);
  let drawerAdd = Number(penTotal + nicTotal + dimTotal + quaTotal + oneTotal + fivTotal + tenTotal + tweTotal + hunTotal).toFixed(2);
  if (drawerAdd < due) {
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if ((due * 100) === (drawerAdd * 100)) {
    printDrawer(hunTotal, "ONE HUNDRED");
    printDrawer(tweTotal, "TWENTY");
    printDrawer(tenTotal, "TEN");
    printDrawer(fivTotal, "FIVE");
    printDrawer(oneTotal, "ONE");
    printDrawer(quaTotal, "QUARTER");
    printDrawer(dimTotal, "DIME");
    printDrawer(nicTotal, "NICKEL");
    printDrawer(penTotal, "PENNY");
    changeDue.textContent = "Status: CLOSED " + giveOut;
  } else {
    if (due > 99 && hunTotal != 0) {
      countDrawer(100, "ONE HUNDRED", hunTotal);
    }
    if (due > 19 && tweTotal != 0) {
      countDrawer(20, "TWENTY", tweTotal);
    }
    if (due > 9 && tenTotal != 0) {
      countDrawer(10, "TEN", tenTotal);
      }
    if (due > 4 && fivTotal != 0) {
      countDrawer(5, "FIVE", fivTotal);
     }
    if (due > 0.9 && oneTotal != 0) {
     countDrawer(1, "ONE", oneTotal);
     }
    if (due > 0.24 && quaTotal != 0) {
      countDrawer(0.25, "QUARTER", quaTotal);
      }
    if (due > 0.09 && dimTotal != 0) {
    countDrawer(0.1, "DIME", dimTotal);
      }
    if (due > 0.04 && nicTotal != 0) {
      countDrawer(0.05, "NICKEL", nicTotal);
      }
    if (due > 0.009 && penTotal != 0) {
      countDrawer(0.01, "PENNY", penTotal);
    }  
    }
    changeDue.textContent = "Status: OPEN " + giveOut;
  }
}

purchase.addEventListener("click", checkCash);