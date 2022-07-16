//VARIABLES
var btnAdd = document.getElementById("btnAdd");
var tBody = document.getElementById("tBody");
var totalList = document.getElementById("totalList");
var totalCheck = document.getElementById("totalCheck");
var inputArtist = document.getElementById("inputArtist");
var inputSong = document.getElementById("inputSong");
var totalCheckCout = "";
var validate = false;

let listPlay = [
  {
    id: 1,
    artist: "Kate Bush",
    song: "running up that hill",
    enable: false,
    delete: false,
  },
  {
    id: 2,
    artist: "Dua Lipa",
    song: "Levitating",
    enable: false,
    delete: false,
  },

  {
    id: 3,
    artist: "Greta van fleet",
    song: "Safari Song",
    enable: false,
    delete: false,
  },
  { id: 4, artist: "Mgmt", song: "Youth", enable: false, delete: false },
];

//FUNCTION ADD
btnAdd.addEventListener("click", function () {
  if (validator() === true) {
    var newSong = {
      id: listPlay.length + 1,
      artist: inputArtist.value,
      song: inputSong.value,
      enable: false,
      delete: false,
    };
    listPlay.push(newSong);
  }

  refreshList();
  totalList.innerHTML = listPlay.length;
  cleanVariables();
  swal("New song add", "Your song was added to the list!", "success");
});

//Inicializar variables
refreshList();
totalList.innerHTML = listPlay.length;
totalCheckCout = 0;
totalCheck.innerHTML = totalCheckCout;
initCheck();

//REFRESH
function refreshList() {
  tBody.innerHTML = ``;
  listPlay.forEach(
    (x) =>
      (tBody.innerHTML +=
        `
          <tr>
            <th scope="row">` +
        x.id +
        `</th>
            <td>` +
        x.artist +
        `</td>
            <td>` +
        x.song +
        `</td>
            <td><center><input type="checkbox" id="` +
        "check" +
        x.id +
        `" class="inputCheckbox"></center></td>
            <td><center><i class="bi bi-x-square-fill" onclick="deletedSong(this)"></i></center></td>
          </tr>`)
  );
  totalList.innerHTML = listPlay.length;
}

function initCheck() {
  totalCheckCout = 0;
  cont = 0;
  listPlay.forEach((x) => checked(x));
  totalCheck.innerHTML = totalCheckCout;
}

function checked(td) {
  cont++;
  var idCheck = "check" + cont;
  var inputCheck = document.getElementById(idCheck);
  if (td.enable === true) {
    inputCheck.checked = true;
  } else {
    inputCheck.checked = false;
  }
}

tBody.addEventListener("change", function () {
  refreshCheck();
  console.log(totalCheckCout);
});

function refreshCheck() {
  totalCheckCout = 0;
  cont = 0;
  listPlay.forEach((x) => countCheckSong());
  totalCheck.innerHTML = totalCheckCout;
}

function countCheckSong() {
  cont++;
  var idCheck = "check" + cont;
  var inputCheck = document.getElementById(idCheck);
  if (inputCheck != null && inputCheck.checked === true) {
    totalCheckCout++;
    console.log(totalCheckCout);
  }
}

//VALIDATOR
function validator() {
  if (inputArtist.value === "") {
    validate = false;
    swal("Oops!", "Missing to add the name of the artist!", "error");
  } else if (inputSong.value === "") {
    validate = false;
    swal("Oops!", "Missing to add the name of the song!", "error");
  } else {
    validate = true;
  }
  return validate;
}

//FUNCTION DELETE
function deletedSong(songSelected) {
  var idSongSelected =
    songSelected.parentElement.parentNode.parentNode.children[0].innerHTML;
  var indexSongDelete = listPlay.findIndex((song) => song.id == idSongSelected);
  listPlay.splice(indexSongDelete, 1);
  refreshList();
  refreshCheck();
}

function cleanVariables(){
  inputArtist.value = '';
  inputSong.value = '';
}