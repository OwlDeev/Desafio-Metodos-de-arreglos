//VARIABLES
var btnAdd = document.getElementById("btnAdd");
var tBody = document.getElementById("tBody");
var totalList = document.getElementById("totalList");
var totalCheck = document.getElementById("totalCheck");
var inputArtist = document.getElementById("inputArtist");
var inputSong = document.getElementById("inputSong");
var totalCheckCout = "";
var validate = false;
var idSongSelected;
var totalCountStep = document.getElementById("totalCountStep");
var countStep = 0;

let listPlay = [
  {
    id: 1,
    artist: "Kate Bush",
    song: "running up that hill",
    enable: false
  },
  {
    id: 2,
    artist: "Dua Lipa",
    song: "Levitating",
    enable: false
  },

  {
    id: 3,
    artist: "Greta van fleet",
    song: "Safari Song",
    enable: false
  },
  { id: 4, artist: "Mgmt", song: "Youth", enable: false},
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
    countStep++;
    totalCountStep.innerHTML = countStep;
    swal("New song add", "Your song was added to the list!", "success");
  }

  refreshList();
  totalList.innerHTML = listPlay.length;
  cleanVariables();
});

//Inicializar variables
idSongSelected = 0;
refreshList();
totalList.innerHTML = listPlay.length;
totalCheckCout = 0;
totalCheck.innerHTML = totalCheckCout;
initCheck();
totalCountStep.innerHTML = countStep;

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
            <td><input type="checkbox" onchange="checkedSong(this)" id="` +
        "check" +
        x.id +
        `" class="inputCheckbox"></td>
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
  var idInput = 'check'+td.id;
  var inputCheckbox = document.getElementById(idInput);
  if (td.enable === true) {
    inputCheckbox.checked = true;
  } else {
    inputCheckbox.checked = false;
  }
}

tBody.addEventListener("change", function () {
  refreshCheck();
  console.log(totalCheckCout);
});

function refreshCheck() {
  totalCheckCout = 0;
  cont = 0;
  listPlay.forEach((x) => countCheckSong(x));
  totalCheck.innerHTML = totalCheckCout;
}

function countCheckSong(song) {
  var idInput = 'check'+song.id;
  var inputCheckbox = document.getElementById(idInput);
  var enableInput = song.enable;
  if (enableInput != null && enableInput === true) {
    inputCheckbox.checked = true;
    totalCheckCout++;
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
  countStep++;
  totalCountStep.innerHTML = String(countStep);
  listPlay.splice(indexSongDelete, 1);
  refreshList();
  refreshCheck();
}

//FUNCTION CHECKED
function checkedSong(songSelected) {
  idSongSelected = songSelected.parentElement.parentNode.children[0].innerHTML;
  listPlay.forEach((x) => checkListPlay(x));
  refreshCheck();
}

function cleanVariables(){
  inputArtist.value = '';
  inputSong.value = '';
}

function checkListPlay(song){
  if(song.id === Number(idSongSelected)){
    if(song.enable === true){
      song.enable = false;
    }else{
      song.enable = true;
    }
  }
}

//si se agrega uno nuevo con los elementos chequeados se desmarcan pero el marcador queda con el conteo