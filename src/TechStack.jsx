import { Link } from "react-router-dom";

function CyberPortfolio() {
  return (
    <div className="tech-stacks">
      <div className="mystack">
        <div className="see">
          <h2>Cybersecurity Portfolio</h2>
          <Link to="/tech-stack">View All</Link>
        </div>

        <div className="category">
          <h3>Offensive Security</h3>
          <div className="skills">
            <span>Ethical Hacking Basics</span>
            <span>Penetration Testing</span>
            <span>Web App Security</span>
            <span>CTF Challenges</span>
          </div>
        </div>

        <div className="category">
          <h3>Defensive Security</h3>
          <div className="skills">
            <span>Threat Detection</span>
            <span>Log Analysis</span>
            <span>System Hardening</span>
            <span>Incident Response</span>
          </div>
        </div>

        <div className="category">
          <h3>Networking & Systems</h3>
          <div className="skills">
            <span>TCP/IP</span>
            <span>Network Scanning</span>
            <span>Linux Administration</span>
            <span>Windows Security Basics</span>
          </div>
        </div>

        <div className="category">
          <h3>Tools</h3>
          <div className="skills">
            <span>Kali Linux</span>
            <span>Nmap</span>
            <span>Wireshark</span>
            <span>Burp Suite</span>
            <span>Metasploit</span>
            <span>Git & GitHub</span>
          </div>
        </div>

        <div className="category">
          <h3>Programming & Scripting</h3>
          <div className="skills">
            <span>Python</span>
            <span>Bash</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div className="whoami">
        <h5>b3rl1n@kali ~ $ whoami</h5>
        <br />

        <p>
          Jhon Aldrix Bernil | b3rl1n | PH<br /><br />
        </p>

        <p>
          Polytechnic University of the Philippines<br /><br />
        </p>

        <p>
          Cybersecurity student focused on ethical hacking, penetration testing,
          and defensive security practices.<br /><br />

          Actively learning through CTFs, labs (TryHackMe / Hack The Box style environments),
          and real-world security concepts.<br /><br />

          Passionate about understanding how systems break — and how to secure them.
        </p>

        <p>
          Member of A1SBERG cybersecurity community.
        </p>
      </div>
    </div>
  );
}

export default CyberPortfolio;