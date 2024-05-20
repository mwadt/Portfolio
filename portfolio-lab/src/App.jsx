
import { name } from 'ejs'
import './App.css'

const mySKills = [
  {
    name: 'Javascript',
    // description: 'I started learning Javascript in 2022 and I am always trying to improve my skills.',
    comfortLevel: 7,
    frontend: true,
    backend: true
  },
  {
    name: 'CSS',
    // description: 'I started learning CSS in 2024 and enjoy the creative aspect of it.',
    comfortLevel: 6,
    frontend: true,
    backend: false
  },
  {
    name: 'HTML',
    // description: 'I started learning HTML in 2024 and I am always trying to improve my skills.',
    comfortLevel: 6,
    frontend: true,
    backend: false
  },
 
  {
    name: 'React',
    // description: 'I juste started learning React in 2024 and I am not totally comfortable using it yet.',
    comfortLevel: 3,
    frontend: true,
    backend: false
  },
  {
    name: 'Node.js',
    // description: 'I started learning Node.js in 2024.',
    comfortLevel: 6,
    frontend: false,
    backend: true
  },
  {
    name: 'Express',
    // description: 'I started learning Express in 2024',
    comfortLevel: 6,
    frontend: false,
    backend: true
  },
  {
    name: 'MongoDB',
    // description: 'I started using MongoDB in 2024',
    comfortLevel: 4,
    frontend: false,
    backend: true
  },
  {
    name: 'Python',
    // description: 'I plan to learn Python and be well versed in python by the end of the year.',
    comfortLevel: 0,
    frontend: false,
    backend: false
  },    
];

// const ulStyle = { 
//   listStyle: 'none',
//   padding: 0,
  
// };

// const mainStyle = {
//   padding: '20px',
//   color: 'black',
// };



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 0,
  height: '100%',
  width: '100%',
  color: '#FFFD82',
  backgroundColor: '#2D3047',
  fontFamily: 'Arial, sans-serif',
};



function App() {
  return (
  <>
  <div style={divStyle}>
  
  <h1>Matthew's Portolio!</h1>
  <h2>My Skills</h2>
  <ul>
    {mySKills.map((skill, index) => (
      <li key={index}>
        <h3>{skill.name}</h3>
        <p>{skill.comfortLevel > 0 ? `I am very comfortable working on projects involving ${skill.name}` : `I am not yet comfortable with ${skill.name} but I am currently learning more about it.`}</p>
        <p>Comfort Level: {skill.comfortLevel}</p>
        <p>Frontend: {skill.frontend ? 'Yes' : 'No'}</p>
        <p>Backend: {skill.backend ? 'Yes' : 'No'}</p>
      </li>
    ))}
  </ul>

</div>
</>
  )
}

export default App
