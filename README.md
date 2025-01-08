# Socrative Frontend

This project is a “clone” of the Socrative frontend, built using React and TypeScript. To maintain simplicity, I utilized raw CSS instead of relying on libraries. Through this project, I gained valuable insights into React and found many similarities and differences to iOS development, especially in how components are structured. While there are numerous areas for improvement, I hope this project demonstrates my ability to quickly learn and adapt to new tools, as well as my committment to quickly ramping up on the Socrative team.

Some potential improvements with more time could include:
- Implementing global state management like Redux (skipped in interest of time).
- Adaptive design to account for different screen sizes.
- Adding unit tests and making components more testable.
- More robust error handling and fallback behaviours.
- Utilizing WebSockets for real-time live results.
- Modularizing features into smaller, reusable components.
- Enhancing the styling, as CSS posed the most notable differences compared to iOS layouts.
- Improving authentication and security flow.

## Installation

1. **Clone the Repository**
   `git clone https://github.com/lymburn/socrative-web.git`

2. **Install dependencies**  
   `npm install`

4. **Start the app**  
    `npm run dev`

## Features

### Authentication
- Registration: Allow teachers to create an account.
- Teacher Login: Secure login for teachers.
- Student Room Join: Simple interface for students to join a quiz session by providing their name and room ID.

### Quiz Management
- Quiz Editor: Create and delete quizzes with questions and answer options.
- Quiz Library: View all quizzes created by a teacher.

### Quiz Sessions
- Launch Quiz: Teachers can start a quiz session in their assigned room.
- Live Quiz Participation: Students can interact with ongoing quizzes and submit answers in real time.

### Results Visualization
- Student Results: View detailed responses and scores for each student, with toggles to show or hide names, responses, and results.

### Student Quiz
- Quiz Submissions: Quiz flow after a student joins a room, where they're able to answer questions and get feedback on submission.
