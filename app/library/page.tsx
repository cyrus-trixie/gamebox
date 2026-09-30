import Card from '@/components/card';
import NavBar from '@/components/navBar';
import SideBar from '@/components/sideBar';
export default function Library() {
    return (
        <>
         <div className="flex flex-col items-center justify-center h-screen bg-[#1a1b1e] relative ">
            <NavBar/>
            <SideBar/>
            <Card/>
         </div>
        </>
    );
}