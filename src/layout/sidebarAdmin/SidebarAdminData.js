import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarAdminData =[
    {
        title:'trangchu',
        path:'/admin/home',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
    },
    {
        title:'benxe',
        //path:'/admin/ben-xe',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'benxe',
                path:'/admin/ben-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'nhaxe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'nhaxe',
                path:'/admin/nha-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'loaixe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'loaixe',
                path:'/admin/loai-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'xe',
        //path:'/admin/home',
        icon:<RiIcons.RiTrainLine/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'xe',
                path:'/admin/xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'tuyenxe',
        //path:'/admin/home',
        icon:<FaIcons.FaRoute/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'tuyenxe',
                path:'/admin/tuyen-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'taikhoan',
        //path:'/admin/home',
        icon:<FaIcons.FaUser/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'admin',
                path:'/admin/tai-khoan/admin',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title: 'nhaxe',
                path:'/admin/tai-khoan/nha-xe',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title: 'user',
                path:'/admin/tai-khoan/user',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title:'thongke',
        //path:'/admin/home',
        icon:<FaIcons.FaChartBar/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'thongke',
                path:'/admin/thong-ke',
                icon:<IoIcons.IoIosPaper/>,
            },
        ]
    },
]