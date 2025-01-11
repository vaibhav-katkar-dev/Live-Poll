# Polling Website

This project is a full-stack web application for creating, managing, and interacting with polls in real-time. It features a user-friendly interface, real-time updates, RESTful APIs, and dynamic feedback submission with interactive design.

## Features

- **Create Polls**:
  - Users can create polls by specifying:
    - Poll Name
    - Question
    - Multiple options (unlimited)
- **View All Polls**: A dashboard lists all created polls with:
  - Poll Name
  - Number of Views
  - Click Count per Option
- **Vote on Polls**: Users can vote on any poll, and the results update in real-time.
- **Real-time Poll Views**:
  - Live updates using `Socket.IO` for views and votes.
- **Delete Polls**:
  - Remove specific polls directly from the dashboard.
- **Feedback Feature**:
  - Write and submit feedback.
  - Feedback is displayed on the same page dynamically with an **interactive design**.
- **Statistics**: Detailed statistics for each poll, including:
  - Total Views
  - Click Count for Each Option
  - Real-time Voting Activity

## Technologies and Concepts Used

### Frontend
- **HTML** and **EJS Templates** (Dynamic templating for views)
- **CSS** (Interactive design)
- **JavaScript** (Client-side interactivity)

### Backend
- **Node.js** and **Express.js** (RESTful API development)
- **Socket.IO** (Real-time communication)

### Database
- **MongoDB** (Storing poll data, feedback, views, and votes)
- **Mongoose** (Schema-based object modeling for MongoDB)

### Key Concepts
- **RESTful APIs**:
  - CRUD operations for polls and feedback.
- **Real-time Web Applications**:
  - Instantaneous updates to polls using WebSockets.
- **Dynamic Feedback System**:
  - Interactive form for submitting feedback.
  - Display feedback dynamically on the same page with a sleek design.

## Installation

1. Single Click:
   ```bash
   git clone https://github.com/vaibhav-katkar-dev/Live-Poll.git
   cd Live-Poll

    npm init -y
    npm install express ejs mongoose 
    npm install socket.io
    ```

    ## Usage

1. **Access the Dashboard**:
   - View all created polls in one place.
   - Monitor real-time voting and viewing activity.

2. **Create a New Poll**:
   - Use the "Create Poll" feature to set up a new poll.
   - Enter the following:
     - Poll Name
     - Poll Question
     - Add unlimited options for voting.

3. **Vote on a Poll**:
   - Open any poll and vote on the options.
   - Real-time voting results and statistics will be updated automatically.

4. **Manage Polls**:
   - Use the dashboard to delete polls you no longer need.

5. **Utilize the Feedback System**:
   - Write your feedback in the provided form.
   - Submit the feedback, which will be displayed dynamically on the same page with an interactive and engaging design.

---

## Screenshots

Include screenshots to illustrate key features of the application:

1. **Dashboard View**:

<!-- ![Dashboard View](path/to/dashboard-screenshot.png) -->

   - Overview of all created polls.
   - Key details such as poll names, view count, and voting statistics.

2. **Poll Creation Page**:
   - Interface for creating a new poll.
   - Fields for poll name, question, and options.

3. **Real-Time Poll Statistics**:
   - Real-time updates for voting results using Socket.IO.
   - Graphical or numerical representation of votes.

4. **Interactive Feedback Page**:
   - Engaging form for submitting feedback.
   - Feedback displayed dynamically on the same page with an eye-catching design.
#   L i v e - P o l l  
 