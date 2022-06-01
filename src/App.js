import logo from './logo.svg';
import './App.css';

function App() {
  // JS ends
  // JSX Starts
  const names=["Kumar","Nithish","Aswin" ];
  const students=[
    {
      name:"Kumar" ,
      pic:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"
    },
    {
      name:"Nithish" ,
      pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg"
    },
    {
      name:"Aswin" ,
      pic:"https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-Photo-1.jpg"
    }
  ];
  return(
    <div className="App">
{/*       
      <Message name="Kumar" pic="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"/>
      <Message name="Nithish" pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg"/>
      <Message name="Aswin" pic="https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-Photo-1.jpg"/> */}
      {students.map((student)=>(
        <Welcome name={student.name} pic={student.pic} />
      ))}
    </div>
  );
  // JSX ends
}

export default App;


// function Message(props){
//   console.log(props);
  // return<>
  // <img className="profile-pic" src={props.pic} alt={props.name}/>
  // <h1>Hello, {props.name}</h1>
  // </>
// }

function Welcome(props){
  return<>
  <img className="profile-pic" src={props.pic} alt={props.name}/>
  <h1>Hello, {props.name}</h1>
  </>

}