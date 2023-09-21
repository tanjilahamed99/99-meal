const HomeMeal = ({ meal }) => {
    const { idMeal, strArea, strMeal, strMealThumb } = meal
    return (
        <div>
            <img className="w-[250px] mx-auto rounded-md" src={strMealThumb} alt="" />
            <h2 className="text-center text-orange-400 font-bold text-xl">{strMeal}</h2>
        </div>
    );
};

export default HomeMeal;