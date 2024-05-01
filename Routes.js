import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './resources/Home';
import About from './resources/About';
import Resources from './resources/Resources';
import Contacts from './resources/Contacts';
import Dashboard from './resources/Dashboard';
import AddInstructors from './resources/AddInstructors';
import ManageInstructors from './resources/ManageInstructors';
import AddProjects from './resources/AddProjects';
import ManageProjects from './resources/ManageProjects';
import AddGroups from './resources/AddGroups';
import ManageGroups from './resources/ManageGroups';
import Students from './resources/Students';
import Notifications from './resources/Notifications';
import StudentProfile from './resources/StudentProfile';
import GroupChat from './resources/GroupChat';
import Activity from './resources/Activity';
import GroupActivity from './resources/GroupActivity';
import GroupTask from './resources/GroupTask';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addinstructors" element={<AddInstructors />} />
      <Route path="/instructors" element={<ManageInstructors />} />
      <Route path="/addprojects" element={<AddProjects />} />
      <Route path="/projects" element={<ManageProjects />} />
      <Route path="/addgroups" element={<AddGroups />} />
      <Route path="/groups" element={<ManageGroups />} />
      <Route path="/students" element={<Students />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile/:id" element={<StudentProfile />} />
      <Route path="/groupchat" element={<GroupChat />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/groupactivity" element={<GroupActivity />} />
      <Route path="/grouptask" element={<GroupTask />} />
    </Routes>
  );
};

export default AppRoutes;