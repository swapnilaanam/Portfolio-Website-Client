import GradualSpacing from "../Shared/MagicUi/GradualSpacing";
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="px-4 lg:px-16 pt-40 bg-black" id="contactme">
      <h2 className="text-center">
        <GradualSpacing
          className="text-center text-5xl font-bold tracking-[-0.1em] text-white"
          text="Contact Me"
        />
      </h2>
      <div className="pt-28 flex justify-center items-center">
        <form action="https://formspree.io/f/xeojqkqo" method="post" className="space-y-7">
          <div className="text-white flex flex-col">
            <label className="text-3xl font-semibold mb-4">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="search-bar"
              placeholder="Name"
              required
            />
          </div>
          <div className="text-white flex flex-col">
            <label className="text-3xl font-semibold mb-4">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="search-bar"
              placeholder="Email"
              required
            />
          </div>
          <div className="text-white flex flex-col">
            <label className="text-3xl font-semibold mb-4">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              className="search-bar"
              placeholder="Subject"
              required
            />
          </div>
          <div className="text-white flex flex-col">
            <label className="text-3xl font-semibold mb-4">
              Message:
            </label>
            <textarea
              name="message"
              className="search-bar h-[70px] text-box"
              placeholder="Message"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactMe;