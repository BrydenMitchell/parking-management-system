import './assets/css/App.css';
import {theme} from "./Theme";
import {ThemeProvider} from "@mui/material/styles";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductionsPage from "./components/ProductionsView/ProductionsPage";
import History from "./components/History/History";
import StallDataManager from "./components/StallDataManager";
import Users from "./components/Users/Users";
import Test from "./components/Test";


function App() {
    const stallDataManager = new StallDataManager(true)


    return (
        <div className="App" style={{display: 'flex'}}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<HomeScreen stallDataManager={stallDataManager} />} />
                        <Route path={"/productions"} element={<ProductionsPage stallDataManager={stallDataManager} />}/>
                        <Route path={"/history"} element={<History stallDataManager={stallDataManager} />}/>
                        <Route path={"/users"} element={<Users stallDataManager={stallDataManager} />}/>
                        <Route path={"/test"} element={<Test stallDataManager={stallDataManager} />}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
