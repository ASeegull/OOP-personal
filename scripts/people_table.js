var users = [];
var user = null;
var fields = ['name', 'birth-date', 'address', 'phone', 'email'];
function User() {
  var values = [];
  var name = '';
  var birth = '';
  var address = '';
  var phone = '';
  var email = '';
  var sex = '';
  this.id = '';
}


User.prototype.getUserData = function (property) {
  return property;
};


function saveUser(e) {
  e.preventDefault();
  user = new User();
  user.setId();
  user.getFormValues();
  user.addCard();
  users.push(user);
  clearInput();
}

User.prototype.setId = function () {
 this.id = Math.floor(Math.random() * 1000);
};

User.prototype.getFormValues = function () {
  var values = [];
  var i = 0;
  for (i; i <= (fields.length - 1); i++) {
    var lang = document.querySelector(`[name="${fields[i]}"]`).value;
    values.push(lang);
  }
  lang = document.querySelector('[name="sex"]:checked').value;
  values.push(lang);
  user.setUserData(values);
};

User.prototype.setUserData = function (values) {
  name = values[0];
  birth = values[1];
  address = values[2];
  phone = values[3];
  email = values[4];
  sex = values[5];
};

User.prototype.addCard = function () {
var $userList = document.querySelector('div.user-list');
var $user = document.createElement('div');
$user.id = user.id;
$user.innerText = user.getUserData(name);
  $userList.appendChild($user);
};

function clearInput () {
  var i = 0;
  for (i; i <= (fields.length - 1); i++) {
    document.querySelector(`[name="${fields[i]}"]`).value = "";
  }
document.querySelector('[value="male"]').checked = true;
}

var $submit = document.querySelector('input[type="submit"]');
$submit.addEventListener('click', saveUser, false);