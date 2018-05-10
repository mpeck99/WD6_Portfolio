<footer class="fixed-bottom" style="text-align:center">
<p>Morgan Peck 2018</p>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script type="text/javascript">

  (function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('.carousel').carousel();
})();
</script>
<script>
$("#ajaxsubmit").click(function(){
       $.ajax({
           method:'POST',
           url:'/mycontroller/ajaxPars',
           data:{"email":$('#email').val(),"password":$('#password').val()},
           success:function(msg){
        
               if(msg=="invalid"){
                   $("#error").append('<p style="color:red">**Make sure your email is valid and inputs are not left empty!');
                   
               }
               else{
                $("#error").html("");
                $('#success').html("");
                $("#success").append('<p style="color:green">Successfully submitted!</p>');
               }   
           }
           
       })
   
   });
    </script>
    <script>
      $("#loginButton").click(function(){
       $.ajax({
           method:'POST',
           url:'/mycontroller/loginCheck',
           data:{"loginEmail":$('#loginEmail').val(),"loginPassword":$('#loginPassword').val()},
           success:function(loginmsg){
        
               if(loginmsg=="login invalid"){
                   alert('Please do not leave anything blank');
                   
               }
               else{
                alert('Your logged in!');
               }   
           }
           
       });
       
   });
</script>
</body>
</html>