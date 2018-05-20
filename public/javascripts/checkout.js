var stripe = Stripe('pk_test_m6ZWLYyvkUAqJzr1fvr1uRj2')
var elements = stripe.elements();
var $form = $('#checkout-form');
var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
var card = elements.create('card', {style: style});
card.mount("#checkout-form");
$form.submit(function (event) {
  $('#charge-error').addClass('hidden');
  $('#charge-error').removeClass('visible');
  $form.find('button').prop('disabled', true);
  stripe.createToken(card,{
    number: $('#card-number').val(),
    cvc: $('#card-cvc').val(),
    exp_month: $('#card-expiry-month').val(),
    exp_year: $('#card-expiry-year').val(),
    name: $('#card-name').val()
  }, stripeResponseHandler);
  return false;
});

function stripeResponseHandler(status, response) {
  if (response.error) { // Problem!

    // Show the errors on the form
    $('#charge-error').text(response.error.message);
    $('#charge-error').removeClass('hidden');
    console.log(response.error);
    $form.find('button').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token into the form so it gets submitted to the server:
    $form.append($('<input type="" name="stripeToken" />').val(token));

    // Submit the form:
    $form.get(0).submit();


}
}