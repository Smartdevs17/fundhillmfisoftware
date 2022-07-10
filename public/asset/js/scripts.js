      $('#branch').on('show.bs.modal', event => {
        var button = $(event.relatedTarget);
        var modal = $(this);
        // Use above variables to manipulate the DOM
        
    });



    $('#withdraw').on('show.bs.modal', event => {
      var button = $(event.relatedTarget);
      var modal = $(this);
      // Use above variables to manipulate the DOM
      
  });

  $('#deposit').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM
    
});


$('#statement').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#marketer').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#esusuwithdraw').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#esusudeposit').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#product').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#depositloan').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});


$('#withdrawloan').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#editproduct').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#deleteproduct').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#addloan').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});


$('#disburseloan').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#payloan').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#loanhistory').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

$('#expenses').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});


var modalConfirm = function(callback){
  
  $("#btn-confirm").on("click", function(){
    $("#mi-modal").modal('show');
  });

  $("#modal-btn-si").on("click", function(){
    callback(true);
    $("#mi-modal").modal('hide');
  });
  
  $("#modal-btn-no").on("click", function(){
    callback(false);
    $("#mi-modal").modal('hide');
  });
};


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})