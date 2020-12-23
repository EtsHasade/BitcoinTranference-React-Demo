'us srict'

var gCurrUser = (localStorage.gCurrUser)? JSON.parse(localStorage.gCurrUser) : 
{
    name: "Gilad Galili",
    coins: 100,
    moves: [{toId: '5a566402abce24c6bfe4699d',toName: 'Dominique Soto' , amount: 25.2, time: 1608650668843}]
}

_saveUserToLocalStorage()


function getCurrUser(){
    return gCurrUser;
}

function updateUser(user) {
    gCurrUser = user
    _saveUserToLocalStorage()
}

function _saveUserToLocalStorage() {
    localStorage.setItem('gCurrUser', JSON.stringify(gCurrUser))
  }

export const userService = {
    getCurrUser,
    updateUser
} 

