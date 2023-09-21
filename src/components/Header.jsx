import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between container mx-auto pt-5">
            <h2 className="text-2xl font-bold"><span className="text-purple-500">99 </span>Meal Box</h2>
            <nav className="flex gap-10 text-xl font-semibold">
                <Link>Home</Link>
                <Link>Meal</Link>
                <Link>About</Link>
            </nav>
        </div>
    );
};

export default Header;