# Checkout.com Order Page

This project contains the checkout, success and fail pages

## Description

For this project I have used the following languages HTML, CSS and JS.

On the checkout form I made the name field required and added JS validation that will expect from the user to type a name that is equal or greater than one character.

The field will be higlited in red if the 1st character inputed is a space.
	
The field will be higlited in green if there is 1 or more characters in the field.

On the chekout form I made the email field required and added JS validation that will expect from the user to type a valid email address.

In addition for the success and fail HTML pages, I have hosted both files on my GitHub pages in order to use the public URLs within the Pay3D API call.

Success Page: https://justinplesea.github.io/checkoutpage/success.html

Fail Page: https://justinplesea.github.io/checkoutpage/fail.html

On the successful page I'm displaying on the screen the amount and currency for the transaction.

On the fail page I'm displaying on the screen the status of the payment "Declined".

For my validation I have used the following information/test card details:

Success Payment:
------------------
Name: Task Test One

Email: tasktestone@tasktestone.co.uk

Card number:4242424242424242

CVV:100

Card type:Visa


Failed Payment:
------------------
Name: Task Test Two

Email: tasktesttwo@tasktesttwo.com

Card number:5309961755464047

CVV:100

Card type:Mastercard
