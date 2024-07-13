import { SideBar } from "../components/sideBar";

export default function RootLayout({ children } : Readonly<{ children : React.ReactNode}>){
    return(
        <div className="grid grid-cols-12">
        <div className="col-span-2 bg-slate-200 h-[100vh]">
          <SideBar />
        </div>
        <div className="col-span-10">
            {children}
        </div>
      </div>
    )
}