import Blog from "./components/Blog";
import LoginPage from "./components/Login";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/login", component: LoginPage },
  { path: "/about-us", component: AboutUsPage },
  { path: "/profile", component: Profile },
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];
// Always, NotFound page bring the last element of routes array
// better to dont use ([0-9]+) or ([A-Za-z]+) for limitting URL

export default routes;
