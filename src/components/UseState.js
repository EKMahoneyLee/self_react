import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//useState
function UseState () {
  const [year, setYear] = useState(2022);
  const [manager, setManager] = useState("EK");
  const [status, setStatus] = useState("Open");
      return(
        <>
        <div className='container'>
          <h1><h4 ><Link to={'/'} >Go back to Main</Link></h4></h1>

          <h3 className='mt-4'>{ year }</h3>
          <button onClick={ () => setYear( year+1 )}>New Year!</button>

          <h3 className='mt-4'> Manager on Duty: {manager}</h3>
          <button onClick = { () => setManager("Sean")}>New Manager</button>
          <button onClick = { () => setManager("Aegi")}>another Manager</button>
          
          <h3 className='mt-4'>Status: {status}</h3>
          <button onClick={ () => setStatus("Open")}>
            Open
          </button>
          <button onClick={ () => setStatus("Back in 5")}>
            Break
          </button>
          <button onClick={ () => setStatus("Closed")}>
            Closed
          </button>
          <br></br><br></br><img src="./images/1.jpg" alt="image" width={500} height={500}/>
          </div>
        </>
      )
  }
  export default withRouter(UseState);






//array destructing
// const [ , , snack] = [
//   "candy",
//   "chocolate",
//   "ice cream"
// ];

// console.log(snack);





//React fragment
// function Lake(){return  (<h1> Lake!</h1>)}

// function SkiResort(){return  (<h1> Ski Resort</h1>)}

// function App(Props){
//     return(
//       <>
//           <h1> {Props.name}</h1>
//           <Lake/>
//           <SkiResort/>
//       </>
//     )
// }
// ReactDOM.render(
//   <App name="React" />,
//   document.getElementById('root')
// );





//Conditional rendering

// function Lake(props){
//   return  (
//     <div>
//       <h1> Visit {props.name}</h1>
//     </div>
//   )
// }

// function SkiResort(props){
//   return  (
//     <div>
//     <h1> Visit  {props.name}</h1>
//   </div>
//   )
// }

// function App(props){
//     // if(props.season === "summer") {
//     //   return <Lake name="Halifax"/>
//     // }
//     // else if(props.season === "winter"){
//     //   return <SkiResort name = "Seoul"/>
//     // }
//    // =Change to ternary if statement
//     return(
//       <div>
//         { props.season === "summer" ? 
//           (<Lake name="Halifax"/>) :
//           props.season === "winter" ? 
//           (<SkiResort name = "Seoul"/>) :
//           (
//             <h1> Come back in the winter or summer</h1>
//           ) }
//       </div>
//     )
    
// }
// ReactDOM.render(
//   <App season="fall" />,
//   document.getElementById('root')
// );





// Redering lists of objects


// Composing components

// function Lake(props){
//   return <p>{props.name}</p>
// }

//list of array
// const lakeList = [
//   "Siwa Salt Lake",
//   "Lake Timsah",
//   "Lake Burullus",
//   "Lake Nasser"
// ]

//list of object
// const lakeList = [
//   { id: "1", name : "Siwa Salt Lake",  trialhead: "Siwa Salt Lake"},
//   { id: "2", name : "Lake Timsah",  trialhead: "Lake Timsah"},
//   { id: "3", name : "Lake Burullus",  trialhead: "Siwa Salt Lake"},
//   { id: "4", name : "Lake Nasser",  trialhead: "Lake Nasser"}, 
// ]
// function App(props){
//   return  (
//   <div>
//     <h1>The lakes in Egypt</h1>
//       {/* => 다음으로 리스트를 만들자 */}
//       <ul>
//         { props.lakes.map(lake => 
//           <div key={lake.id}>
//             <h2>{lake.name}</h2>
//             <p>Accessed by: {lake.trialhead}</p>
//           </div> 
//         )}
//       </ul>

//       {/* <Lake name=" Siwa Salt Lake"></Lake>
//       <Lake name="Lake Timsah"></Lake>
//       <Lake name="Lake Burullus"></Lake>
//       <Lake name="Lake Nasser"></Lake> */}
//   </div>
//   )
// }
// ReactDOM.render(
//   <App lakes={ lakeList } />,
//   document.getElementById('root')
// );





// let city = {
//   name:"Seoul",
//   Country: "Korea"
// };

//react elements 
// ReactDOM.render(
//   //리액트돔 렌더는 두개의 argument를 취한다
//   //처음은 우리가 만들고 싶은것 두번째는 그 element를 어디에서 렌더를 할건지.
//     // React.createElement("h1", { style: { color : "red" }},"Hello"), //3개의 argument취함
//     // React.createElement("h1",null,"Hello"),
//     //first: element
//     //second: properties
//     //third: child

//     //부모 컨테이너 안에 child를 nest할 수 있다.
//     // React.createElement("div", { style: { color : "red" }},
//     // React.createElement("h1", null,"Hello")),

//     //위의 코드는 복잡한 app에는 적당하지 않으며 그래서 jsx가 소개됨
//     //babel 은 자바스크립트 컴파일러이다. 

    
//     <h1 id="heading" className='cool-text'>
//       { city.name } is in { city.Country }
//     </h1>,
//   document.getElementById('root')
// );



// react components
// function Hello(props){
//   // function Hello({ library, message, number}){
//   console.log(props);
//  console.log(Object.keys(props)); // 키만 콘솔함 ['library','message','number']
//  console.log(Object.keys(props).length); // 키만 콘솔함 ['library','message','number'] 
//   return( 
//   <div>
//     <h1>Welcome to { props.library}!</h1>
//     <h3>the second status</h3>
//     <p>{ props.message} is good</p>
//     <p>What number Do you like? {props.number}</p>
//   </div>
//   );
// }
// ReactDOM.render(
//   <Hello library="React" 
//           message="Snow day"
//           number={ 10 }>
//   </Hello>,
//   document.getElementById('root')
// );

