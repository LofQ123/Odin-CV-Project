import { useState } from "react"
import './App.css'
import './Result.css'
import exampleData from "./exampleData"
import Result from './Result'
import Form from './Form'

//const data = exampleData;

function App() {
  const [template, setTemplate] = useState(2);
  const [data, setData] = useState(exampleData);

  return (
    <>
      <main>
        <div id="sidebar">
          <div id="logo">
            <h1 id="test">Odin CV Project</h1>
          </div>
          <Form data={data} setData={setData} />      
        </div>
        <Result data={data} template={template} setTemplate={setTemplate} />
      </main>
    </>
  )
}

export default App
