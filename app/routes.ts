import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home/index.tsx"),
  route("about-us", "routes/AboutUs/index.tsx"),
  route("yagna", "routes/Yagna/index.tsx"),
] satisfies RouteConfig;
