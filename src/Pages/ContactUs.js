import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div>
        <h2>Contact Us</h2>
        <div>
          <h4>Email Id</h4>
          <p>hello@lybrate.com</p>
        </div>
        <div>
          <h4>Phone No</h4>
          <p>+91 9015559900</p>
        </div>
        <div>
          <h4>Registered Address</h4>
          <p>
            3rd Floor, Capital Cyber Scape, Sector-59, Gurugram, Haryana, 122102
          </p>
        </div>
      </div>

      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
      >
        <input type="text" name="" id="" placeholder="Name" />
        <input type="text" name="" id="" placeholder="Mobile Number" />
        <input type="text" name="" id="" placeholder="Email ID" />
        <input type="text" name="" id="" placeholder="Query" />
      </form>
    </div>
  );
};
export default ContactUs;
