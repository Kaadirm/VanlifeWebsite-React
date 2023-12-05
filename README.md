# VanlifeWebsite-React

VanlifeWebsite-React is a web application built with React for renting and exploring Vans

https://github.com/Kaadirm/VanlifeWebsite-React/assets/141996672/e072b5bd-b2bc-444d-9a6a-f0f657ebcf0c

## Table of Contents

- [VanlifeWebsite-React](#vanlifewebsite-react)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Technology Used](#technology-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#src-folder-files-structure)
  - [Responsive Images](#images)

## Demo

Check out the live demo of VanlifeWebsite-React [here](https://kaadirm.github.io/VanlifeWebsite-React/#/)


## Technology Used

- **React:** A JavaScript library for building user interfaces.
- **MirageJS:** A library for building, testing, and mocking HTTP APIs.
- **HTML:** The standard markup language for creating web pages.
- **CSS:** Cascading Style Sheets for styling the web application.
- **JavaScript:** The programming language for client-side functionality.
- **Axios-Formik:** I did not use Formik because Form is so basic and preferred the async function and fetch instead of Axios.

### React features (I wrote notes to explain some of them if it needed)

- **useState:** A React hook for managing state in functional components.
- **useEffect:** I did not use any useEffect hook for API calls, only used it for filter management.
- **react-icons:** A library providing popular icons for React applications.
- **<Link/>:** A React component for creating navigation links.
- **NavLink and isActive:** Components for creating navigation links with active states so users can see which link they are on it.
- **Outlet:** I used it to render any child component for the sake of any need.
- **useOutletContext:** A hook for accessing states or any values shared with child routes from parent routes.
- **loader**: By using the loader feature, route defined a "loader" function to provide data to the route element before it renders. So when fetching data is finished, the component mounts.
- **useLoaderData:** This hook helped me to get data that loader function returns. In any case, when fetching data is needed, loader function handles it and through useLoaderData puts the data in a state.
- **Protected Route:** A route that requires authentication to access.
- **ErrorPage:** A page displayed in case of errors.
- **errorElement:** When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for Routes, the error path will be rendered.
- **useRouteError:** Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering.
- **NotFoundPage:** A page displayed when a route or resource is not found.
- **useSearchParams(filter based on):** Functionality to filter data based on search parameters. So when the page is refreshed or the link is copied from the URL, filters will stay the same. First I used has/delete/append methods but they have some mobile incompatibility (key and value together not supported) then changed it to a new function to check the string of searchparam part of the URL.
- **useParams:** Before using loader function When I do the simple fetch request in a component, used this to get the id of data-item (from current URL matching params) for making API calls by considering to item-id. But since loader function has own params parameter we don't need this anymore.
- **useLocation and LinkState:** I used LinkSate to pass searchParams {search: `${searchParams.toString()}`}.
                                 Then I grabbed searchParams from Link  (const location = useLocation() const searchState = location.state.search)
                                 Finally, by using this searchParams we can get back to the exact page how we left (filter will all be same) <Link to={`/Vans?${searchState}`}>
- **redirect:** When users are not logged in and trying to reach protected routes they will be redirected to the Login Page with the text "You must log in first". I get that by using the loader function and the features of searchParams and request.url which is in it. We can not use useNavigate here because hooks can't be inside of a loader function they must be in the component function.
- **useNavigate:** When users logged in, I used this hook to send users back to the page where they came from (navigate(-1, {replace: true}))
- **Relative Paths:** I used Relative Paths to reach nested routes. Because when the route gets complicated it is getting difficult to write every path from scratch.
  
### Router

- **createBrowserRouter using v6.4 DATA-APIs:** Implementation of the React Router for navigation.
- This is so important cause we must use one of the v6.4 Data APIs to reach some features such as the loader, errorElement, useLoaderData, useRouteError...

Feel free to check the project's source code for a more detailed look at the project's structure and dependencies.

## Installation

1. **Clone the Repository:**
   git clone https://github.com/Kaadirm/VanlifeWebsite-React.git

2. **Navigate to the Project Directory:**
  cd VanlifeWebsite-React

3. **Install Dependencies:**
  npm install 

4. **Run the Application:**
  npm start

The application should now be running locally. Open your web browser and go to http://localhost:3000 to view the Vanlife Website.

Note: Make sure you have Node.js and npm installed on your machine before running these commands.

Now you have successfully installed and set up the VanlifeWebsite-React web application on your local environment. Feel free to explore and customize the code according to your needs!

## Usage

To reach Host Page and what is in it. <br />
username: kadir@hotmail.com (It starts with my name, but a random mail address) <br />
password: 1234


## SRC Folder Files Structure

![FolderStructure](https://github.com/Kaadirm/VanlifeWebsite-React/assets/141996672/7a37866c-22c3-4f2d-af58-6b69e52a9a41)


## Images

### Larger Screens

![VanLife-LargerScreen](https://github.com/Kaadirm/VanlifeWebsite-React/assets/141996672/599c4e8e-58fc-44ff-9a85-b02431eb7e8f)

### Mobile

![VanLife-MobileScreen](https://github.com/Kaadirm/VanlifeWebsite-React/assets/141996672/87fc401f-76b9-4f3a-b32d-b57a0de0ada6)



