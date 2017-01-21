class AcmeDB{
    constructor({users}){
        this.users = users;
        this.users[0].id = 1;
	//use addUser... loop over all users
    }
    addUser(obj){//naming call this user
       var maxId;//use reduce function to find the max
        maxId = this.users[this.users.length-1].id;
        this.users.push(obj);
        this.users[this.users.length-1].id = maxId +1;
    }
    showUsers(){
	//shorten this up by using the map function.
        var userList = [];
		this.users.forEach(function(user){
			userList.push(user.name);
        })
         return userList.join();
    }
    findById(id){
        //console.log(this.users);
        var target;
	//instead use the map function and then join
        this.users.forEach(function(user){
            if(user.id ===id){
                target =user;
            }
            //return target;
        })
            return target;
    }
    removeUserById(id){
	//use the filter function, it will be much cleaner
        var remove = 0;
		this.users.forEach(function(user, index){
			if (id === user.id){
				remove = index;
			}
		});
		this.users.splice(remove,1);


    }
    editUser(obj){//editing call this editedUser
	    //probably easiest to use map function- just replace the user within the map function callback
            var swap = 0;
		this.users.forEach(function(user, index){
			if (obj.id === user.id){
				swap = index;
			}
		});
		this.users[swap] = obj;		
    }

    
}

console.log("hello")//take these out... :)
export default AcmeDB;
