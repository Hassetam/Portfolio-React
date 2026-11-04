export const sectionTitles = {
    hero:{
        smallTitle: "Hi, I'm",
        title: "Hasset"
    },

    about: {
        smallTitle: "Who am I?",
        title: "About Me"
    },

    skills: {
        smallTitle: "What am I capable of doing?",
        title: "My Skills"
    },

    projects: {
        smallTitle: "What I actually did",
        title: "My Projects"
    },

    contact: {
        smallTitle: "Get in touch",
        title: "Contact Me"
    }
};

export const buttons = {
    hero: {
        project: {
            buttonText: "View My Project",
            link: "#project"
        },
        
        contact: {
            buttonText: "Let's Connect",
            link: "#contact"
        }
    },

    about: {
        PS: {
            buttonText: "Problem Solver"
        },
        DO: {
            buttonText: "Detail Oriented"
        },
        QL: {
            buttonText: "Quick Learner"
        },
        CT: {
            buttonText: "Creative-Thinker"
        }       
    },

   projects: {
    things: {
        git: {
            buttonText: "Github",
            link: "https://github.com/Hassetam/What-I-love-Project"
        },
        demo: {
            buttonText: "Live Demo",
            link: "https://what-i-love-project-omega.vercel.app/"
        }
    },

    puppy: {
        git: {
            buttonText: "Github",
            link: "https://github.com/Hassetam/puppy-lovers-page"
        },
        demo: {
            buttonText: "Live Demo",
            link: "https://puppy-lovers-page-nu.vercel.app/"
        }
    },

    apple: {
        git: {
            buttonText: "Github",
            link: "https://github.com/Hassetam/new-apple-website"
        },
        demo: {
            buttonText: "Live Demo",
            link: "https://new-apple-website-flame.vercel.app/"
        }
    },

    gym: {
        git: {
            buttonText: "Github",
            link: "https://github.com/Hassetam/Gym-Fitness-Website"
        },
        demo: {
            buttonText: "Live Demo",
            link: "https://gym-fitness-website-gamma.vercel.app/"
        }
    }

    
},

    contact: {
            buttonText: "Send Message"
        }
 
};

export const skill ={
    //Pt stands for point title, pd stands for point description
    web: {
        topic: "Web Fundamentals",
        point1: {
                 Pt: "HTML",
                 Pd: "Semantic markup, forms"
                },
        point2: {
                Pt: "CSS",
                Pd: "Flexbox, Grid, animations, responsive design"
                },   
        point3: {
                Pt: "JavaScript",
                Pd: "DOM manipulation, events, logic"
                }
    },

    programming: {
        topic: "Programming Languages",
        point1: {
                 Pt: "Python",
                 Pd: "problem solving"
                },
        point2: {
                Pt: "C++",
                Pd: "pointers, memory, algorithm basics"
                },   
        point3: {
                Pt: "Java",
                Pd: "OOP, classes, data structures"
                }
    },

    data: {
        topic: "Data and tools",
        point1: {
                 Pt: "SQL/ Databases",
                 Pd: " Queries, relational schema design"
                },
        point2: {
                Pt: "VS Code",
                Pd: "Daily driver, extensions"
                },   
        point3: {
                Pt: "Github",
                Pd: " version control, commits, repos"
                }
    }
}

export const projects= {
    things: {
        image: "./images/projects/thingsilove.jpg",
        name: "Things I Love",
        desc: "My first web development project. It was the project that made me believe I could actually build websites. While it was simple, it taught me the fundamentals of HTML and CSS and gave me the confidence to continue learning web development. It marks the beginning of my journey as a software engineering student.",
        },
    
    puppy: {
        image: "./images/projects/puppy.jpg",
        name: "Puppy Lovers Page",
        desc: " A responsive webpage built to strengthen my understanding of HTML and CSS. Through this project, I learned how to structure web pages properly, work with layouts, and apply CSS styling techniques to create a clean and visually appealing design.", 
        },

    apple: {
        image: "./images/projects/apple.jpg",
        name: "Apple First Page Cloning",
        desc: "A front-end recreation of Apple's homepage focused on achieving a modern, clean design. This project improved my skills in responsive layouts, typography, spacing, positioning, and attention to detail while recreating a professional website interface.",
        },

    gym: {
        image: "./images/projects/gym.jpg",
        name: "Gym Website",
        desc: "A complete front-end website designed for a fictional gym. This project brought together everything I had learned, including responsive design, navigation bars, hero sections, service cards, and modern UI design. It strengthened my ability to organize larger projects and create polished, user-friendly websites.",
    }
    
}
