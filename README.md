# Getting Started with Create React App

[project live => https://kaadirm.github.io/VanlifeWebsite-React/#



https://github.com/Kaadirm/VanlifeWebsite-React/assets/141996672/e072b5bd-b2bc-444d-9a6a-f0f657ebcf0c



# Project Name

VanlifeWebsite-React is a web application built with React for renting and exploring Vans

## Table of Contents

- [VanlifeWebsite-React](#vanlifewebsite-react)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Technology Used](#Technology Used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#Folder Structure)

## Demo

Check out the live demo of VanlifeWebsite-React [here](https://kaadirm.github.io/VanlifeWebsite-React/#/)


## Technology Used

- **React:** A JavaScript library for building user interfaces.
- **MirageJS:** A library for building, testing, and mocking HTTP APIs.
- **HTML:** The standard markup language for creating web pages.
- **CSS:** Cascading Style Sheets for styling the web application.
- **JavaScript:** The programming language for client-side functionality.
- **Axios-Formik:** I did not use Formik because Form is so basic and preferred the async function and fetch instead of Axios.

### React Libraries and Hooks

- **useLoaderData:** A custom hook for loading data in React components.
- **useState:** A React hook for managing state in functional components.
- **useEffect:** A React hook for handling side effects in functional components.
- **Layout:** A component or pattern used for structuring the layout of your application.
- **<Link/>:** A React component for creating navigation links.
- **Protected Route:** A route that requires authentication to access.
- **ErrorPage:** A page displayed in case of errors.
- **NotFoundPage:** A page displayed when a route or resource is not found.
- **filter based on useSearchParams:** Functionality to filter data based on search parameters. First I used has/delete/append methods but they have some mobile incompatibility (key and value together not supported) then changed it to a new function to check the string of searchparam part of the URL
- **NavLink and isActive:** Components for creating navigation links with active states.
- **useOutletContext:** A hook for accessing the context of the current route outlet.
- **useLocation and LinkState:** Hooks for accessing the current location and managing link state.

- 
- **useParam:**
- **useNavigate:**
- **react-icons:**
- **Outlet:**
- **errorElement:**
- **redirect:**
  Relative Paths
  

  
### Router

- **createBrowserRouter using v6.4 DATA-APIs:** Implementation of the React Router for navigation.
- **Loader Functions:** Functions used to load components before the page is rendered.

Feel free to check the project's source code for a more detailed look at the project's structure and dependencies.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Kaadirm/VanlifeWebsite-React.git

## Usage

To reach Host Page and what is in it. 
username: kadir@hotmail.com
password: 1234


## Folder Structure

C:\SRC
│   api.js
│   App.css
│   App.js
│   index.css
│   index.js
│   logo.svg
│   server.js
│   utils.js
│
├───Assets
│   └───images
│           avatarIcon.png
│           home.jpg
│           incomeGraph.png
│           reviewsGraph.png
│           van.jpg
│
├───Components
│       Error.jsx
│       Footer.jsx
│       Header.jsx
│       HostLayout.jsx
│       Layout.jsx
│
└───Pages
    │   About.jsx
    │   Home.jsx
    │   Login.jsx
    │   NotFound.jsx
    │
    ├───Host
    │       Dashboard.jsx
    │       HostVans.jsx
    │       HostVansDetails.jsx
    │       HostVansInfo.jsx
    │       HostVansPhoto.jsx
    │       HostVansPricing.jsx
    │       Income.jsx
    │       Reviews.jsx
    │
    └───Vans
            Vans.jsx
            VansDetail.jsx







