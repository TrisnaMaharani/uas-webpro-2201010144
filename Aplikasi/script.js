$(document).ready(function() {
    var transactions = [];
    var balance = 0;
  
    $('#form').submit(function(e) {
      e.preventDefault();
  
      var description = $('#description').val();
      var amount = parseFloat($('#amount').val());
  
      if (isNaN(amount)) {
        alert('Jumlah harus angka');
        return;
      }
  
      var transaction = {
        description: description,
        amount: amount
      };
  
      transactions.push(transaction);
  
      updateTransactionsTable();
      updateBalance();
  
      $('#description').val('');
      $('#amount').val('');
    });
  
    function updateTransactionsTable() {
      var tableBody = $('#transactions');
      tableBody.empty();
  
      for (var i = 0; i < transactions.length; i++) {
        var row = '<tr><td>' + transactions[i].description + '</td><td>' + transactions[i].amount + '</td></tr>';
        tableBody.append(row);
      }
    }
  
    function updateBalance() {
      balance = 0;
  
      for (var i = 0; i < transactions.length; i++) {
        balance += transactions[i].amount;
      }
  
      $('#balance-amount').text(balance);
    }
  });