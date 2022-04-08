import "./sidebar.css"

import { LineStyle ,PersonOutline ,GroupAdd ,DoneOutline ,RemoveCircleOutline ,ArtTrack ,LiveHelp } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar"> 
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">

                    <Link to="/admin" className="link">
                    <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>

                    <Link to="/questions" className="link">
                    <li className="sidebarListItem">
                        <LiveHelp className="sidebarIcon"/>
                        All Questions
                    </li>
                    </Link>
                    <Link to="/add" className="link">
                    <li className="sidebarListItem">
                        <LiveHelp className="sidebarIcon"/>
                        New Question
                    </li>
                    </Link>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                <Link to="/examen" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        List Examen

                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <DoneOutline className="sidebarIcon"/>
                        Valide Examen

                    </li>
                    <li className="sidebarListItem">
                        <RemoveCircleOutline/>
                        Echec Examen

                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                <Link to="/user" className="link">
                    <li className="sidebarListItem active">
                        <PersonOutline className="sidebarIcon"/>
                        Users

                    </li>
                    </Link>
                    <Link to="/adduser" className="link">
                    <li className="sidebarListItem">
                    <GroupAdd className="sidebarIcon"/>
                        Add User

                    </li>
                    </Link>
                </ul>
            </div>
        </div>
  
    </div>
  )
}
