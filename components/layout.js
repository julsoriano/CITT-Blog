import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import withStyles from "@material-ui/core/styles/withStyles"; 

// core components
import Navbar from "components/Navbars/NavbarRD.jsx";
// import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/SidebarRD.jsx";

import dashboardStyle from "dashboardStyle.jsx";
import routes from "../routes";

const name = 'Julito Soriano'
export const siteTitle = 'Next.js Sample Website'

const switchRoutes = (
  <>
    {routes.map((prop, key) => {
        return (
          <Link href={prop.path}>
            <a>{prop.Name}</a>
          </Link>
        );        
    })}
  </>
);

function Layout() {

  const [mobileOpen, setMobileOpen] = useState(false);
  var color = "purple";
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function getRoute() {
    return window.location.pathname !== "/admin/maps";
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Cedar ITT"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        </div> 
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Layout);
