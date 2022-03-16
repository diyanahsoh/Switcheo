
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