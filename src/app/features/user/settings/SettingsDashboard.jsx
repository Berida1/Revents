import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route, Routes, Navigate } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
          <Routes>
            <Route path='/settings/basic' element={<BasicPage />} />
            <Route path='/settings/about' element={<AboutPage />} />
            <Route path='/settings/photos' element={<PhotosPage />} />
            <Route path='/settings/accounts' Component={<AccountPage />} />
            <Route path='/settings' element={<Navigate to='/settings/BasicPage' />} />
          </Routes> 
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;

