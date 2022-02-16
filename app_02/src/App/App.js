import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sitebar from "../Sitebar/Sitebar";
import './App.css'
function App(){
    return(
<>
<div className="container">
<Header></Header>
<Main></Main>
<Sitebar></Sitebar>
<Footer></Footer>



</div>
</>
    );
}
export default App;