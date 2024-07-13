"use client";

import { useEffect, useState } from "react";
import { postFoodDetails } from "../api/postFoodDetails";
import { PrismaClient } from "@prisma/client/extension";
import { FoodList } from "../components/foodList.";

export default function FoodDetails() {
  const prisma = new PrismaClient();
  const [foodDetails, setFoodDetails] = useState({});
  let displayFoodForm = () => {
    let foodForm = document.getElementById("foodForm");
    foodForm!.className = "block";
  };
  let hideFoodform = () => {
    let foodForm = document.getElementById("foodForm");
    foodForm!.className = "hidden";
  };

  let addFoodDetails = () => {
    let foodName = document.getElementById("name");
    let unitPrice = document.getElementById("price");
    let calories = document.getElementById("calorie");
    let carbohydrates = document.getElementById("carbohydrate");
    let fats = document.getElementById("fat");
    let proteins = document.getElementById("protein");
    let vitamins = document.getElementById("vitamin");

    setFoodDetails({
      name: foodName,
      price: unitPrice,
      calorie: calories,
      carbohydrate: carbohydrates,
      fat: fats,
      protein: proteins,
      vitamin: vitamins,
    });
  };

  useEffect(() => {
    async () => {
      await postFoodDetails(foodDetails)
        .then(async () => prisma.$disconnect())
        .catch(async (e) => {
          console.error(e);
          prisma.$disconnect();
        });
    };
  }, [foodDetails]);

  return (
    <div>
      <div className="w-full flex justify-end items-end p-5">
        <button
          className="bg-blue-500 p-1 rounded-md w-12 text-white font-bold text-lg hover:bg-blue-700"
          onClick={displayFoodForm}
        >
          +
        </button>
      </div>
      <div className="hidden" id="foodForm">
        <div className="grid w-full items-center justify-center">
          <div className="flex flex-col shadow-sm shadow-slate-400 p-4 border border-slate-300">
            <div className="w-full flex justify-end items-end mb-5">
              <button
                className="bg-red-500 w-8 text-white font-bold text-sm hover:bg-red-700"
                onClick={hideFoodform}
              >
                x
              </button>
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">Name</label>
              <input
                id="name"
                type="text"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
                required
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">
                Price <span className="text-xs font-extralight">(per kg)</span>
              </label>
              <input
                id="price"
                type="number"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
                required
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">
                Calories <span className="text-xs font-extralight">(gms)</span>
              </label>
              <input
                id="calorie"
                type="number"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
                required
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">
                Carbohydrates{" "}
                <span className="text-xs font-extralight">(gms)</span>
              </label>
              <input
                id="carbohydrate"
                type="number"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">
                Fats <span className="text-xs font-extralight">(gms)</span>
              </label>
              <input
                id="fat"
                type="number"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">
                Protein <span className="text-xs font-extralight">(gms)</span>
              </label>
              <input
                id="protein"
                type="number"
                className="basis-1/3 border border-slate-200 focus:outline focus:outline-none focus:ring
                        focus:ring-slate-100 rounded-md text-sm p-1"
              />
            </div>
            <div className="flex flex-row mb-3">
              <label className="basis-2/3 me-4 p-1">Vitamins</label>
              <select id="vitamin" className="text-sm p-1 rounded-md">
                <option value="Present">Present</option>
                <option value="Not present">Not present</option>
              </select>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white p-1 w-full hover:bg-blue-800"
                onClick={addFoodDetails}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <FoodList />
    </div>
  );
}
