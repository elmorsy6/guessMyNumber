let privateNumber = Number(Math.trunc(Math.random() * 100) + 1);
let countClick = 0;
let massageClick = document.querySelector(".massage-count-click");
const guessBtn = document.querySelector(".btn-guess");
const displayMassegaUser = function (mass) {
  document.querySelector(".massage-for-user").textContent = mass;
};
guessBtn.addEventListener("click", function () {
  const guessingNumber = Number(
    document.querySelector(".guessing-number").value
  );
  countClick++;
  let finalClick = countClick;
  massageClick.textContent = finalClick;
  console.log(typeof guessingNumber, guessingNumber);
  if (guessingNumber === 0) {
    displayMassegaUser("No Number Entries ⛔");
  } else if (guessingNumber !== privateNumber) {
    displayMassegaUser(
      guessingNumber > privateNumber ? "To High 📈" : "To Low 📉"
    );
    // document.querySelector(".massage-for-user").textContent =
    //   guessingNumber > privateNumber ? "To High 📈" : "To Low 📉";
  } else {
    displayMassegaUser(`😁 Yaaay You Win With ${finalClick} tryes`);
    // document.querySelector(
    //   ".massage-for-user"
    // ).textContent = `Yaaay You Win With ${finalClick} tryes`;
  }
});
console.log(guessBtn);
console.log(privateNumber);
