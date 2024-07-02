
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
import "./style.css"

export default function App(){
  // const[newItem, setNewItem] = userState("")

return (
  <>
<form className="new-iterm">
   <div className="form-row">
    <label htmlFor="item"for>New item</label>
    <input type="text" id="item"/>
   </div>
   <button className="btn">ADD</button>
</form>
<h1 className="header"> TODO LIST</h1>
<ul className="list">
  <li>
    <label>
    <input type="checkbox"/>
    item 1
    </label>
    <button className="BTN">DELETE</button>
  </li>
  <li>
    <label>
    <input type="checkbox"/>
    item 2
    </label>
    <button className="BTN">DELETE</button>
  </li>
</ul>
</>

)
}