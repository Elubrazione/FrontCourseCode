import React from "react";
import { createHashRouter } from "react-router-dom";
import App from "./pages/App";
import NotFound from "./pages/NotFound";

const router = createHashRouter ([
    {   // 第一个界面，登录界面
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                // 登录成功，跳转到主页面
                path: "",
            }
        ]
    },
    {   // 第二个界面，
        path: ""
    }
]);