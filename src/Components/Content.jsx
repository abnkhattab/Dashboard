import Cards from "./Cards"
import Products from "./Products"
import bgImage from "../assets/imgs/dashboard-bg.jpg";
const Content = () => {
    return (
        <div 
            className="min-h-screen p-6 w-full bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

            <div className="relative z-10">
                <Cards />
                <Products />
            </div>
        </div>
    );
}

export default Content
