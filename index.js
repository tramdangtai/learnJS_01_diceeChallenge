// I. Create Variable
// 1. Tạo ra biến ngẫu nhiên và nhân để cho ra phạm vi giá trị ngẫu nhiên từ 0 -> 5.99999
var randomNumber1 = Math.random() * 6;
var randomNumber2 = Math.random() * 6;
// 2. Lấy giá trị của số, rồi + 1 để trả về phạm vi giá trị từ 1 đến 6.
randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber2) + 1;

// II. Create Funciton
function headingResult(numberUser1, numberUser2) {
    if (numberUser1 === numberUser2) {
        return `Draw! <i class="ri-shake-hands-line"></i> `
    }
    else if (numberUser1 > numberUser2) {
        return `<i class="ri-flag-2-line"></i> Player 1 Wins!`
    }
    else if (numberUser1 < numberUser2) {
        return `Player 2 Wins! <i class="ri-flag-2-line"></i>`
    }
    else {
        return "Something Wrong. Please Recheck Code!"
    };
};

// III. Get Element & Set Attribute
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
document.querySelector("h1").innerHTML = headingResult(randomNumber1, randomNumber2);