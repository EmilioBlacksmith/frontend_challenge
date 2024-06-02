# Frontend Technical Assessment

[![Website Stat](https://img.shields.io/website-up-down-green-red/http/emilioblacksmith.github.io/frontend_challenge/)](https://emilioblacksmith.github.io/frontend_challenge/)

## 🎬 FinSphera Movie Landing Page

Welcome to the FinSphera Movie Landing Page project! This application serves as a sleek and interactive landing page for movies, showcasing a list of films along with their details. Built with React, this project demonstrates best practices in frontend development, from API integration to responsive design.

## 🤠 Overview

This FinSphera Movie Landing Page leverages the [TMDB API](https://www.themoviedb.org/) and display the a list of movies and tv shows. Users can browse through the lists and sections, view detailed information about each media and enjoy a smooth and responsive user experience.

### Features

- **Dynamic Movie and TV Show List**: Fetch and display a slider list of movies and tv shows from the Movie Database API.
- **Detailed View**: Click on a movie to view more detailed information including release date, ratings, and reviews.
- **State Management**: Utilizes Context API for managing application state.
- **API Integration**: Efficient handling of API requests to dynamically load movie data.

## 🚀 Where to Start

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EmilioBlacksmith/frontend_challenge.git
   cd finsphera-movie-landing-page
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

   Your application should now be running on `http://localhost:5173/frontend_challenge/`.

## 🌐 Deployment

This project can be easily deployed on platforms like Vercel or Netlify.

- [Vercel](https://finspheramovies-pnadi1jtv-emilioblacksmiths-projects.vercel.app)
- [Github Pages](https://emilioblacksmith.github.io/frontend_challenge/)

## 🛠️ Built With

- React
- React Context API
- Tailwind CSS
- TMDB API: Source of movies and tv shows data
- Jest for testing out utility components built for this exact project
- NerdFonts: in order to have extra special characters, I decided to use nerdfonts for this project.
- Swiper React Components: To simplify this projects design and development, I used the [Swiper React Components](https://swiperjs.com/react) to handle the sliders in the home section.

## 📚 Documentation and Architecture

Detailed documentation on project structure, state management and the **_PART 2_** of this TEST ASSESSMENT:ARCHITECTURE and can be found [here](./docs.md).

## 🧪 Testing

I have included some basic tests to demonstrate how to test utilities built for the application. To run the tests, use:

```bash
npm test
```

The components that were tested are mostly ui utilities such as:

- `src/utils/truncateText.ts` - a function to slice a paragraph based on a limit of words, so when we show the home slider, we can avoid extra amount of paragraphs when fetching the overview of the movie
- `src/utils/starSystem.ts` - for this project I used nerd fonts to be able to avoid extra icon handling, and to create a star system, so when we give this function a an average score from the reviewers, it returns a translation to stars, either, full, empty or half stars.
- `src/utils/runtime.ts` - TMDB API allows you to get the runtime data, and it's formatted in minutes, so I decided to implement a runtime function that it's prop is a number of minutes 'runtimeAmount', and returns it in hours and minutes.

## 🏗️ Future Improvements

Based on the project due date, there are some features that needed work, and some extra steps to ensure a better handling of the web components and overall security best practices:

- Search Section: due to the due date, I couldn't fully implement the search engine with the API, but this was meant to be built based on the movie and tv show section, so you do a search, fetch data from the api, and be able to load more data, based on the page number.
- Enhanced Search: Add a more advanced search functionality with filters based on score average, release date, and relevant data.
- Authentication: Implement user authentication and allow users to save favorite movies and tv shows.
- Pagination: Implement pagination for better performance with large datasets.
- Improved Detail section: Another thing that could be a great improvement in the detail section when clicking the media cards would be adding more details from a tag system for genres, actors, directors, production companies, and overall be able to deploy more information to the user for a more well rounded user experience.
- Environment Variables: this project was made without the use of environment variables to make a prototype, so most of the bearer data for the TMDB API, data that we don't want to be available, is currently public. A future improvement is to make all that data into private environment variables to be handled when deploying the app
- Services and Improvements in Context API: as a prototype this project handles fetching data is built inside each component, so an obvious improvement would be to handle all fetching in one session, with a context api built towards handling all data from both movies and series in the beginning for the `HomeSection`, so we avoid extra load outs.
