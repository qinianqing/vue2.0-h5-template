/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/",
    component: () => import("@/views/AboutView"),
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/AboutView"),
        meta: { title: "首页", keepAlive: false },
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/HomeView"),
        meta: { title: "关于我", keepAlive: false },
      },
    ],
  },
];
