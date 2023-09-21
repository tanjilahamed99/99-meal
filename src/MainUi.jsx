import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainUi = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-orange-950">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainUi;