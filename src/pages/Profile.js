import { Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Downloads from "../components/Downloads";
import SideBar from "../components/Sidebar";

const Profile = () => {
  return (
    <>
      <p>wellcome back</p>
      <SideBar />
      <Route path="/profile/dashboard" component={Dashboard} />
      <Route path="/profile/downloads" component={Downloads} />
    </>
  );
};

export default Profile;
