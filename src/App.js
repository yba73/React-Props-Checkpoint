
import './App.css';
import Profile from './profile/profile.js'
import image from './profile/anime.png'


function App() {
  const fullName = "BEN AZOUZ Yassine"
  const bio = "my_bio"
  const profession= "Student"
  const handlName =(fullName) => alert (`My NAME is ${fullName}`)
  return (
    <div className="App">
      <header className="App-header">
      <Profile name={fullName} my_bio={bio} my_profession={profession}  handlName={handlName}>
      <img src={image} alt="anime" />
      </Profile>
      </header>
    </div>
  );
}


export default App;
