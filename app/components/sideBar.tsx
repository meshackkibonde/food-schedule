"use client";
import dashboard from "../../public/dashboard.svg";
import mySchedule from "../../public/my-schedule.svg";
import foodPlan from "../../public/food-plan.svg";
import foodDetails from "../../public/food-details.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function SideBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <ul>
        <li className="flex flex-col bg-slate-900 p-4">
          <div className="flex flex-row">
            <span className="font-semibold text-white">Plan</span>
            <span className="text-green-500 font-semibold">Your Meal</span>
          </div>
          <p className="font-extralight text-white text-xs mb-6">
            Schedule your meal. Maintain your health
          </p>
          <button className="bg-blue-500 text-white font-semibold text-xs p-2 mb-2 w-44 ms-2 hover:bg-blue-800">
            + Create schedule
          </button>
        </li>
        <div className="p-4">
          <Link
            href="/"
            className="hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-600 hover:font-extrabold"
          >
            <li className="flex flex-row p-1">
              <Image src={dashboard} alt="dashboard" />
              <p className="ms-3 text-sm p-2">Dashboard</p>
            </li>
          </Link>
          <Link
            href="/"
            className="hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-600 hover:font-extrabold"
          >
            <li className="flex flex-row p-1">
              <Image src={mySchedule} alt="dashboard" />
              <p className="ms-3 text-sm p-2">My Schedule</p>
            </li>
          </Link>
          <Link
            href="/"
            className="hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-600 hover:font-extrabold"
          >
            <li className="flex flex-row p-1">
              <Image src={foodPlan} alt="dashboard" />
              <p className="ms-3 text-sm p-2">Food plan</p>
            </li>
          </Link>
          <Link
            href="./foodDetails/"
            className="hover:text-green-500 hover:underline hover:underline-offset-4 hover:decoration-green-600 hover:font-extrabold"
          >
            <li className="flex flex-row p-1">
              <Image src={foodDetails} alt="dashboard" />
              <p
                className={clsx("ms-3 text-sm p-2", {
                  "ms-3 text-sm p-2 text-green-500 underline underline-offset-4 decoration-green-600 font-extrabold":
                    pathname === "/foodDetails",
                })}
              >
                Food details
              </p>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export { SideBar };
