  window.addEventListener('DOMContentLoaded', (event) => {

  var url = window.location.search;
  var urlParams = new URLSearchParams(url);
  var sessions_id  = urlParams.get('cko-session-id');

  var request = new XMLHttpRequest()


  var url = "https://api.sandbox.checkout.com/payments/" + sessions_id;
  fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': 'sk_test_0b9b5db6-f223-49d0-b68f-f6643dd4f808',
          }
      }).then(response=>response.json())
          .then(data => {
            var payment_amount = data.amount;
            var payment_currency = data.currency;
            document.getElementById("transaction_details").innerHTML = "We received your payment of " + payment_currency + " " + payment_amount;
          })
          //Catching posible errors which could happend either because of request or data missing.
          .catch(err => {
            console.log('ERROR:', err);
          })

 
});
