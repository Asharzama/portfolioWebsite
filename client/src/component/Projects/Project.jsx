import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

const Project = () => {
  const Data = [
    {
      name: "Google Docs Clone",
      description:
        "Created google docs clone with the help of NextJs and styled with Tailwind css. User have to login with their google account, storing data in firebase and docs interface with the help of react-draft-wysiwyg library. Authentication is done with the help of next-auth.",
      hostedLink: "https://github.com/Asharzama/Google-docs-clone",
      githubLink: "https://github.com/Asharzama/Google-docs-clone",
      techUsed: ["Firebase", "NextJs", "Tailwindcss", "Next-auth", "Draftjs"],
    },
    {
      name: "Quiz App",
      description:
        "Created a quiz app with help of React and TypeScript and styled with Styled Components. User can restart the game once the game is over as well as see the score of the quiz.",
      hostedLink: "https://gleeful-horse-aa8945.netlify.app/",
      githubLink: "https://github.com/Asharzama/quiz-app",
      techUsed: ["ReactJs", "TypeScript", "Styled Components"],
    },
    {
      name: "Hang-Man Game",
      description:
        "Created a hangman game with the help of vite and typescript. Where it displays the hangman, the keyboard as well as the result of the game. The input can be taken with the help of keyboard in the game as well as actual keyboard.",
      hostedLink: "https://luminous-platypus-321e51.netlify.app/",
      githubLink: "https://github.com/Asharzama/hangman",
      techUsed: ["Vite", "TypeScript", "Css"],
    },
    {
      name: "Registration Page",
      description:
        "This page is a registration page that allows a user to create an account. The user is required to input their first name, last name, email, phone number, and password. The page uses styled components for styling. The code contains state hooks and functions to handle alert messages when a user leaves a required field empty or enters invalid information. Once the user enters valid information, an account is created, and a success message is displayed.",
      hostedLink: "https://capable-gelato-e80bfd.netlify.app/",
      githubLink: "https://github.com/Asharzama/fudugo-registration",
      techUsed: ["ReactJS", "Styled Component"],
    },
    {
      name: "React Todo-List",
      description:
        "This project is a TODO list app built using React. It includes an input field where you can add a todo item, a button to add the item, and a dropdown menu to display all items, completed items, or incomplete items. If the todo data is empty, it shows the alert. Finally we get list of all the items, displaying the taskwork, and has buttons for checking, editing, and deleting the tasks. Each button uses a corresponding icon, from the react-icons library.",
      hostedLink: "https://cerulean-gumption-f80719.netlify.app/",
      githubLink: "https://github.com/Asharzama/TodoList",
      techUsed: ["ReactJS", "CSS"],
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "The program defines the rules and mechanics of the game of Tic Tac Toe. It is comprised of three main elements. Firstly, there is the header, which informs the players whose turn it is and, upon completion of the game, will display the name of the victorious player, or indicate if the game resulted in a tie. Secondly, there is the board. The board is comprised of a 3x3 cell structure, and it is impossible to make a move on any previously marked cell or on a completed game board. Lastly, there is the footer. This element enables the player to start a new game, resetting the board so that the game can begin again.",
      hostedLink: "https://whimsical-truffle-05a7f2.netlify.app/",
      githubLink: "https://github.com/Asharzama/tic-tac-toe",
      techUsed: ["ReactJS", "CSS"],
    },
    {
      name: "Tesla Clone",
      description:
        "The project involves developing a React-based frontend that emulates the Tesla landing page. The cloned page should utilize the Styled Components library and be fully responsive, displaying various Tesla models as well as a hamburger menu.",
      hostedLink: "https://playful-souffle-be8c06.netlify.app/",
      githubLink: "https://github.com/Asharzama/tesla-clone",
      techUsed: ["ReactJS", "Styled Component"],
    },
    {
      name: "Connect 4 Game",
      description:
        "The program defines the rules and mechanics of the game of Connect4. It comprises of three main elements. Firstly, there is a header that informs the player of whose turn it is, and upon completion of the game, it will display the victorious player or indicate if the game is tied. Secondly, there is a 4x4 cell board where it is impossible to move on any previously marked cell or on a completed game board. Lastly, the footer enables the player to start a new game or suggests the move that would help in winning.",
      hostedLink: "https://lambent-nasturtium-cfb38e.netlify.app/",
      githubLink: "https://github.com/Asharzama/connect-4",
      techUsed: ["ReactJS", "CSS"],
    },
    {
      name: "TV Show App",
      description:
        "Developed a web application using ReactJS that searched data of shows and actors with the help of API call and created the UI responsive.Implemented a search functionality on the website after identifying a drop in the user experience by adding an input field to search for the desired result of the shows. For cost efficiency, calling the API on click of enter key",
      hostedLink: "https://genuine-raindrop-610dd6.netlify.app/",
      githubLink: "https://github.com/Asharzama/TVmaze-react-project",
      techUsed: ["ReactJS", "CSS"],
    },
    {
      name: "JavaScript Todo-List",
      description:
        "This project is a TODO list app built using vanilla js. It includes an input field where you can add a todo item, a button to add the item, and a dropdown menu to display all items, completed items, or incomplete items. If the todo data is empty, it shows the alert. Finally we get list of all the items, displaying the taskwork, and has buttons for checking, editing, and deleting the tasks.",
      hostedLink: "https://delicate-torrone-87d7d2.netlify.app/",
      githubLink: "https://github.com/Asharzama/Todo-list",
      techUsed: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Base Converter",
      description:
        "This is a simple number converter web application with support for decimal, hexadecimal, octal, and binary number systems. It is made with the help of vanilla js.",
      hostedLink: "https://taupe-kheer-bf6b44.netlify.app/",
      githubLink: "https://github.com/Asharzama/Converter",
      techUsed: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Travel Page",
      description:
        "A responsive webpage for Travel Tours, with multiple pages consisting of Home, About and Contact Pages. Created the Travel Page for the website using HTML and CSS, which can be viewed by clicking on the Travel Page link on the navigation bar.",
      hostedLink: "https://snazzy-lamington-adb871.netlify.app/",
      githubLink: "https://github.com/Asharzama/Travel-Page",
      techUsed: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Photography Page",
      description:
        "This is a photography page displaying multiple photo divided into different sections created with the help of only HTML and CSS",
      hostedLink: "https://celebrated-rugelach-bfc1d6.netlify.app/",
      githubLink:
        "https://github.com/Asharzama/Fundamentals-of-web-development-HTML-Lists-Aside-Footer---Post-Class---HTML---CSS-Mini-Project--",
      techUsed: ["HTML", "CSS"],
    },
  ];
  return (
    <div className="container home" id="project">
      <div className="section-title">
        <h3>Projects</h3>
        <span className="underline"></span>
      </div>
      <div className="row">
        {Data.map((project, index) => (
          <div className="col-xl-6 col-md-6 col-sm-12" key={index}>
            <ProjectList project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
