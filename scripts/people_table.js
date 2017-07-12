var users = [];
var user;
var fields = ['name', 'birth-date', 'address', 'phone', 'email'];
var inputElements = fields.map(function(field) {
  return document.querySelector(`[name="${field}"]`);
});

function SuperUser() {
  this.isDataVisible = true;
}
function hideUserData (e) {
  var el = e.target.parentElement;
  el.style.display = 'none';
  user.isDataVisible = false;
}

document.querySelector('tbody').addEventListener('click', hideUserData, false);



function User() {
  SuperUser.call(this);
  this.getFormValues = function () {
    var values = [];
    var i = 0;
    inputElements.forEach(function(el) {
      values.push(el.value);
    });
    var sex = document.querySelector('[name="sex"]:checked').value;
    values.push(sex);
    this.setUserData(values);
    users.push(this);
  };

  this.setUserData = function (values) {
    this.name = values[0];
    this.birth_date = values[1];
    this.address = values[2];
    this.phone = values[3];
    this.email = values[4];
    this.sex = values[5];
  };
}


function saveUser(e) {
  e.preventDefault();
  user = new User();
  user.setId();
  user.getFormValues();
  user.addTableRow();
  user.addCard();
  clearInput();
}

User.prototype.setId = function () {
  this.id = Math.floor(Math.random() * 1000);
};

User.prototype.addTableRow = function () {
  var $tbody = document.querySelector('tbody');
  var createRow = document.createElement('tr');
  createRow.setAttribute('data-id', this.id);
  $tbody.appendChild(createRow);
  var userData = [this.name, this.sex, this.birth_date, this.address, this.phone, this.email];
  var $tr = document.querySelector('[data-id=\"' + this.id + '\"]');
  userData.forEach(function (item) {
    var $tcell = document.createElement('td');
    $tcell.innerText = item;
    $tr.appendChild($tcell);
  });
};

User.prototype.addCard = function () {
  var $userList = document.querySelector('div.user-list');
  var $user = document.createElement('div');
  $user.setAttribute('data-id', this.id);
  $user.innerText = user.name;
  $userList.appendChild($user);
  document.querySelector('div[data-id=\"' + this.id + '\"]').addEventListener('click', showTableRow, false);
  };

function showTableRow (e) {
  var selectedUser = e.target.getAttribute('data-id');
  var $tr = document.querySelector('tr[data-id=\"' + selectedUser + '\"]');
  console.log($tr);
  $tr.style.display = 'table-row';
}


function clearInput () {
  inputElements.forEach(function(el) {
    el.value = "";
  });
  document.querySelector('[value="Male"]').checked = true;
}

var $submit = document.querySelector('input[type="submit"]');
$submit.addEventListener('click', saveUser, false);


function submitEnable () {

}

