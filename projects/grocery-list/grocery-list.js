$(document).ready( function() {
  for (var category in list) {
    var categoryList = list[category];
    for (var item in categoryList) {
      var categoryID = '#' + category;
      console.log(categoryID);
      $item = $('<p>' + categoryList[item].name + "     " + categoryList[item].quantity + '</p>');
      $item.addClass('item');
      $item.appendTo(categoryID + '-category-list');
    }
  }

  $(document).on('click', '.item', function() {
      $(this).remove();
  });

  $(document).on('click', '#print-icon', function() {
      // var myWindow = window.open('','','width=200,height=100')
      var myWindow = window.open();
      var listText = ""
      $(".category-list").each(function( index ) {
        $listItems = $(this + ":nth-child(0)");
        console.log($listItems);
      });
      myWindow.document.write(listText);
      myWindow.print();
  });

  $(document).on('click', '#trash-icon', function() {
      $(".category-list").each(function( index ) {
        $(this).empty();
      });
  });

  $(document).keydown(function(e) {
    if (e.which==13){
      $(".category-list").each(function( index ) {
        $input = $(this).prev()
        var item = $input.find('.name-input').val();
        var quantity = $input.find('.quantity-input').val();

        // If textbox has item and quantity
        if (item != "" && quantity != null) {
          $item = $('<p>' + item + ' ' + quantity + '</p>');
          $item.addClass('item');
          $item.appendTo(this);
          $input.find('.name-input').val('');
          $input.find('.quantity-input').val(1);
        }
      });

      // var quantityToAdd = $('input[class=quantity-input]').val();
      // console.log(this);
      // console.log(quantityToAdd);
      // var itemAndQuantityToAdd = "<p>"+itemToAdd + "     " + quantityToAdd+"</p>";
      // $(this).append(itemAndQuantityToAdd);
      // $(itemAndQuantityToAdd).addClass('item');
    };
  });

});

// Draw Grocery List title

// Create Item class

function item(name, quantity) {
  this.name = name;
  this.quantity = quantity;
};
item.prototype.changeQuantity = function(new_quantity) {
  this.quantity = new_quantity;
};

// Declare initial list
var list = {
  produce: [],
  pantry: [],
  meat: []
};

// var list = {
//   produce: [new item("apple",3), new item("lettuce",1), new item("banana",5)],
//   pantry: [new item("rice",1), new item("beans",2)],
//   meat: [new item("chicken",1), new item("salmon",1), new item("smoked salmon",1), new item("beef",1), new item("salmon",1), new item("smoked salmon",1), new item("beef",1)]
// };