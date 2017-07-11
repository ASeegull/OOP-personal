var users = [];
var user;
var fields = ['name', 'birth-date', 'address', 'phone', 'email'];
function User() {
  this.getFormValues = function () {
    var values = [];
    var i = 0;
    for (i; i <= (fields.length - 1); i++) {
      var lang = document.querySelector(`[name="${fields[i]}"]`).value;
      values.push(lang);
    }
    lang = document.querySelector('[name="sex"]:checked').value;
    values.push(lang);
    this.setUserData(values);
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


function clearInput () {
  var i = 0;
  for (i; i <= (fields.length - 1); i++) {
    document.querySelector(`[name="${fields[i]}"]`).value = "";
  }
  document.querySelector('[value="male"]').checked = true;
}

var $submit = document.querySelector('input[type="submit"]');
$submit.addEventListener('click', saveUser, false);

