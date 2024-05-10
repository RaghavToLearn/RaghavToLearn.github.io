function showRates() {
  var selectElement = document.getElementById("countrySelect");
  var selectedCountry = selectElement.value;
  var ratesDetailsDiv = document.getElementById("ratesDetails");

  switch(selectedCountry) {
    case "US":
      ratesDetailsDiv.innerHTML = "<h3>United States</h3>" +
                       "<p>Monthly Charge: $950 - $1,360</p>" +
                       "<p>Currency: USD</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: $475 - $680 every 15 days</p>";
      break;
    case "UK":
      ratesDetailsDiv.innerHTML = "<h3>United Kingdom</h3>" +
                       "<p>Monthly Charge: £680 - £970</p>" +
                       "<p>Currency: GBP</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: £340 - £485 every 15 days</p>";
      break;
    case "Canada":
      ratesDetailsDiv.innerHTML = "<h3>Canada</h3>" +
                       "<p>Monthly Charge: $1,150 - $1,650</p>" +
                       "<p>Currency: CAD</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: $575 - $825 every 15 days</p>";
      break;
    case "EU":
      ratesDetailsDiv.innerHTML = "<h3>European Union</h3>" +
                       "<p>Monthly Charge: €795 - €1,140</p>" +
                       "<p>Currency: EUR</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: €398 - €570 every 15 days</p>";
      break;
    case "SouthAfrica":
      ratesDetailsDiv.innerHTML = "<h3>South Africa</h3>" +
                       "<p>Monthly Charge: R16,000 - R22,900</p>" +
                       "<p>Currency: ZAR</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: R8,000 - R11,450 every 15 days</p>";
      break;
    case "Nigeria":
      ratesDetailsDiv.innerHTML = "<h3>Nigeria</h3>" +
                       "<p>Monthly Charge: ₦315,000 - ₦450,000</p>" +
                       "<p>Currency: NGN</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: ₦157,500 - ₦225,000 every 15 days</p>";
      break;
    default:
      ratesDetailsDiv.innerHTML = "<p>Please select a country to view rates.</p>";
      break;
  }

  ratesDetailsDiv.style.display = "block";
}
