import { Link } from "react-router-dom";

function TechStack() {
  return (
    <div className="tech-stacks">
      <div className="mystack">
        <div className="see">
          <h2>Cybersecurity Portfolio</h2>
          <Link to="/tech-stack">View All</Link>
        </div>

        <div className="category">
          <h3>Skills</h3>
          <div className="skills">
            <span>Basic Ethical Hacking</span>
            <span>Networking Basics</span>
            <span>Linux Basics</span>
            <span>CTF Practice</span>
          </div>
        </div>

        <div className="category">
          <h3>Tools</h3>
          <div className="skills">
            <span>Kali Linux</span>
            <span>Nmap</span>
            <span>Wireshark</span>
            <span>Burp Suite</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className="category">
          <h3>Programming</h3>
          <div className="skills">
            <span>Python (Basic)</span>
            <span>JavaScript (Basic)</span>
          </div>
        </div>
      </div>

      <div className="whoami">
        <h5>b3rl1n@kali ~ $ whoami</h5>
        <br />

        <p>Jhon Aldrix Bernil | b3rl1n | PH</p>
        <br />

        <p>Polytechnic University of the Philippines</p>
        <br />

        <p>
          IT student learning cybersecurity, networking, and ethical hacking.
          I am still a beginner, but I am practicing through CTFs and labs to improve my skills.
        </p>

        <p>A1SBERG cybersecurity organization member.</p>
      </div>
    </div>
  );
}

export default TechStack