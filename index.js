const friendPlan = document.getElementById("friendPlan");
const familyPlan = document.getElementById("familyPlan");
const concessionairePlan = document.getElementById("concessionairePlan");

const buttonFriendPlan = document.getElementById("onePlan");
const buttonFamilyPlan = document.getElementById("twoPlan");
const buttonconcessionairePlan = document.getElementById("threePlan");

const mouth = document.getElementById("mouth");
const debit = document.getElementById("debit");
const buyMouthOrYear = document.getElementById("mouthOrYear");
const advantagePaymentWay = document.getElementById("advantage-off");

const purchaseButton = document.getElementById("purchaseButton");

const buttonCloseLoginDiv = document.getElementById("closeLoginDiv");
const reportPurchase = document.getElementById("reportPurchase");
const alertIncorrectData = document.getElementById("alertIncorrectData");
const inputLoginEmail = document.getElementById("inputLoginEmail");
const inputLoginPhone = document.getElementById("inputLoginPhone");
const inputLoginChampion = document.getElementById("inputLoginChampion");
const loginButton = document.getElementById("loginButton");

function showFriendPlan() {
    friendPlan.style.display = "flex";
    familyPlan.style.display = "none";
    concessionairePlan.style.display = "none"
};

function showFamilyPlan() {
    friendPlan.style.display = "none";
    familyPlan.style.display = "flex";
    concessionairePlan.style.display = "none"
};

function showConcessionairePlan () {
    friendPlan.style.display = "none";
    familyPlan.style.display = "none";
    concessionairePlan.style.display = "flex"
};

choiceMouthOrYear();
buyMouthOrYear.checked = false;

function choiceMouthOrYear() {
    if (buyMouthOrYear.checked === true) {
        debit.classList.add("checkedYear");
        mouth.classList.remove("checkedMouth");
        advantagePaymentWay.innerText = "Em 3 parcelas";
    } else {
        mouth.classList.add("checkedMouth");
        debit.classList.remove("checkedYear");
        advantagePaymentWay.innerText = "5% de desconto";
    }
};

function complitionPurchase() {
    reportPurchase.style.display = "flex"
}

function closeLoginDiv() {
    reportPurchase.style.display = "none"
}

function loginForPurchase() {
    if (inputLoginEmail.value == "" || inputLoginPhone.value == "" || inputLoginChampion.value == "") {
        alertIncorrectData.innerText = "insira algo"
    } else {
        window.open("https://github.com/hudsonF13");
        alertIncorrectData.innerText = ""
    }
}

buttonFriendPlan.addEventListener("click", showFriendPlan);
buttonFamilyPlan.addEventListener("click", showFamilyPlan);
buttonconcessionairePlan.addEventListener("click", showConcessionairePlan);
buyMouthOrYear.addEventListener("change", choiceMouthOrYear);
purchaseButton.addEventListener("click", complitionPurchase);
buttonCloseLoginDiv.addEventListener("click", closeLoginDiv);
loginButton.addEventListener("click", loginForPurchase);