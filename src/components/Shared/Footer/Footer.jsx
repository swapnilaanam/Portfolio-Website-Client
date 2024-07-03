import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="pt-40 bg-black text-white">
            <div className="py-20 bg-[#1C2637] text-2xl font-semibold flex flex-col justify-center items-center text-center gap-3">
                <h2 className="tracking-wider">Design & Developed By Swapnil Aanam.</h2>
                <div className="flex justify-center items-center gap-2 tracking-wider">
                    <span>&copy;</span>
                    <span className="mt-1">2024. All The Rights Reserved To</span>
                    <Link to="https://swapnilaanam.com" className="mt-1 text-green-500">
                        swapnilaanam.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer