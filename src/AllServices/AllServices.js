import { NavLink, Route, Routes } from "react-router-dom";
import Birthday from "./Birthday";
import CateringAndDecor from "./CateringAndDecor";
import Corporate from "./Corporate";
import Entertainment from "./Entertainment";
import Floral from "./Floral";
import HelpingMembers from "./HelpingMembers";
import InvitationCards from "./InvitationCards";
import PhotosAndVideos from "./PhotosAndVideos";
import VenueSelection from "./VenueSelection";
import Wedding from "./Wedding";

export default function AllServices() {
  return (
    <div>
      <div className="container-fluid allservices-header" style={{ backgroundImage: "linear-gradient(to right, rgba(245, 95, 93, 0.9), rgba(255, 195, 42, 0.9)), url(../../images/birthday-bg.jpg)" }}>
        <div className="allservices-header-heading">
          <Routes>
            <Route path="/birthdays" element={<>Birthday</>} />
            <Route path="/wedding" element={<>Wedding</>} />
            <Route path="/corporate" element={<>Corporate</>} />
            <Route path="/party-and-events" element={<>Party and Events</>} />
            <Route path="/floral" element={<>Floral</>} />
            <Route path="/photos-and-videos" element={<>Photos and Videos</>} />
            <Route path="/entertainment" element={<>Entertainment</>} />
            <Route path="/catering-and-decor" element={<>Catering and Decor</>} />
            <Route path="/venue-selection" element={<>Venue Selection</>} />
            <Route path="/invitation-cards" element={<>Invitation Cards</>} />
          </Routes>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row allservices-main-container">
          <div className="col-sm-3 order-12 order-sm-first" style={{ padding: "0% 1% 0% 2%" }}>
            <div className="allservices-menubox">
              <div className="allservices-menu-heading">Services</div>
              <ul className="allservices-menu">
                <NavLink to="birthdays">
                  <li className="allservices-menu-li allservices-menu-active">Birthdays</li>
                </NavLink>
                <NavLink to="wedding">
                  <li className="allservices-menu-li">Wedding</li>
                </NavLink>
                <NavLink to="corporate">
                  <li className="allservices-menu-li">Corporate</li>
                </NavLink>
                <NavLink to="party-and-events">
                  <li className="allservices-menu-li">Party and Events</li>
                </NavLink>
                <NavLink to="floral">
                  <li className="allservices-menu-li">Floral</li>
                </NavLink>
                <NavLink to="photos-and-videos">
                  <li className="allservices-menu-li">Photo, Video and Audio</li>
                </NavLink>
                <NavLink to="entertainment">
                  <li className="allservices-menu-li">Entertainment</li>
                </NavLink>
                <NavLink to="catering-and-decor">
                  <li className="allservices-menu-li">Catering and Decor</li>
                </NavLink>
                <NavLink to="venue-selection">
                  <li className="allservices-menu-li">Venue Selection</li>
                </NavLink>
                <NavLink to="invitation-cards">
                  <li className="allservices-menu-li" style={{ border: "none" }}>
                    Invitation Card
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="col-sm-9 allservices-details">
            <Routes>
              <Route path="/birthdays" element={<Birthday />} />
              <Route path="/wedding" element={<Wedding />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/party-and-events" element={<Birthday />} />
              <Route path="/floral" element={<Floral />} />
              <Route path="/photos-and-videos" element={<PhotosAndVideos />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/catering-and-decor" element={<CateringAndDecor />} />
              <Route path="/venue-selection" element={<VenueSelection />} />
              <Route path="/invitation-cards" element={<InvitationCards />} />
            </Routes>
            <HelpingMembers />
          </div>
        </div>
      </div>
    </div>
  );
}
