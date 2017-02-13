$(document).ready(function(){
  //parse jason to create product table
  $.getJSON("http://frontendtest.cpcstrategy.com", function(data){
    var tableRowId = 1;
    $.each(data, function(index, value){
      var client = value.client_name;
      $.each(value.products, function(index, value) {
        //create the table rows for the product table
        $('#productTable').append('<tr id='+tableRowId+'><td> '+'<img src='+value.product_image_url+'/>'+' </td><td>'+value.product_name+'</td><td>'+client+'</td></tr>');
        tableRowId++;
      });
    });
  });

//on row click of product, populate ranking table
$('#productTable').delegate('tr', 'click', function(){

  //clear table of previous row click data
  $("#rankingBody").empty();

  var productContainer = this;
  var client = productContainer.getElementsByTagName('TD')[2].innerHTML;
  var product = productContainer.getElementsByTagName('TD')[1].innerHTML;
  
  //loop through json file and retrieve ranking data for matching client and product
  $.getJSON("http://frontendtest.cpcstrategy.com", function(data){
    //drill down into client data
    $.each(data, function(index, value){
      if (value.client_name == client) {
        //drill down into product data of a client
        $.each(value.products, function(index, value) {
          if (value.product_name == product) {
            //drill down into keywords data of a product
            $.each(value.keywords, function(index) {
              var count = index;
              var countryId = value.keywords[count].keyword_country;
              //drill down into ranking data of a product
              $.each(value.keywords[count].ranks, function(index) {
                //create table rows for ranking table
                $('#rankingTable').append('<tr><td>'+product+'</td><td>'+countryId+'</td><td>'+value.keywords[count].ranks[index].rank_position+'</td><td>'+value.keywords[count].ranks[index].rank_date+'</td></tr>');
              });
            });
          }
        });
      }
    });
    //default sort ranking table by highest historical rank position
    sortRankingTable(2);
  });
});

  //filter table based on user input
  $("#myInput").keyup(function(){
    // When value of the input is not blank
        var term=$(this).val()
    if( term != "")
    {
      // Show only matching TR, hide rest of them
      $("#productTable tbody>tr").hide();
            $("#productTable td").filter(function(){
                   return $(this).text().toLowerCase().indexOf(term ) >-1
            }).parent("tr").show();
    }
    else
    {
      // When there is no input or clean again, show everything back
      $("#productTable tbody>tr").show();
    }
  });
});




