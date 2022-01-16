import './App.css';
import Navbar from './Navbar';
import Background from './Background';

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <Navbar />
        <h1 className='header-container'>
          <div className="orange-large">TheRealSeat</div><div className="large-white">&nbsp;Capstone Project</div>
        </h1>
        <span class="project-summary-container">
          <code class="project-summary">
            Summary of proposed project:
            TheRealSeat is an event ticketing platform based in Louisville, KY. Our project proposal is to build an event
            recommendation page which will show customers events that are relevant based on an algorithm. The project is not only
            dependent on the output but also how the project is built. We want the students to execute an AWS serverless
            deployment with corresponding backend. If students want to stretch and time allows there is the option to create the
            recommendation algorithm; but at a minimum they will be hitting an endpoint. The stack should consist of React, Python,
            AWS and GitHub Actions. TypeScript is optional. The whole deployment will be serverless. TheRealSeat will provide
            technical guidance but expect the team to do the necessary reading and studying if needed
          </code>
        </span>
      </header>
    </div>
  );
}

export default App;
