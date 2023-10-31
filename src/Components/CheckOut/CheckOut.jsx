import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingleAuctions } from "../../MainServices/getAuctions";
import { Formik } from "formik";
import { CheckOutSchema } from "../../Schemas/CheckOutSchema";

const initialValues = {
	fName: "",
	lName: "",
	Address: "",
	Country: "",
	City: "",
	phoneNumber: "",
	State: "",
	zipCode : "",
};

export const CheckOut = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const AuctionID = searchParams.get("AuctionId");
	const [AuctionData, setAuctionData] = useState([]);

	useEffect(() => {
		const waitForData = async () => {
			let Data = await getSingleAuctions(AuctionID);
			setAuctionData(Data);
		};
		waitForData();
	}, []);

	function handleCheckOut(values,{resetForm}) {
            console.log("values");
            console.log(values);
			const CheckOut = {...values}
            console.log(CheckOut);
	}
	return (
		<Formik
			validationSchema={CheckOutSchema}
			initialValues={initialValues}
			onSubmit={handleCheckOut}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleSubmit,
				handleBlur,
			}) => {
				return (
                    <form onSubmit={handleSubmit} className="flex justify-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center  lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <div className="flex w-full flex-col justify-start items-start">
                            <div className="">
                                <p className="text-3xl lg:text-4xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">
                                    Check out
                                </p>
                            </div>
                            <div className="mt-12">
                                <p className="text-xl font-semibold dark:text-white leading-5 text-gray-800">
                                    Shipping Details
                                </p>
                            </div>
                            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <input
                                    	name="fName"
                                        value={values.fName}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <input
                                        name="lName"
                                        value={values.lName}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="px-2 focus:outline-none  dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <input
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                    type="text"
                                    placeholder="Phone Number"
                                />
                                <input
                                    name="Address"
                                    value={values.Address}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                    type="text"
                                    placeholder="Address"
                                />
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="w-full">
                                        <input
                                            name="Country"
                                            value={values.Country}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="Country"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            name="City"
                                            value={values.City}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="w-full">
                                        <input
                                            name="State"
                                            value={values.State}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="State"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            name="zipCode"
                                            value={values.zipCode}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="zipCode"
                                        />
                                    </div>
                                </div>
                                <input
                                    className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                    type="text"
                                    placeholder="Card Number"
                                />
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="w-full">
                                        <input
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="CVV"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                                            type="text"
                                            placeholder="Exp Date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="focus:outline-none dark:bg-gray-800 dark:text-white focus:ring-emerald-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                                Check Out
                            </button>
                            
                        </div>
        
                        <div className=" sticky top-16 flex flex-col h-fit justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                                    Order Summary
                                </h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                                        Auction Enter Price
                                    </p>
                                    <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                        {AuctionData &&
                                        AuctionData.EnterPrice !== undefined
                                            ? AuctionData.EnterPrice.toLocaleString()
                                            : ""}
                                    </p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                                        Total Charges
                                    </p>
                                    <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                        {AuctionData &&
                                        AuctionData.EnterPrice !== undefined
                                            ? (
                                                    AuctionData.EnterPrice * 0.08
                                              ).toLocaleString()
                                            : ""}
                                    </p>
                                </div>
                                {/* <div className="flex justify-between w-full items-center">
                                        <p className="text-lg dark:text-emerald-500 leading-4 text-emerald-500">
                                            Discount
                                        </p>
                                        <p className="text-lg dark:text-emerald-500 font-semibold leading-4 text-emerald-500">
                                            0
                                        </p>
                                    </div> */}
                            </div>
                            <div className="flex justify-between w-full items-center mt-10">
                                <p className="text-xl dark:text-white font-semibold leading-4 text-gray-800">
                                    Estimated Total
                                </p>
                                <p className="text-lg dark:text-white font-semibold leading-4 text-gray-800">
                                    {AuctionData && AuctionData.EnterPrice !== undefined
                                        ? (
                                                AuctionData.EnterPrice +
                                                AuctionData.EnterPrice * 0.08
                                          ).toLocaleString()
                                        : ""}
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
				);
			}}
		</Formik>
	);
};
