$('input.date').datepicker({
    format: 'yyyy-mm-dd'
})
var myDate = new Date();
  var date = myDate.getFullYear() + '-' + ('0'+ myDate.getMonth()+1).slice(-2) + '-' + ('0'+ myDate.getDate()).slice(-2);
  $("input.date").val(date);