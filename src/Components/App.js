import './App.css';
import Navbar from './Navbar';
import Timeline from './Timeline';
import {Link} from "react-router-dom";

function App() {
  const data = ['1/22/22', '1/29/22', '2/5/22', '2/12/22', '2/19/22', '2/26/22', '3/5/22', '3/12/22', '3/19/22', '3/16/22'];
  const ieee_data = ["IEEE Std 12207","IEEE Std 730","IEEE Std 1012","IEEE Std 1233","IEEE Std 1016","IEEE Std 829"];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 className='header-container'>
          <div className="orange-large">TheRealSeat</div><div className="white-large">&nbsp;Capstone Project</div>
        </h1>
        <Link to="/product">
          <button type="button" class="product-button">
            Product Page
          </button>
        </Link>
        <span className="project-summary-container">
          <p className="project-summary">
            Summary of proposed project:
            TheRealSeat is an event ticketing platform based in Louisville, KY. Our project proposal is to build an event
            recommendation page which will show customers events that are relevant based on an algorithm. The project is not only
            dependent on the output but also how the project is built. We want the students to execute an AWS serverless
            deployment with corresponding backend. If students want to stretch and time allows there is the option to create the
            recommendation algorithm; but at a minimum they will be hitting an endpoint. The stack should consist of React, Python,
            AWS and GitHub Actions. TypeScript is optional. The whole deployment will be serverless. TheRealSeat will provide
            technical guidance but expect the team to do the necessary reading and studying if needed
          </p>
        </span>
      </header>
      <Timeline title="Project Timeline" data={data}/>
      <Timeline title="IEEE" data={ieee_data}/>
    </div>
  );
}

export default App;
