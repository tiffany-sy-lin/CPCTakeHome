function sortProductTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("productTable");
  switching = true;
  //Set the sorting direction to ascending
  dir = "asc"; 
  //loop until no switching has been done
  while (switching) {
    //start by saying: no switching is done
    switching = false;
    rows = table.getElementsByTagName("TR");
    //loop through all rows no including first row (header row)
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching
      shouldSwitch = false;
      //grab two elements to compare
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if two rows should switch
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      //if switch has been marked, make switch and mark as done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1
      switchcount ++;      
    } else {
      //if no switching has been done and direction is ascending, 
      //set direct to descending and run
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function sortRankingTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("rankingTable");
  switching = true;
  //Set the sorting direction to ascending
  dir = "asc"; 
  //loop until no switching has been done
  while (switching) {
    //start by saying: no switching is done
    switching = false;
    rows = table.getElementsByTagName("TR");
    //loop through all rows no including first row (header row)
      for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      //grab two elements to compare
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if(n != 2){
      //check if two rows should switch
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      }
      else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      }
    }
    else if (n == 2){
      if (dir == "asc") {
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      }
      else if (dir == "desc") {
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          //if so, mark as a switch and break the loop
          shouldSwitch= true;
          break;
        }
      }
    }
    }
    if (shouldSwitch) {
      //if switch has been marked, make switch and mark as done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      //if no switching has been done and direction is ascending, 
      //set direct to descending and run
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}