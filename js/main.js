// To allow only numbers
function checkKeyIsDigit(vm, event) {
  return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 46;
}

// observable data to add new row
function Order(data) {
  var self = this;
  self.orderid = ko.observable();
  self.product = ko.observable();
  self.category = ko.observable();
  self.quantity = ko.observable();
  self.checkAvl =  ko.observable();
  self.selectedDiscount = ko.observableArray();
  
}

// ViewModel start
function OrderForm() {
  var self = this;
  
  // To show category dropdown
  self.categoryList = ko.observableArray([
    {name: 'Electronics'},
    {name: 'Clothes'},
    {name: 'Accessories'},
    {name: 'Appliances'}
  ]);
  
  // To show discount checkboxes
  self.discoutList = ko.observableArray([
    {name: 'HDFC Bank'},
    {name: 'SBI Bank'},
    {name: 'Master Card'}
  ]);
  
  self.orders = ko.observableArray();
  
  // addnew row click event
  self.addOrder = function() {
    self.orders.push(new Order());
  };
  
  // delete row click event
  self.deleteOrder = function(qual) {
    self.orders.remove(qual);
  };
  
  self.button1Visible = ko.observable(false);
  // submit button click event
  self.saveOrder = function() {
    
    if(!self.button1Visible())
        self.button1Visible(!self.button1Visible());
  };
  
  // reset button click event
  self.resetOrder = function() {
    self.button1Visible(!self.button1Visible());
    self.orders.removeAll();
  };
}
// ViewModel end
var vm = new OrderForm();
ko.applyBindings(vm);

