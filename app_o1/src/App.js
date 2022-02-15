// import logo from './logo.svg';
// import { text } from 'express';
import './App.css';


const style1 = {
  fontSize: '24px',
  fontStyle : 'italic',
  color: 'red',
};

let text = 'test variable';

function App() {
let text2 = '222';
return (
<>
<div className="container">
<h1><code style = {style1}>app_1</code></h1>
<img src="/images/logo_small.png"  alt="logo"/>
<ul>
<li>Hello</li>
<li>{text+text2}</li>
</ul>
</div>

</>
);
}

export default App;
