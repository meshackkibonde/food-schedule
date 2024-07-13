import { PrismaClient, Prisma } from "@prisma/client/extension";
import { getFoodDetails } from "../api/getFoodDetails";
import { foodData } from "../api/getFoodDetails";

const prisma = new PrismaClient();

function FoodList() {
  let foodList: foodData;
  getFoodDetails()
    .then(async (data) => {
      foodList = data;
      prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      prisma.$disconnect();
    });
  return (
    <div className="p-2">
      <table className="border border-collapse border-slate-400 w-full table-auto">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-300 p-1">Name</th>
            <th className="border border-slate-300 p-1">Unit Price</th>
            <th className="border border-slate-300 p-1">Calories</th>
            <th className="border border-slate-300 p-1">Carbohydrates</th>
            <th className="border border-slate-300 p-1">Fats</th>
            <th className="border border-slate-300 p-1">Protein</th>
            <th className="border border-slate-300 p-1">Vitamin</th>
          </tr>
        </thead>
        <tbody>
          {foodList!.map((food) => (
            <tr key={food.name}>
              <td>{food.name}</td>
              <td>{food.price}</td>
              <td>{food.calorie}</td>
              <td>{food.carbohydrate}</td>
              <td>{food.fat}</td>
              <td>{food.protein}</td>
              <td>{food.vitamin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { FoodList };
