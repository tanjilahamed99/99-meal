import { useLoaderData } from "react-router-dom";
import HomeMeal from "./HomeMeal";


const Home = () => {
    const { meals } = useLoaderData();
    console.log(meals)
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center ">
                {
                    meals.map((meal) => <HomeMeal key={meal.idMeal} meal={meal}></HomeMeal>)
                }
            </div>
        </div>
    );
};

export default Home;