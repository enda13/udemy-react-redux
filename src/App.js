
function App() {
  const profiles = [
    {name: "Tom", age: 10},
    {name: "Mary", age: 15}
  ]
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}></User>
      })}
    </div>
  );
}

function User(props) {
  return (
    <div>
      Hi, I'm {props.name} and {props.age} years old!
    </div>
  )
}

User.defaulProps = {
  age: 21
}

export default App;
