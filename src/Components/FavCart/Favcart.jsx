import React, { useState , createContext , useContext } from "react";

export const Favcart = ({isDrawerOpen,toggleDrawer}) => {
	return (
			<div
				id="drawer-right-example"
				className={`shadow-2xl fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} bg-white w-80 dark:bg-gray-800`}
				tabIndex="-1"
				aria-labelledby="drawer-right-label"
			>
				<h5
					id="drawer-right-label"
					className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
				>
					<svg
						className="w-4 h-4 mr-2.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
					</svg>
					Right drawer
				</h5>
				<button
					type="button"
					data-drawer-hide="drawer-right-example"
					onClick={toggleDrawer}
					aria-controls="drawer-right-example"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						className="w-3 h-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
					<span className="sr-only">Close menu</span>
				</button>
				<div className="max-w-md mx-auto h-screen bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
					<div className="px-4 py-2 border-b border-gray-200">
						<h2 className="font-semibold text-gray-800">
							Shopping Cart
						</h2>
					</div>
					<div className="flex flex-col divide-y divide-gray-200">
					</div>
					<div className="flex items-center fixed bottom-0 flex-col justify-between px-6 py-3 bg-gray-100">
						<h3 className="text-gray-900 font-semibold">
							Total Items: 0
						</h3>
						<button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
							View All
						</button>
					</div>
				</div>
			</div>
	);
};
