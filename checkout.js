  window.addEventListener('DOMContentLoaded', (event) => {

    var payButton = document.getElementById("pay-button");
    var form = document.getElementById("payment-form");

    Frames.init("pk_test_4296fd52-efba-4a38-b6ce-cf0d93639d8a");

    Frames.addEventHandler(
      Frames.Events.CARD_VALIDATION_CHANGED,
      function (event) {
        console.log("CARD_VALIDATION_CHANGED: %o", event);

        payButton.disabled = !Frames.isCardValid();
      }
    );

    Frames.addEventHandler(
      Frames.Events.CARD_TOKENIZED,
      function (event) {
        var el = document.querySelector(".success-payment-message");
        el.innerHTML = "Card tokenization completed<br>" +
          "Your card token is: <span class=\"token\">" + event.token + "</span>";
          
          //Start the API call
          fetch('https://integrations-cko.herokuapp.com/pay3d', {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            //Converting the object into JSON string
            body: JSON.stringify({
              token: event.token,
              success_url: 'https://justinplesea.github.io/checkoutpage/success.html',
              failure_url: 'https://justinplesea.github.io/checkoutpage/fail.html'
            })
          })
          .then(response=>response.json())
          .then(data => { 
          //Checking if the redirection URL is defined and redirected the user to that page.
            if(data.redirection_url){
              window.location.href = data.redirection_url;
            }
          })
          //Catching posible errors which could happend either because of request or data missing.
          .catch(err => {
            console.log('ERROR:', err);
          })
      }
    );

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      Frames.submitCard();
    });


    // Validate email field
    document.querySelectorAll('input[type=email]').forEach(element => {
        element.addEventListener('input', event => {
        var isValid = (/^.+@.+\..+$/g).test(event.target.value);
        if(isValid){
          element.classList.add('valid');
          element.classList.remove('invalid');
        } else {
          element.classList.add('invalid');
          element.classList.remove('valid');
        }
      })
    });

    // Validate name field
    document.querySelector('input[name="name"]').addEventListener('input', event => {
        var element = event.target;
        var isValid = element.value.trim().length>0;
        if(isValid){
          element.classList.add('valid');
          element.classList.remove('invalid');
        } else {
          element.classList.add('invalid');
          element.classList.remove('valid');
        }
    });
 
});
