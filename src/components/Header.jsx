import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5 px-10 bg-orange-950">
            <h2 className="text-4xl text-[#d57d1f] font-bold"><span className="">99 </span>Meal Box</h2>
            <nav className="flex gap-10 text-xl text-white font-semibold">
                <Link to={'/'}>Home</Link>
                <Link to={'/meal'}>Meal</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;