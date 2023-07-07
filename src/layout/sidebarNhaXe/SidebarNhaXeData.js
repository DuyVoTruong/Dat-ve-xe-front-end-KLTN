import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarNhaXeData = [
  {
    title: "trangchu",
    path: "/nha-xe/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title:'tuyenxe',
    //path:'/nha-xe/home',
    icon:<FaIcons.FaRoute/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'tuyenxe',
            path:'/nha-xe/tuyen-xe',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },{
    title:'xe',
    //path:'/admin/home',
    icon:<RiIcons.RiTrainLine/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'xe',
            path:'/nha-xe/xe',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },{
    title:'vexe',
    //path:'/admin/home',
    icon:<FaIcons.FaTicketAlt/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'vexe',
            path:'/nha-xe/ve-xe',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },{
    title:'hanghoa',
    //path:'/admin/home',
    icon:<FaIcons.FaTruck/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'hanghoa',
            path:'/nha-xe/hang-hoa',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },{
    title:'thongke',
    //path:'/admin/home',
    icon:<FaIcons.FaChartBar/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'thongke',
            path:'/nha-xe/thong-ke',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },{
    title:'goidichvu',
    //path:'/admin/home',
    icon:<FaIcons.FaCreditCard/>,
    iconClosed:<RiIcons.RiArrowDownSFill/>,
    iconOpened:<RiIcons.RiArrowUpSFill/>,
    subNav:[
        {
            title: 'goidichvu',
            path:'/nha-xe/gia-han-dich-vu',
            icon:<IoIcons.IoIosPaper/>,
        },
    ]
  },
];

{/*
{
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Service 1",
        path: "/services/services1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 2",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 3",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
*/}