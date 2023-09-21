import { Link } from "react-router-dom";

const HomeMeal = ({ meal }) => {
    const { strArea, strMeal, strMealThumb } = meal
    return (
        <div className="mx-auto text-center">
            <img className="w-[250px] mx-auto rounded-md" src={strMealThumb} alt="" />
            <h2 className="text-center text-orange-400 font-bold text-xl">{strMeal}</h2>
            <br />
            <Link to={`/meal/details/${strMeal}`} className="text-orange-400 text-center text-semibold hover:underline">details</Link>
        </div>
    );
};

export default HomeMeal;