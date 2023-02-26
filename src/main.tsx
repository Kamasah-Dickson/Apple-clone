import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import Airpods from "./components/Airpods";
import TvHome from "./components/Tv&Home";
import Entertainment from "./components/Entertainment";
import Accessories from "./components/Accessories";
import Support from "./components/Support";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/store" element={<Store />}></Route>
				<Route path="/shop the latest" element={<Store />}></Route>
				{/* <Route path="/mac" element={<Mac />}></Route>
				<Route path="/ipad" element={<Ipad />}></Route>
				<Route path="/iphone" element={<Iphone />}></Route>
				<Route path="/watch" element={<Watch />}></Route> */}
				{/* <Route path="/airpods" element={<Airpods />}></Route> */}
				{/* <Route path="/tv&home" element={<TvHome />}></Route> */}
				{/* <Route path="/entertainment" element={<Entertainment />}></Route> */}
				{/* <Route path="/accessories" element={<Accessories />}></Route> */}
				{/* <Route path="/Support" element={<Support />}></Route> */}
				<Route path="*" element={<PageNotFound />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
