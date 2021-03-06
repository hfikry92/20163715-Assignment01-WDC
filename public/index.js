
const users = [
    {
       uid: 001,
       email: 'john@dev.com',
       personalInfo: {
          name: 'John',
          address: {
             line1: 'westwish st',
             line2: 'washmasher',
             city: 'wallas',
             state: 'WX'
          }
       }
    },
    {
       uid: 063,
       email: 'a.abken@larobe.edu.au',
       personalInfo: {
          name: 'amin',
          address: {
             line1: 'Heidelberg',
             line2: '',
             city: 'Melbourne',
             state: 'VIC'
          }
       }
    },
    {
       uid: 045,
       email: 'Linda.Paterson@gmail.com',
       personalInfo: {
          name: 'Linda',
          address: {
             line1: 'Cherry st',
             line2: 'Kangaroo Point',
             city: 'Brisbane',
             state: 'QLD'
          }
       }
    }
 ]
 
function generateHTMLTable(users, sortByName){

   if (sortByName == true) {
      users = _.sortBy(users, o => o.personalInfo.name.toLowerCase()) 
   }
   var table = document.getElementById("users_table");
   table.innerHTML = "";
   var header = table.createTHead();
   var row = header.insertRow(0);    
   var nameCell = row.insertCell(0);
   nameCell.innerHTML = "<b>Name</b>"; 
   var emailCell = row.insertCell(1);
   emailCell.innerHTML = "<b>Email</b>";
   var stateCell = row.insertCell(2);
   stateCell.innerHTML = "<b>State</b>";
   var row_i;
   for (row_i = 0; row_i < users.length; row_i++) {
      var row = table.insertRow(row_i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = users[row_i].personalInfo.name;
      cell2.innerHTML = users[row_i].email;
      cell3.innerHTML = users[row_i].personalInfo.address.state;

    
   }

}

 function returnUsers(users,sortByName) {    
        var filtered_users = []
        users.forEach(user => {
            filtered_users.push([user.personalInfo.name,user.email,user.personalInfo.address.state])
        });
        generateHTMLTable(users,sortByName)
        return filtered_users ;
}
