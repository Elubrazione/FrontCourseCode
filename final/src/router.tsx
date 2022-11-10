import React from "react";
import { createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const router = createHashRouter ([
    {   // 第一个界面，登录界面
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
        children: [
            {
                // 登录成功，跳转到主页面
                path: "",
                element: <Main />
            }
        ]
    }
]);

export default router;
