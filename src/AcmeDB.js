class AcmeDB{
    constructor({users}){
        this.users = users;
        this.users[0].id = 1;
    }
    addUser(obj){
       var maxId;
        maxId = this.users[this.users.length-1].id;
        this.users.push(obj);
        this.users[this.users.length-1].id = maxId +1;
    }
    showUsers(){
        var userList = [];
		this.users.forEach(function(user){
			userList.push(user.name);
        })
         return userList.join();
    }
    findById(id){
        //console.log(this.users);
        var target;
        this.users.forEach(function(user){
            if(user.id ===id){
                target =user;
            }
            //return target;
        })
            return target;
    }
    removeUserById(id){
        var remove = 0;
		this.users.forEach(function(user, index){
			if (id === user.id){
				remove = index;
			}
		});
		this.users.splice(remove,1);


    }
    editUser(obj){
            var swap = 0;
		this.users.forEach(function(user, index){
			if (obj.id === user.id){
				swap = index;
			}
		});
		this.users[swap] = obj;		
    }

    
}

console.log("hello")
export default AcmeDB;