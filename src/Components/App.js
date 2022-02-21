import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Timeline from './Timeline';

function App() {
    const data = ['1/22/22', '1/29/22', '2/5/22', '2/12/22', '2/19/22', '2/26/22', '3/5/22', '3/12/22', '3/19/22', '3/16/22'];
    const ieee_data = ["IEEE Std 12207", "IEEE Std 730", "IEEE Std 1012", "IEEE Std 1233", "IEEE Std 1016", "IEEE Std 829"];
    return (
        <div className="App">
            <Header />
            <Timeline title="Project Timeline" data={data} />
            <Timeline title="IEEE" data={ieee_data} />
            <Footer />
        </div>
    );
}

export default App;
