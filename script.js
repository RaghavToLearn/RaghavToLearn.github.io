function showRates() {
  var selectElement = document.getElementById("countrySelect");
  var selectedCountry = selectElement.value;
  var ratesDetailsDiv = document.getElementById("ratesDetails");

  switch(selectedCountry) {
    case "US":
      ratesDetailsDiv.innerHTML = "<h3>United States</h3>" +
                       "<p>Monthly Charge: $950 - $1,360 (Based on complexity)</p>" +
                       "<p>Base Charge: $950 </p>"+
                       "<p>Currency: USD</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    case "UK":
      ratesDetailsDiv.innerHTML = "<h3>United Kingdom</h3>" +
                       "<p>Monthly Charge: £900 - £1170 (Based on complexity)</p>" +
                       "<p>Base Charge: £900 </p>"+
                       "<p>Currency: GBP</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    case "Canada":
      ratesDetailsDiv.innerHTML = "<h3>Canada</h3>" +
                       "<p>Monthly Charge: $1,250 - $1,650 (Based on complexity)</p>" +
                       "<p>Base Charge: $1,250 </p>"+
                       "<p>Currency: CAD</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    case "EU":
      ratesDetailsDiv.innerHTML = "<h3>European Union</h3>" +
                       "<p>Monthly Charge: €900 - €1,140 (Based on complexity)</p>" +
                       "<p>Base Charge: €900 </p>"+
                       "<p>Currency: EUR</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    case "SouthAfrica":
      ratesDetailsDiv.innerHTML = "<h3>South Africa</h3>" +
                       "<p>Monthly Charge: R12,000 - R15,900 (Based on complexity)</p>" +
                       "<p>Base Charge: R12,000 </p>"+
                       "<p>Currency: ZAR</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    case "Nigeria":
      ratesDetailsDiv.innerHTML = "<h3>Nigeria</h3>" +
                       "<p>Monthly Charge: ₦900,000 - ₦1,200,000 (Based on complexity)</p>" +
                       "<p>Base Charge: ₦900,000 </p>"+
                       "<p>Currency: NGN</p>" +
                       "<p>Working Hours: 2 hours per day, 5 days a week</p>" +
                       "<p>Payment Schedule: Half payment every 15 days</p>" +
                       "<div class='rate-info'>" +
                       "<h4>Payment Mode:</h4>" +
                       "<p>PhonePay / Gpay</p>" +
                       "<p>UPI number: +91-8328138429</p>" +
                       "<p>UPI Holder name: Patlolla Raghavendra Reddy</p>" +
                       "</div>";
      break;
    default:
      ratesDetailsDiv.innerHTML = "<p>Please select a country to view rates.</p>";
      break;
  }

  ratesDetailsDiv.style.display = "block";
}
