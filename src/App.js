import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./components/StartPage";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserHomePage from "./components/UserHomePage";
import AdminHomePage from "./components/AdminHomePage";
import Maintenance from "./components/Maintenance";
import Transactions from "./components/Transactions";
import BookAvailability from './components/BookAvailability';
import IssueBook from "./components/IssueBook";
import ReturnBook from "./components/ReturnBook";
import PayFine from "./components/PayFine";
import Reports from "./components/Reports";
import MasterBookList from "./components/MasterBookList";
import MasterMovieList from "./components/MasterMovieList";
import MasterMembershipList from "./components/MasterMembershipList";
import ActiveIssues from "./components/ActiveIssues";
import OverdueReturns from "./components/OverdueReturns.js";
import IssueRequests from "./components/IssueRequests";
import AddMembershipPage from "./components/AddMembership";
import UpdateMembershipPage from "./components/UpdateMembershipPage";
import AddBookMoviePage from "./components/AddBookMoviePage";
import UpdateBookMoviePage from "./components/UpdateBookMoviePage";
import AddUserPage from "./components/AddUserPage";

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Navigate to="/start-page" />} />
        
        <Route path="/start-page" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home-page" element={<AdminHomePage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-home-page" element={<UserHomePage />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/add-membership" element={<AddMembershipPage />} />
        <Route path="/update-membership" element={<UpdateMembershipPage />} />
        <Route path="/add-book-movie" element={<AddBookMoviePage />} />
        <Route path="/update-book-movie" element={<UpdateBookMoviePage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/book-availability" element={<BookAvailability />} /> 
        <Route path="/issue-book" element={<IssueBook />} /> 
        <Route path="/return-book" element={<ReturnBook />} /> 
        <Route path="/pay-fine" element={<PayFine />} /> 
                
        <Route path="/reports" element={<Reports />} />
        <Route path="/master-book-list" element={<MasterBookList />} />
        <Route path="/master-movie-list" element={<MasterMovieList />} />
        <Route path="/master-membership-list" element={<MasterMembershipList />} />
        <Route path="/active-issues" element={<ActiveIssues />} />
        <Route path="/overdue-returns" element={<OverdueReturns />} />
        <Route path="/pending-issue-requests" element={<IssueRequests />} />

      </Routes>
    </Router>
  );
}

export default App;
