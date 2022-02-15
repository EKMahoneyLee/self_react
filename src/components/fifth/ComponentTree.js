import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import oneFlower from "./oneFlower.jpg";

function Header(props){
    return(
        <header>
            <h1>{props.name}'s Garden</h1>
        </header>
    )
}

function Main(props){
    return(
        <section>
            <p>Growing all the flowers from all of the world</p>
            <img src={oneFlower} alt="flower" width={310} height={550}/>
            <img src="https://github.com/EKMahoneyLee.png" alt="EK's pic" width={310} height={550}/> 

            {/* 키 에러 없애기 위해 i를 넣은 것을 react는 권장하지 않는다
            렌더 과정에서 에러 발생 높음, 그래서 어레이가  스트링 리턴하는 대신 오브젝트 리턴하게 코드변경 */}
            <ul style={{testAligh: "left"}}>
                {props.flowers.map((flower) => (
                    <li key={flower.id}> { flower.title } </li> ))}
            </ul>
        </section>
    )
}

function Footer(props){
    return(
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    )
}

const flowers = [
    "Ageratum",
    "Bee-Balm",
    "Crested Cockscomb"
]

// 키위해 어레이 오브젝트 리턴하게 하는과정
const flowerObject = flowers.map((flower, i ) => ({ id: i ,  title: flower})); 
console.log(flowerObject);

function App(){    
    return( 
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <Header name="EK"/>
                <Main flowers={flowerObject} />
                <Footer year={new Date().getFullYear()}/>
            </div>
        </>
    );
}
export default withRouter(App);
