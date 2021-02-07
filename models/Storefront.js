const mongoose = require("mongoose");

const Catalog = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price
})

module.exports = mongoose.model('Catalog', Catalog);


<form id="Person" name="Person" onsubmit="return combine()" action="" method="GET">
  <input type="text" id="firstName" name="firstName"></input>
  <label for="firstName">First Name:</label>
  <input type="text" id="digitID" name="digitID"></input>
  <label for="digitID">Id: </label>
  <input type="submit" value="submit"></input>
</form>

<script>
  function combine() {
    let person = document.getElementById("Person");
    if (person.firstName && person.digitID) {
      alert(person.firstName + "-" + person.digitID);
    }
    else {
        return false;
    }
  }
</script>


function move(seq) {
    let loc = [0,0];
    for (let i=0:i<seq.length:i++) {
        dir = seq[i][0];
        dist = seq[i][1];
        if (dir == "left") {
            loc[0] -= dist;
        }
        else if (dir == "right") {
            loc[0] += dist;
        }
        else if (dir == "up") {
            loc[1] += dist;
        }
        else {
            loc[1] -= dist;
        }
    }
    if (loc[0] == 0 && loc[1] == 0) {
        return true;
    }
    else {
        return false;
    }
}