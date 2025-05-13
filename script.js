// Format today's date in dd-MMM-yy format
function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: '2-digit' };  //month: 'short', for 3 letters
  return new Date(date).toLocaleDateString('en-GB', options).replace(/ /g, '-').toUpperCase();
}

// Set default values on page load
window.onload = function() {
  // Retrieve last saved trip number from localStorage and set it in the input
  const lastTripNumber = localStorage.getItem('lastTripNumber');
  if (lastTripNumber) {
    document.getElementById("tripNumber").value = lastTripNumber;
  }

  // Set today's date
  document.getElementById("date").value = formatDate(new Date()); 
};

function generateReceipt() {
  // Get and capitalize input values
  const tripNumber = document.getElementById("tripNumber").value.toUpperCase();
  const date = document.getElementById("date").value.toUpperCase();
  const startTime = document.getElementById("startTime").value.toUpperCase();
  const endTime = document.getElementById("endTime").value.toUpperCase();
  const from = document.getElementById("from").value.toUpperCase();
  const to = document.getElementById("to").value.toUpperCase();
  const rateNo = document.getElementById("rateNo").value.toUpperCase();
  const stand = document.getElementById("stand").value.toUpperCase();
  const miles = document.getElementById("miles").value.toUpperCase();
  const fare = document.getElementById("fare").value.toUpperCase();
  const surcharge = document.getElementById("surcharge").value.toUpperCase();
  const otherCharges = document.getElementById("otherCharges").value.toUpperCase();
  const total = document.getElementById("total").value.toUpperCase();
  const tipOther = document.getElementById("tipOther").value.toUpperCase();
  const grandTotal = document.getElementById("grandTotal").value.toUpperCase();

  // Save trip number in localStorage
  localStorage.setItem('lastTripNumber', tripNumber);

  // Generate the receipt HTML
  const receiptHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Receipt</title>
      <style>
        /* Include styles directly in the new tab */
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
		  font-size: 12px;
        }
        #receipt {
          font-size: 12px;
          text-align: left;
          border: 1px solid black;
          padding: 10px;
          width: 220px;
          margin: 0 auto;
        }
        #receipt h3 {
          text-align: center;
          margin: 0;
          margin-bottom: 0px;
        }
        .receipt-item {
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 2px 0; /* Reduced padding between items */
        }
        .receipt-item .item-value {
          text-align: right;
        }
        .centered {
          text-align: center;
          margin: 0;
          padding: 0;
          font-size: 12px;
        }
        .footer-line {
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div id="receipt">
        <h3>MOMLY CARS UK</h3>
        <h3>TAXI RECEIPT</h3>
		<br><br>
        <p class="receipt-item">TRIP# <span class="item-value">${tripNumber}</span></p>
        <p class="receipt-item">DATE <span class="item-value">${date}</span></p>
        <p class="receipt-item">START TIME <span class="item-value">${startTime}</span></p>
        <p class="receipt-item">END TIME <span class="item-value">${endTime}</span></p>
        <p class="receipt-item">FROM <span class="item-value">${from}</span></p>
        <p class="receipt-item">TO <span class="item-value">${to}</span></p>
        <p class="receipt-item">RATE NO. <span class="item-value">${rateNo}</span></p>
        <p class="receipt-item">STAND <span class="item-value">${stand}</span></p>
        <p class="receipt-item">MILES R1 <span class="item-value">${miles}</span></p>
        <p class="receipt-item">FARE1 <span class="item-value">${fare}</span></p>
        <p class="receipt-item">SURCHARGE <span class="item-value">${surcharge}</span></p>
        <p class="receipt-item">AIRPORTCHRGS <span class="item-value">${otherCharges}</span></p>
        <p class="receipt-item">TOTAL <span class="item-value">${total}</span></p>
        <p class="receipt-item">TIP/OTHER <span class="item-value">${tipOther}</span></p>
        <p class="receipt-item">GR. TOTAL <span class="item-value">${grandTotal}</span></p>
		</p>
        <p class="centered footer-line">THANK YOU</p>
        <p class="centered footer-line">MOMLY CARS UK</p>
        <p class="centered footer-line">READING RG6 4HL</p>
        <p class="centered footer-line">PH: 07927187178</p>
      </div>
	  <br><br><br>
	  <p>PAYMENT RECEIVED BY CREDIT/DEBIT CARD ON <span class="item-value">${date}</span></p>
    </body>
    </html>
  `;

  // Open a new tab and write the receipt HTML to it
  const newWindow = window.open();
  newWindow.document.write(receiptHtml);
  newWindow.document.close(); // Close the document stream to finish writing
}
