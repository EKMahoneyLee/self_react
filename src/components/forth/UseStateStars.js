import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import { FaStar } from "react-icons/fa"; //=> npm install react-icons --save //npm install @react-icons/all-files --save
import React,  {  useState } from 'react';


const createArray = (length) => [   //이것은 헬러 펑션으로 어레이 생성
  ...Array(length)
];

function Star( { selected = false , onSelect }){
  return <FaStar color = { selected ? "#6fc27c" : "#0f4d19" }
                  onClick = { onSelect } />; //one of many icons
}

function StarRating({ totalStars = 5 }){
  const[selectedStars, setSelectedStars] = useState(0) //0 왜냐하면 앱이 랜더될 때 아무것도 선택되어지는 것을 원하지 않기 때문이다 
  return (
    <>
    <h5>Rate the movie that you watched yesterday!</h5>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} 
              selected = { selectedStars > i}  this is going to keep track baced on the index
              onSelect = { () => setSelectedStars( i + 1 ) } 
        />
      ))}
      <p> {selectedStars} of {totalStars}</p>
    </>
  );
}

function App(){
  return( 
    <StarRating totalStars = {10}/> //user input => use line 17 is default star number
  );
}

function UseStateStars () {
  return(
    <>
      <div className='container mt-5'>
        <h4 ><Link to={'/'} >Go back to Main</Link></h4>
          <App />
  
        {/* <img className='mb-5' src="../images/1-1.jpg" alt="image" width={500} height={250}/> */}
      </div>
      </>
  )
}
export default withRouter(UseStateStars);
