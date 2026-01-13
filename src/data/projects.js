// Components
import Portfolio from "assets/Portfolio.png";
import Code from "assets/Code.png";
import Colombine from "assets/Colombine.jpg";

const projects = [
  {
    title: "Portfolio",
    src: Portfolio,
    alt: "The front page of Sebastian's portfolio",
    skills: ["Responsive Design", "React", "Javascript", "CSS"],
    paragraphs: [
      "I built this site so that you could learn a little more about who I am and what I've built. It follows the mobile first design principle and is fully responsive. Developed as a static React site totally without the use of CSS frameworks or UI libraries. Git was used for version handling. Please check out the code on my Github for a look under the hood.",
    ],
    repoLink: "https://github.com/Hey-nes/portfolio",
  },
  {
    title: "BDP Scrape",
    src: Code,
    alt: "An AI-generated stock photo of Python code",
    disclaimer: true,
    skills: ["Python", "Selenium", "Pandas", "MySQL"],
    paragraphs: [
      "BDP Scrape is a Python-based application which uses Selenium to extract and store pricing information of broadband services. Gathers data on price, discounts offered and if there's a connection fee or a minimum contract period. The data includes pricing information from all providers across all open fiber networks in Sweden. Uses MySQL to store the data and Pandas to extract it as an Excel file. The user can select two different types of formatting of the Excel file. BDP Scrape is currently used by Telenor's marketing department for market research purposes.",
    ],
  },
  {
    title: "Slackish",
    src: Code,
    alt: "An AI-generated stock photo of Python code",
    disclaimer: true,
    skills: ["Python", "RESTful API's", "WebSockets", "Multithreading"],
    paragraphs: [
      "Slackish is a Python-based Slack application that integrates existing internal tools used to control routers, network switches and Ownit's key indexing system 'Keysafe' directly into Slack. Slackish receives user commands, parses them and forwards them to backend endpoints running Python or PHP scripts.",
      "These scripts then perform router/switch operations or query the Keysafe system. Slackish listens for script responses and relays them instantly to the correct user, using the WebSocket protocol for communication. This way Ownit's employees can troubleshoot routers, perform operations on switches or get the number of the physical key they need by simply entering a command into Slack.",
      "Slackish utilizes concurrent request handling to ensure high availability and combat throttling. A thread pool is created dynamically with a maximum of four threads per CPU core. Slackish is deployed on a Linux VM and is supervised with SupervisorCTL to ensure high availability and automatic recovery. Logging is managed by a rotating file handler, keeping three files at a time capped at 3 MB each.",
    ],
  },
  {
    title: "Colombine",
    src: Colombine,
    alt: "Image of the website of Colombine Teaterförlag",
    disclaimer: false,
    skills: ["HTML", "CSS", "PHP", "WordPress"],
    paragraphs: [
      "I, along with a colleague, rebuilt the website for Colombine Teaterförlag. The project involved creating a new mobile-first design and integrating it into their existing technical infrastructure. We also developed a company style guide and standardized email signatures. We were solely responsible for the entire process, from preparing time and cost estimates to development, launch and ongoing improvements based on user feedback.",
    ],
    siteLink: "https://colombine.se",
  },
];

export default projects;
