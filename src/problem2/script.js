
$('form').on('submit', function(event) {
    event.preventDefault();
    var amount = document.getElementById("input-amount");
    var liveToast = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(liveToast)
    
    if (amount.value == 0) {
        console.log(amount.value);
        openModal();
    } else {
        amount.value = "";
        document.getElementById("input-address").value = "";
        document.getElementById("input-otp").value = "";
        toast.show();
    }
});
function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("errorModal").style.display = "block"
    document.getElementById("errorModal").classList.add("show")
}
function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("errorModal").style.display = "none"
    document.getElementById("errorModal").classList.remove("show")
}
// Some random colors
const colors = ["#012030", "#13678A", "#45C4B0", "#9AEBA3", "#DAFDBA"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 95)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
