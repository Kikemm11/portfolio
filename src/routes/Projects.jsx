import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import sentinelIndex from '../assets/sentinel-index.jpg';
import sentinelCar from '../assets/sentinel-car.jpg';
import gnuhealthClient from '../assets/gnuhealth-client.jpg';
import gnuhealthParty from '../assets/gnuhealth-party.jpg';
import limeStatistics from '../assets/lime-statistics.jpg';
import limeApp from '../assets/lime-app.jpg';
import enlanadosStatistics from '../assets/enlanados-statistics.png';
import enlanadosOrders from '../assets/enlanados-orders.png';
import enlanadosMobileOrders from '../assets/enlanados-mobile-orders.png';
import enlanadosMobileStatistics from '../assets/enlanados-mobile-statistics.png';
import piggy from '../assets/piggy.png';
import piggyDetail from '../assets/piggy-detail.png';
import pagoDirecto from '../assets/pago-directo.png';
import pagoDirectoDetail from '../assets/pago-directo-detail.png';



function Projects() {
  // Projects data
  const projects = [
    {
      title: 'PIGGY',
      images: [piggy, piggyDetail],
      description: "PIGGY (Planificador Inteligente de Gastos Y Ganancias) is a smart personal finance planner designed to help users efficiently manage their incomes and expenses in a structured and intuitive way. Built with Flutter, the application follows solid UX/UI design patterns to provide a smooth and user-friendly experience, using BLoC as the state management solution and SQLite as the local database for reliable data persistence. Piggy supports two different currencies and continuously fetches up-to-date U.S. dollar exchange rates, a key feature tailored specifically for Venezuelan users, considering the country’s economic context and currency fluctuations. By organizing financial movements into clear concepts and categories, Piggy offers meaningful insights that help users make better-informed financial decisions. The application is currently in development and will soon be available on the Google Play Store.",
    },
    {
      title: 'PagoDirecto',
      images: [pagoDirecto, pagoDirectoDetail],
      description: "I have contributed as a Flutter frontend developer on the ongoing updates for PagoDirecto, a widely used Venezuelan mobile app currently available on the Google Play Store. In this role, I have built scalable new modules to expand the app’s functionality and implemented precise UX/UI designs to ensure an engaging user experience. My work involves integrating and managing MongoDB-sourced data provided by the backend, utilizing both BLoC and Provider for effective state management. Working on such a large and complex project has strengthened my ability to deliver high-quality code and maintain performance and consistency across evolving features, all as part of a collaborative development team.",
    },
    {
      title: 'EnlanadosApp-Mobile',
      images: [enlanadosMobileOrders, enlanadosMobileStatistics],
      description: "EnlanadosApp-Mobile is an Android Mobile version of the preious project developed using Dart, Flutter and SQLite. It still manage bussiness logic related to keep track of orders, products, stock and statistics enhanced with new features that allows the user to have a more interactive UX/UI experience within the app and its usage. In addition to these changes this new version also brings new order and inventory structures wich let the user to add more than one product per order, personalized notifications and dynamic updates of the different parts of it.",
    },
    {
      title: 'EnlanadosApp-Web',
      images: [enlanadosOrders, enlanadosStatistics],
      description: "EnlanadosApp-Web is a Flask-based application designed to streamline the management of orders, inventory, and organizational tasks for Enlanados, a small e-commerce platform specializing in crochet figures and related products. The app enhances operational efficiency by enabling users to create and track orders, manage wool inventory, and maintain an organized order history. In addition to these core functionalities, EnlanadosApp integrates data analysis tools to support informed decision-making, allowing the business to better understand trends, customer behavior, and inventory needs. The app also automates several previously manual processes, reducing time spent on repetitive tasks and improving overall efficiency. Built with the specific needs and requirements of the platform's owners in mind, the system was designed to provide a seamless, user-friendly experience that enhances both daily operations and long-term business growth.",
    },
    {
      title: 'Sentinel Hawk',
      images: [sentinelIndex, sentinelCar],
      description: "Sentinel Hawk is a flask web application to automate, optimize and manage all processes involved within a parking lot stablishment. Part of it uses AI to recognize the vehicles and automatically generate a ticket with relevant information such as the type of vehicle, the charge and the status of the ticket (Paid, Unpaid and Canceled). In other manners the web application allows the users with the employee role to manage the ticket system to pay and cancel transactions, while the admin rol is able to control all the system settings and review its revenues and daily operations on demand.",
    },
    {
      title: 'GNUHealth Implementation',
      images: [gnuhealthClient, gnuhealthParty],
      description: "In this project, I contributed to the implementation of GnuHealth modules within Tryton ERP for several hospitals and care centers across my country, aiming to automate administrative and healthcare processes. I worked in various roles, including backend development, where I ensured seamless data flow between modules and the ERP system, and database management, optimizing structure and performance. Additionally, I collaborated in modeling workflows to tailor the system to the specific needs of healthcare providers, enhancing efficiency and improving data accuracy across the system.",
    },
    {
      title: 'LimeSurvey Data Manager',
      images: [limeApp, limeStatistics],
      description: "This project is a  simple python desktop-application which helps to manage the data provided by the responses of LimeSurveys along with the mobile application OfflineSurveysApp using Pandas module, in order to make them presentable and readable for common users trought out preformat .csv files and a more complete .html files wich includes dynamic tables of the responses, data analysis, charts and preview of images and locations if needed.",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Handle Previous Project
  const handlePrev = () => {
    setIsExiting(true);
    setAnimationClass('slide-out-left');
    setTimeout(() => {
      setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsExiting(false);
    }, 300); // Duration of the transition (matches tailwind config)
  };

  // Handle Next Project
  const handleNext = () => {
    setIsExiting(true);
    setAnimationClass('slide-out-right');
    setTimeout(() => {
      setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsExiting(false);
    }, 300); // Duration of the transition (matches tailwind config)
  };

  // Project data for the current project
  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    // Add delay before applying slide-in animation for new project
    if (!isExiting) {
      setAnimationClass(currentProjectIndex % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    }
  }, [currentProjectIndex, isExiting]);

  return (
    <div className="max-w-9xl p-2 text-center min-h-screen flex flex-col items-center relative">
      <Navbar />

      {/* Project Title */}
      <h1 className="text-5xl font-poppins text-white mt-20 mb-8">
        {currentProject.title}
      </h1>

    
      {/* Project Card */}
      <div
        className={`w-full max-w-7xl bg-gray-200 p-8 rounded-xl shadow-lg flex flex-col items-center min-h-[600px] mx-20 transition-transform duration-500 ${animationClass}`}
      >
      {/* Images */}
      <div className="flex flex-wrap gap-24 mb-20 mt-10 justify-center items-center">
        {currentProject.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${currentProjectIndex + 1} Image ${index + 1}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-5/12 h-auto max-h-72 object-cover rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

        {/* Description */}
        <p className="text-lg text-gray-700 px-10 text-justify">
          {currentProject.description}
        </p>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
        onClick={handlePrev}
      >
        <FaArrowLeft className="text-3xl text-gray-700" />
      </button>

      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
        onClick={handleNext}
      >
        <FaArrowRight className="text-3xl text-gray-700" />
      </button>
    </div>
  );
}

export default Projects;
