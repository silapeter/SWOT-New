/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableListOut from "views/TableListOut";
import TableListIn from "views/TableListIn";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";


const dashboardRoutes = [

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/tableout",
    name: "แบบสำรวจปัจจัยภายนอก",
    icon: "nc-icon nc-notes",
    component: TableListOut,
    layout: "/admin"
  },
  {
    path: "/tablein",
    name: "แบบสำรวจปัจจัยภายใน",
    icon: "nc-icon nc-notes",
    component: TableListIn,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "รายละเอียด/คำแนะนำ",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin"
  },
];

export default dashboardRoutes;
