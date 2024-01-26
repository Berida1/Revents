import React, { Component, Fragment } from 'react';
import EventDashboard from '../features/events/eventdashboard/EventDashboard';
import NavBar from '../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import EventDetailedPage from '../features/events/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../features/user/peopleDashboard/PeopleDashboard';
import EventForm from '../features/events/EventForm/EventForm';
import SettingsDashboard from '../features/user/settings/SettingsDashboard';
import UserDetailedPage from '../features/user/UserDetailed/UserDetailedPage';
import AboutPage from '../features/user/settings/AboutPage';
import BasicPage from '../features/user/settings/BasicPage';
import PhotosPage from '../features/user/settings/PhotosPage';


class App extends Component {

  handleNavigate =()=>{}
  render() {
    return (
      // <Fragment>
      //   <Routes>

      //     <Route
      //       path='/(.+)'
      //       render={() => (
              <Fragment>
                <Routes>
                <Route path='/' Component={HomePage} />
                </Routes>
                <NavBar />
                <Container className='main'>
                  <Routes>
                  <Route path='/events' Component={EventDashboard} />
                  <Route path='/events/:id' Component={EventDetailedPage} />
                  <Route path='/people' Component={PeopleDashboard} />
                  <Route path='/profile/:id ' Component={UserDetailedPage} />
                  <Route path='/settings' Component={SettingsDashboard  } />
                  <Route path='/createEvents' Component={EventForm} />
                  
                  <Route path='/settings/about' Component={AboutPage} />
                  <Route path='/settings/basic' Component={BasicPage} />
                  <Route path='/settings/photos' Component={PhotosPage} />
                    
                 


                  </Routes>
                </Container>
              </Fragment>
      //       )} />
      //   </Routes>
      // </Fragment>

    );
  }
}

export default App;


// import React, { Component, Fragment } from 'react';
// import EventDashboard from '../features/events/eventdashboard/EventDashboard';
// import NavBar from '../features/nav/NavBar/NavBar';
// import { Container } from 'semantic-ui-react';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from '../features/home/HomePage';
// import EventDetailedPage from '../features/events/eventDetailed/EventDetailedPage';
// import PeopleDashboard from '../features/user/peopleDashboard/PeopleDashboard';
// import EventForm from '../features/events/EventForm/EventForm';
// import SettingsDashboard from '../features/user/settings/SettingsDashboard';
// import UserDetailedPage from '../features/user/UserDetailed/UserDetailedPage';

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route
//             path='/(.+)'
//             element={(
//               <Fragment>
//                 <NavBar />
//                 <Container className='main'>
//                   <Route path='/events' element={<EventDashboard />} />
//                   <Route path='/events/:id' element={<EventDetailedPage />} />
//                   <Route path='/people' element={<PeopleDashboard />} />
//                   <Route path='/profile/:id' element={<UserDetailedPage />} />
//                   <Route path='/settings' element={<SettingsDashboard />} />
//                   <Route path='/createEvents' element={<EventForm />} />
//                 </Container>
//               </Fragment>
//             )}
//           />
//         </Routes>
//       </Fragment>
//     );
//   }
// }

// export default App;
