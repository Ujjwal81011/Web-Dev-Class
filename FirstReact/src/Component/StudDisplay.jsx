function App(){
  // let name = "KIET";
  // let Obj = {
  //   id:1,
  //   name:"Ujjwal",
  //   class:"React.Js" 
  // };
  // let listInfo = [
  //   {id:1,name:"Java",scope:50}, 
  //   {id:2,name:"Pyhton",scope:80}, 
  //   {id:3,name:"JS",scope:75}, 
  //   {id:4,name:"Mojo",scope:2}, 
  //   {id:5,name:"Kotlin",scope:40}
  // ];



  let StudInfo = [
    {id:234,name:"Ujjwal",score: 73}, 
    {id:227,name:"Tarun",score:78}, 
    {id:248,name:"Vishal",score:71}
  ];
  return(
  <>

  <h1> welcome to react js </h1>
  {/* <h2> Welcome to MCA {name} </h2>
  <h3> id : {Obj.id} </h3>
  <h3> name : {Obj.name} </h3>
  <h3> class : {Obj.class} </h3> */}


  {/* {
  listInfo.map((langObj)=>{
     return <h1 key={langObj.id}>{langObj.id}.Name:{langObj.name}=Scope:{langObj.scope}</h1>;
  })
  } */}


{
  StudInfo.map((Stud)=>{
     return <h2 key={Stud.id}>{Stud.id}.Name:{Stud.name}=Score:{Stud.score}</h2>;
  })
  }
  </>
  )
}

export default App;