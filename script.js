/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  let newdev =arr.map((item)=>{
    if(item.profession=="developer")
      return item;
  })
  console.log(newdev)
}


function PrintDeveloperbyForEach() {
  arr.forEach(developer);
  function developer(item){
    if(item.profession=="developer"){
      console.log(item);
    }
  }
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)
}

function removeAdmin() {
  let adminremove=arr.filter((item)=>{if(item.profession!="admin") return item})
  console.log(adminremove)
}

let arr2 = [
  { id: 6, name: "kitti", age: "16", profession: "manager" },
  { id: 7, name: "zosky", age: "24", profession: "doctor" },
  { id: 8, name: "pilo", age: "39", profession: "goverment-employee" },
];
function concatenateArray() {
  let arr3 = [...arr, ...arr2]
  console.log(arr3);
}
