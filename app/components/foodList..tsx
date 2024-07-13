// import { PrismaClient, Prisma } from "@prisma/client/extension";
// import { getFoodDetails } from "../api/getFoodDetails";
// import { foodData } from "../api/getFoodDetails";

// const prisma = new PrismaClient();

function FoodList() {
//   let foodList: foodData;
//   getFoodDetails()
//     .then(async (data) => {
//       foodList = data;
//       prisma.$disconnect();
//     })
//     .catch(async (e) => {
//       console.error(e);
//       prisma.$disconnect();
//     });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Calories</th>
            <th>Carbohydrates</th>
            <th>Fats</th>
            <th>Protein</th>
            <th>Vitamin</th>
          </tr>
        </thead>
        <tbody>
          {/* {foodList!.map((food) => (
            <tr key={food.name}>
              <td>{food.name}</td>
              <td>{food.price}</td>
              <td>{food.calorie}</td>
              <td>{food.carbohydrate}</td>
              <td>{food.fat}</td>
              <td>{food.protein}</td>
              <td>{food.vitamin}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export { FoodList };
