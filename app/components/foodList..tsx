import { PrismaClient, Prisma } from "@prisma/client/extension";
import { getFoodDetails } from "../api/getFoodDetails";

const prisma = new PrismaClient();

function FoodList() {
  let foodList: any;
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
          {foodList!.map((food: any) => (
            <tr key={food.id}>
              <td className="border border-slate-300">{food.name}</td>
              <td className="border border-slate-300">{food.price}</td>
              <td className="border border-slate-300">{food.calorie}</td>
              <td className="border border-slate-300">{food.carbohydrate}</td>
              <td className="border border-slate-300">{food.fat}</td>
              <td className="border border-slate-300">{food.protein}</td>
              <td className="border border-slate-300">{food.vitamin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { FoodList };
