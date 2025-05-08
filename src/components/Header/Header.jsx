import React from "react";

export const Header = () => {
  return (
    <div id="webcrumbs">
      <div className="relative w-full h-screen bg-white">
        <header className="w-full px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">ПрофМед</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-gray-600">
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              Главная
            </a>
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              О нас
            </a>
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              Услуги
            </a>
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              События
            </a>
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              События
            </a>
            <a
              href="#"
              className="hover:text-primary-600 transition-colors duration-300"
            >
              Новости
            </a>
            <a
              href="#"
              className="border border-gray-800 px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
            >
              Контакты
            </a>
          </nav>
          <button className="md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[calc(100vh-76px)]">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 relative bg-gray-200 flex items-center">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt="Beautiful flowers"
                className="w-full h-full object-cover brightness-90"
              />
            </div>
            <div className="relative z-10 p-10 md:p-16 lg:p-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ПрофМед
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8">
                Ваш профсоюз — ваш голос в университете
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 uppercase font-semibold tracking-wider transition-all duration-300 transform hover:scale-105">
                VIEW SERVICES
              </button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-1 bg-gray-100">
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-white rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gray-200 rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-amber-100 rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-teal-600 rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gray-600 rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gray-800 rounded-full m-5 shadow-md transition-transform duration-300 hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
