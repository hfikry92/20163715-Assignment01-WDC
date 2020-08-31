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

 function returnUsers(users) {    
        var filtered_users = []
        users.forEach(user => {
            filtered_users.push([user.personalInfo.name,user.email,user.personalInfo.address.state])
        });
        console.log(filtered_users)
        return filtered_users ;
}