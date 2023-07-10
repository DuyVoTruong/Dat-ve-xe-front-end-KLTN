import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarAdminData =[
    {
        title:'Trang chủ',
        path:'/admin/home',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
    },
    {
        title:'Bến xe',
        //path:'/admin/ben-xe',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Bến xe',
                path:'/admin/ben-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Nhà xe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Nhà xe',
                path:'/admin/nha-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Loại xe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Loại xe',
                path:'/admin/loai-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Xe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Xe',
                path:'/admin/xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Tuyến xe',
        //path:'/admin/home',
        icon:<FaIcons.FaRoute/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Tuyến xe',
                path:'/admin/tuyen-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Tài khoản',
        //path:'/admin/home',
        icon:<FaIcons.FaUser/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Quản trị viên',
                path:'/admin/tai-khoan/admin',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title: 'Nhà xe',
                path:'/admin/tai-khoan/nha-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title: 'Người dùng',
                path:'/admin/tai-khoan/user',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'Thống kê',
        //path:'/admin/home',
        icon:<FaIcons.FaChartBar/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Thống kê',
                path:'/admin/thong-ke',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
]