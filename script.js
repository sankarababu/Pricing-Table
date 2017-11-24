function toggle() {
  var monthly = document.getElementById('per_month');
  var yearly = document.getElementById('per_year');

  if (monthly.style.display == "block" && yearly.style.display == "none") {
    yearly.style.display = "block";
    monthly.style.display = "none";
  }
  else {
    yearly.style.display = "none";
    monthly.style.display = "block";
  }
}
