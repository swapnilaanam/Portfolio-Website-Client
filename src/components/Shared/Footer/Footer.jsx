import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="pt-40 px-4 lg:px-0 bg-black text-white">
            <div className="py-20 bg-[#1C2637] text-xl lg:text-2xl font-semibold flex flex-col justify-center items-center text-center gap-10 lg:gap-3">
                <h2 className="tracking-wider">Design & Developed By Swapnil Aanam.</h2>
                <div className="block lg:flex justify-center items-center gap-2 tracking-wider">
                    <span>&copy; </span>
                    <span className="lg:mt-1">2024. All The Rights Reserved To</span>
                    <Link to="https://swapnilaanam.com" className="ms-2 lg:ms-0 lg:mt-1 text-green-500">
                        swapnilaanam.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer