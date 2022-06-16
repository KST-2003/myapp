
var lists = [
    ['Pencil',30,3],
    ['Book',45,12],
    ['Marker',70,3],
    ['Pen',35,10]
];

var invoice = document.getElementById('invoice');

var items = "<tr>";

for(var row = 0; row<lists.length;row++)
{
  
    items += "<td>" + (row + 1) + "</td>";
    for (var col = 0;col<lists[row].length;col++)
    {
        //console.log(lists[row][col]);
      
        items += "<td>"+lists[row][col]+ "</td>";
        var total=lists[row][1]*lists[row][2];
        var total = "<td>"+total+ "</td>";
        
    }
  
    items += total+ "</tr>";
}

invoice.innerHTML += items;

var totalamount = 0;
for (var row1 = 0; row1 < lists.length; row1++) {
    var subtotal = "<tr>";

    var amount = lists[row1][1] * lists[row1][2];
    totalamount += amount;
    subtotal += "<td></td>";
    subtotal += "<td></td><td>SubTotal</td>";
    subtotal +="<td></td>"
    subtotal += "<td>" + totalamount + "</td>";
    subtotal += "</tr>";
}
invoice.innerHTML += subtotal;

var tax = 0.06;

var final = totalamount - totalamount*tax;

var cost = "<tr>";
cost += "<td></td><td></td><td>Total</td>";
cost += "<td></td>"
cost += "<td>" + final + "</td>";
cost += "</tr>";
invoice.innerHTML += cost;