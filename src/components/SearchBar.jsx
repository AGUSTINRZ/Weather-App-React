import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ value, setValue, setCity }) {

	function handleSubmit(e) {
		e.preventDefault();
    setCity(value)
	}

	return (
		<header className="shadow-md p-2 md:px-4">
			<nav className="flex items-center justify-between gap-2 max-w-[1000px] mx-auto">
				<h1 className="font-semibold text-xl text-blue-400 whitespace-nowrap">
					Wheater App
				</h1>
				<form
					className="flex w-full max-w-[600px]"
					onSubmit={(e) => handleSubmit(e)}
				>
					<input
						type="search"
						className="bg-[#EAECEF] rounded-l outline-none px-2 py-3 md:py-2 text-gray-500/80 placeholder:text-gray-500/80 font-medium w-full"
						placeholder="London, United Kingdom"
						onChange={(e) => setValue(e.target.value)}
					/>
					<button
						type="submit"
						className="px-4 rounded-r bg-blue-400 text-white md:hover:bg-blue-500 transition-colors"
					>
						<FaSearch />
					</button>
				</form>
			</nav>
		</header>
	);
}

export default SearchBar;
