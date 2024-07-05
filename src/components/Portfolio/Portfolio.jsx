import GradualSpacing from "../Shared/MagicUi/GradualSpacing"
import Project from "../Project/Project";
import "./Portfolio.css";
import 'aos/dist/aos.css';

const Portfolio = () => {
    return (
        <section className="px-4 lg:px-16 pt-40 bg-black overflow-hidden" id="portfolio">
            <h2 className="text-center">
                <GradualSpacing
                    className="text-center text-5xl font-bold tracking-[-0.01em] text-white"
                    text="Portfolio"
                />
            </h2>
            <div className="pt-28 flex flex-col justify-center items-center space-y-28">
                <Project
                    imageNumber={1}
                    name="Doctorii"
                    desc="Doctorii is an online doctor appointment website, where patients can book appointments of doctors online. Patients can book any diagnostic test and get medical help from emergency doctors through online chats."
                    features={[
                        "Patients can book doctor’s appointments online, book tickets for diagnosis tests, and get medical help from emergency doctors through online chat.",
                        "Doctors can add their preferred time and weekdays for taking online appointments. Emergency doctors can manage all their online chats through a separate dashboard.",
                        "Doctorii has separate dashboards for patients, doctors, and admins, from where they can see and manage their booked appointments (using a calendar UI), booked tests, and test results."
                    ]}
                    tech={[
                        "Next JS",
                        "React JS",
                        "TypeScript",
                        "Node JS",
                        "Express JS",
                        "MongoDB",
                        "Next Auth",
                        "Socket.io",
                        "Tailwind CSS",
                        "Stripe API"
                    ]}
                    liveLink="https://doctorii-app.vercel.app"
                    clientLink="https://github.com/swapnilaanam/doctorii-next"
                    serverLink="https://github.com/swapnilaanam/doctorii-next"
                />
                <Project
                    imageNumber={2}
                    name="Food Masters"
                    desc="Food Masters is a food delivery app/website, where foodies can find their favorite restaurants' menus and order food directly to their doorstep. Food Masters is the love maker between foodies and restaurants."
                    features={[
                        "Foodies can find a restaurant by searching using the name, selecting a specific category, or from the All Restaurants page. After adding food to the cart, they can place their order by paying through SSL Commerz(like Stripe), online.",
                        "Restaurant owners have a separate dashboard-like portion named Food Masters Business, from where they can add new food items to their restaurants, and edit or remove existing food items.",
                        "There is a separate dashboard page for both the foodies and restaurant owners, where they can see different useful stats. Both also have an orders page that helps them track the current status of their ordered foods and previous orders."
                    ]}
                    tech={[
                        "Next JS", 
                        "React JS", 
                        "JavaScript", 
                        "Node JS", 
                        "Express JS", 
                        "REST APIs",
                        "AOS", 
                        "Mongoose", 
                        "MongoDB", 
                        "Firebase", 
                        "JWT", 
                    ]}
                    liveLink="https://food-masters-next.vercel.app"
                    clientLink="https://github.com/swapnilaanam/food-masters-next"
                    serverLink="https://github.com/swapnilaanam/food-masters-server"
                />
                <Project
                    imageNumber={3}
                    name="Vhara Bari"
                    desc="Vhara Bari is a house/property rental website that allows house owners to upload their houses for rental on our website and tenants to rent those houses."
                    features={[
                        "Tenants on the website can find rental houses using the search by city name feature or the rental houses page. There is also an agent feature available for tenants who are having difficulty finding their desired houses. They can book houses using an online card payment system(stripe).",
                        "House owners have a separate dashboard from where they can see important stats about their house. They can add their house for rental and from my houses page they can edit or remove that house from the website.",
                        "Admins also have a separate dashboard from where they can see important information about the website. Admins have the power to approve or reject rental houses added by the owners. They also can free up an already rented house upon request from tenants or house owners."
                    ]}
                    tech={[
                        "React JS", 
                        "JavaScript", 
                        "Node JS", 
                        "Express JS", 
                        "MongoDB", 
                        "Firebase", 
                        "JWT",
                        "Tailwind CSS",  
                        "React Router",
                        "Vite", 
                        "Vercel"
                    ]}
                    liveLink="https://vhara-bari-client.vercel.app"
                    clientLink="https://github.com/swapnilaanam/Vhara-Bari-Client"
                    serverLink="https://github.com/swapnilaanam/food-masters-server"
                />
            </div>
        </section>
    )
}

export default Portfolio;