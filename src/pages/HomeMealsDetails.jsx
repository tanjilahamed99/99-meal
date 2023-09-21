import { useLoaderData } from "react-router-dom";

const HomeMealsDetails = () => {
    const { meals } = useLoaderData();
    console.log(meals)
    const { strArea, strMeal, strMealThumb, strIngredient1, strIngredient2,
        strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strInstructions
    } = meals[0];
    return (
        <div>
            <div className="px-32">
                <div className="flex justify-around">
                    <div>
                        <h2 className=" text-white font-bold text-xl py-5">{strMeal}</h2>
                        <img className="w-[350px]  rounded-md" src={strMealThumb} alt="" />
                    </div>
                    <div>
                        <h2 className="font-bold text-white text-xl py-5">Ingredients</h2>
                        <div className="grid grid-cols-3 text-lg font-bold text-orange-600 gap-5 pt-2">
                            <h2 className="hover:underline">{strIngredient1}</h2>
                            <h2 className="hover:underline">{strIngredient2}</h2>
                            <h2 className="hover:underline">{strIngredient3}</h2>
                            <h2 className="hover:underline">{strIngredient4}</h2>
                            <h2 className="hover:underline">{strIngredient5}</h2>
                            <h2 className="hover:underline">{strIngredient6}</h2>
                            <h2 className="hover:underline">{strIngredient7}</h2>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-orange-950 w-[80%] mx-auto my-10" />
                <div>
                    <h2 className="text-center font-bold text-xl text-white">Instructions</h2>
                    <h2 className="text-center font-medium text-sm pt-3 pb-7 text-white">{strInstructions}</h2>
                </div>
            </div>
        </div>
    );
};

export default HomeMealsDetails;