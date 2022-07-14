//VARIABLES
var btnAdd = document.getElementById("btnAdd");
var tBody = document.getElementById("tBody");
var totalList = document.getElementById("totalList");
var totalCheck = document.getElementById("totalCheck");
var totalCheckCout = '';

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

btnAdd.addEventListener("click", function () {
  totalList.innerHTML = listPlay.length;
});

//Inicializar variables
InitList();
totalList.innerHTML = listPlay.length;
totalCheckCout = 0;
totalCheck.innerHTML = totalCheckCout;
initCheck();

//Funciones
function InitList() {
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
            <td><center><input type="checkbox" id="`+'check'+
            x.id +
        `" class="inputCheckbox"></center></td>
            <td><center><i class="bi bi-x-square-fill"></i></center></td>
          </tr>`)
  );
}

function initCheck() {
    totalCheckCout=0;
    cont = 0;
   listPlay.forEach(
    (x) => checked(x)
   );
   totalCheck.innerHTML = totalCheckCout;
}

function checked(td){
    cont++;
    var idCheck = 'check'+cont;
    var inputCheck = document.getElementById(idCheck);
    if(td.enable === true){
        inputCheck.checked = true;
    }else{
        inputCheck.checked = false;
    }
   }

   tBody.addEventListener("change", function(){
    refreshCheck();
    console.log(totalCheckCout);
   })

function refreshCheck(){
    totalCheckCout=0;
    cont = 0;
    listPlay.forEach(
        (x) => countCheckSong()
       );
       totalCheck.innerHTML = totalCheckCout;
}

function countCheckSong(){
    cont++;
    var idCheck = 'check'+cont;
    var inputCheck = document.getElementById(idCheck);
    if(inputCheck.checked === true){
        totalCheckCout++;
        console.log(totalCheckCout);
    }
}