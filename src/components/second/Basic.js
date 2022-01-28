import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

// react components
function Hello(props){
  // function Hello({ library, message, number}){
  console.log(props);
  console.log(Object.keys(props)); // 키만 콘솔함 ['library','message','number']
  console.log(Object.keys(props).length); // 키만 콘솔함 ['library','message','number'] 
  return( 
  <div>
    <h1>Welcome to { props.library}!</h1>
    <p>{ props.message} is good</p>
    <p>What number Do you like? {props.number}</p>
  </div>
  );
}

//list of object
const lakeList = [
  { id: "1", name : "Siwa Salt Lake",  trialhead: "Siwa Salt Lake"},
  { id: "2", name : "Lake Timsah",  trialhead: "Lake Timsah"},
  { id: "3", name : "Lake Burullus",  trialhead: "Siwa Salt Lake"},
  { id: "4", name : "Lake Nasser",  trialhead: "Lake Nasser"}, 
]
function App(props){
  return  (
  <div>
    <h1>Rendering lists of objects</h1>
      <ul>
        { props.lakes.map(lake =>
          //keys help React keep track of which items have changes
          <div key={lake.id}> 
            <h5>{lake.name}</h5>
            <p>Accessed by: {lake.trialhead}</p>
          </div> 
        )}
      </ul>
  </div>
  )
}

//Conditional rendering
function Lake(props){return(<><h1> Visit {props.name}</h1></>)}

function SkiResort(props){return(<><h1> Visit  {props.name}</h1></>)}

function App1(props){
    return(
      <>
        <h1>Conditional Rendering</h1>
        { props.season === "summer" ? 
          (<Lake name="Halifax"/>) :
          props.season === "winter" ? 
          (<SkiResort name = "Seoul"/>) :
          (
            <h5> Come back in the winter or summer</h5>
          ) 
        }
      </>
    )
}

function Basic () {
  return(
    <>
      <div className='container mt-5'>
        <h4 ><Link to={'/'} >Go back to Main</Link></h4>
          <Hello library="React" 
                  message="Snow day"
                  number={ 10 }>
          </Hello>
        <img className='mb-5' src="../images/1-1.jpg" alt="image" width={500} height={250}/>
      
          
        <App lakes={ lakeList } />
        <img className='mb-5' src="../images/1-2.jpg" alt="image" width={500} height={350}/>

        <App1 season="fall" />
        <img className='mb-5' src="../images/1-3.jpg" alt="image" width={500} height={350}/> 
        <h4>Summary</h4>
        <img className='mb-5' src="../images/1-4.jpg" alt="image" width={500} height={550}/> 
      </div>
    </>
  )
}
export default withRouter(Basic);


// ReactDOM.render(
  //리액트돔 렌더는 두개의 argument를 취한다
  //처음은 우리가 만들고 싶은것 두번째는 그 element를 어디에서 렌더를 할건지.
    // React.createElement("h1", { style: { color : "red" }},"Hello"), //3개의 argument취함
    // React.createElement("h1",null,"Hello"),
    //first: element
    //second: properties
    //third: child

    //부모 컨테이너 안에 child를 nest할 수 있다.
    // React.createElement("div", { style: { color : "red" }},
    // React.createElement("h1", null,"Hello")),

    //위의 코드는 복잡한 app에는 적당하지 않으며 그래서 jsx가 소개됨
    //babel 은 자바스크립트 컴파일러이다. 

    
//     <h1 id="heading" className='cool-text'>
//       { city.name } is in { city.Country }
//     </h1>,
//   document.getElementById('root')
// );

//array destructing
const [ , , snack] = [
  "candy",
  "chocolate",
  "ice cream"
];
console.log(snack);
