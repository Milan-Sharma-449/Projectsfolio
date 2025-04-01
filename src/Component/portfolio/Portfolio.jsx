import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat_app.jpeg'
import IMG2 from '../../assets/project-1.jpg'
import IMG3 from '../../assets/tictactoe.png'
import IMG4 from '../../assets/Connect4.jpeg'
import IMG5 from '../../assets/project-3.jpg'
import IMG6 from '../../assets/portfolio.png'
import IMG7 from '../../assets/sakila_project.jpg'
import IMG8 from '../../assets/internship_hrc.webp'
import IMG9 from '../../assets/code_editor.png'
import IMG10 from '../../assets/temperature.jpg'
import IMG11 from '../../assets/foodies-hub.png'
import IMG12 from '../../assets/golds-gym.png'
import IMG13 from '../../assets/tMovies.png'
import IMG14 from '../../assets/mstube.png'
import IMG15 from '../../assets/3dportfolio.png'
import IMG16 from '../../assets/webfolio.png'
import IMG17 from '../../assets/CHD_pred.PNG'
import IMG18 from '../../assets/CADisease_Pred.PNG'

const data = [
	{
		id: 20,
		image: IMG17,
		type: 'AIML',
		title: "Ensembling in Prediction Model for CHD (AIML)",
		subtitle: "Ensembling in prediction models for Coronary Heart Disease (CHD) enhances accuracy by combining multiple models to reduce errors and improve robustness. Techniques like bagging, boosting, and stacking integrate diverse classifiers, mitigating biases and variances in individual models. For CHD prediction, ensembling leverages machine learning algorithms such as logistic regression, decision trees, and neural networks to analyze risk factors like age, cholesterol levels, and lifestyle habits. By aggregating predictions, ensemble models provide a more reliable and precise diagnosis, aiding early detection and prevention. This approach ensures better generalization and improves decision-making in clinical and healthcare applications.",
		language: "Python, Jupyter Notebook, UCI, Ensembling, Prediction, Machine Learning, Data Processing and Analysis",
		github: 'https://github.com/Milan-Sharma-449/IACADEC',
		demo: 'https://github.com/Milan-Sharma-449/IACADEC'
	},
	{
		id: 21,
		image: IMG18,
		type: 'AIML',
		title: "CAD Prediction using ML",
		subtitle: "Coronary Artery Disease (CAD) prediction using Machine Learning (ML) enhances early diagnosis and risk assessment by analyzing patient data, including medical history, lifestyle, and biomarkers. ML models, such as logistic regression, decision trees, and neural networks, identify patterns and correlations in large datasets, improving accuracy over traditional methods. Features like cholesterol levels, blood pressure, and ECG readings help predict CAD risk. ML-based prediction enables personalized treatment plans, reducing complications and healthcare costs. Advanced techniques, including deep learning and ensemble models, further refine accuracy. Implementing ML in CAD prediction supports early intervention, ultimately improving patient outcomes and survival rates.",
		language: "Python, Jupyter Notebook, UCI, Kaggle, Prediction, Machine Learning, Data Processing and Analysis",
		github: 'https://github.com/Milan-Sharma-449/Coronary-Artery-Disease-Prediction-using-ML',
		demo: 'https://github.com/Milan-Sharma-449/Coronary-Artery-Disease-Prediction-using-ML'
	},
	{
		id: 18,
		image: IMG15,
		type: 'react',
		title: "3d-Portfolio",
		subtitle: "Build a cool 3D website with fun interactive parts, like a floating island and a fox that moves when you type. It'll allow you to show off my skills.",
		language: "VSCode, NodeJs, ThreeJs, Css, Git, Gh-pages, Netlify, Hostinger",
		github: 'https://github.com/Milan-Sharma-449/3d-Portfolio',
		demo: 'https://milansharma.site'
	},
	{
		id: 19,
		image: IMG16,
		type: 'react',
		title: "Portfolio",
		subtitle: "Personal is clean, minimal and professional looking portfolio, resume and CV template. It's modern and one page design. This template is suitable for anyone who wants to have a personalized portfolio and resume website with unique style.",
		language: "VSCode, ReactJs, Css, NextJs",
		github: 'https://github.com/Milan-Sharma-449/Portfolio-react',
		demo: 'https://milansharma.site/portfolio'
	},
	{
		id: 1,
		image: IMG14,
		type: 'react',
		title: "MS-Tube",
		subtitle: "StreamTube is a video CMS containing standard features of YouTube that enables you to launch your own video sharing website instantly.",
		language: "VSCode, NodeJs, ReactJs, Css, RapidApi's, Git, Gh-pages, Netlify",
		github: 'https://github.com/Milan-Sharma-449/MSTube',
		demo: 'https://milansharma.site/MSTube/'
	},
	{
		id: 2,
		image: IMG1,
		type: 'react',
		title: "Sinit Chat (Chat App)",
		subtitle: "We have created a web app for sending messages between multiple users in real time. uses React for user interface and Server runs on NodeJS. To achieve real-time communication, we’ll establish a connection between Client and Server with firebase. It allows you to communicate with your customers through chat. It enables you to send and receive messages. Chatting apps make it easier, simpler and faster to connect with everyone and it is also easy to use.",
		language: "VSCode, NodeJs, ReactJs, TailwindCss, SCss, Firebase, Git, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/chat-app',
		demo: 'https://chat-web-app-d4c52.web.app/'
	},
	{
		id: 3,
		image: IMG2,
		type: 'react',
		title: "Box-Office",
		subtitle: "box-office is a react based website which used to show the description related to the searched Show or Actor such as (About, release date, aired if any, no. of season or episodes, cast, dates) and also you can make your own loved list by starring them.",
		language: "VSCode, NodeJs, ReactJs, Css, Api's, Git, Gh-pages, PWA",
		github: 'https://github.com/Milan-Sharma-449/box-office',
		demo: 'https://milansharma.site/boxoffice'
	},
	{
		id: 4,
		image: IMG13,
		type: 'full',
		title: "tMovies",
		subtitle: "Watching free movies online is a convenient and frugal way to see the films you love right from the comfort of your own home. Yes, this is the site where you can get movies info (for free) but the ones listed below, although info also you can watch trailers and, are clean from viruses and completely legal to use.",
		language: "VSCode, NodeJs, ReactJs, Css, SCss, Api's, TMDB Api, Git, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/tMovies',
		demo: 'https://milansharma.site/tMovies/'
	},
	{
		id: 5,
		image: IMG12,
		type: 'react',
		title: "Gold's-Gym",
		subtitle: "You can follow the exercises given in the plan to meet your fitness goals. Those who are already-fit and want to maintain this fitness level can choose from hundreds of workout plans already given in the fitness apps. The popular fitness apps also have various workout videos that users can follow to exercise.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, RapidApi, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/gold-s-gym',
		demo: 'https://milansharma.site/gold-s-gym'
	},
	{
		id: 6,
		image: IMG11,
		type: 'react',
		title: "foodies-hub",
		subtitle: "FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. Also you can see the top chef's and know their new recipes.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/foodies-hub',
		demo: 'https://milansharma.site/foodies-hub/'
	},
	{
		id: 7,
		image: IMG2,
		type: 'react',
		title: "Lyriks",
		subtitle: "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application based on RapidApi.",
		language: "VSCode, NodeJs, ReactJs, Css, TailwindCss, RapidApi, ShazamCore, Redux, Git, RapidApi, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/lyriks',
		demo: 'https://github.com/Milan-Sharma-449/lyriks'
	},
	{
		id: 8,
		image: IMG5,
		title: "E-Commerce",
		type: 'others',
		subtitle: "This project has all the required essential features. This project has a user side where he/she can view product category and add products to cart and proceed for checkout whereas from administration side he/she can view sales, number of product, users, add product and categories. In this project, all the main functions are performed from the Admin side.",
		language: "VSCode, NetBeans, Css, php, phpMyAdmin, Database, JavaScript",
		github: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-',
		demo: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-'
	},
	{
		id: 9,
		image: IMG3,
		type: 'react',
		title: "Tic Tac Toe",
		subtitle: "Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid. There is no universally-agreed rule as to who plays first, but in this article the convention that X plays first is used.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, Surge, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/TicTacToe',
		demo: 'http://playing-tic-tac-toe.surge.sh/'
	},
	{
		id: 10,
		image: IMG5,
		type: 'css',
		title: "LifeStyle Store",
		subtitle: "An E-Commerce website is an online store that allows you to buy and sell various products through the Internet. We use HTML to create the structure and the content of our webpage. We should attract the hearts of our users. For that, we use CSS. CSS helps us to make our website an eye-catching one by using different colours, layout, and fonts.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-',
		demo: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-'
	},
	{
		id: 11,
		image: IMG6,
		type: 'css',
		title: "Personal Portfolio (Using BootStrap)",
		subtitle: "Personal is clean, minimal and professional looking portfolio, resume and CV template. It's modern and one page design. This template is suitable for anyone who wants to have a personalized portfolio and resume website with unique style.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/Portfolio',
		demo: 'https://milansharma449portfolio.netlify.app/'
	},
	{
		id: 12,
		image: IMG4,
		type: 'java',
		title: "Connect4",
		subtitle: "It’s the classic game you love to play with your friends and family. Can you connect four of your coloured disks by dropping them into the holder before your opponent does?",
		language: "Eclipse, Java, CoreJava, JavaFX",
		github: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-',
		demo: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-'
	},
	{
		id: 13,
		image: IMG7,
		type: 'others',
		title: "Sakila Film Project (HighRadius Internship)",
		subtitle: "Full Stack ExtJs Dynamic Java-EE Film Inventory Project with CURD Operations implemented using MySQL Server, Hibernate, Spring MVC with Struts2.",
		language: "VSCode, Eclipse, Full Stack Project",
		github: 'https://github.com/Milan-Sharma-449/Hrc-Training-Sakila-'
	},
	{
		id: 14,
		image: IMG8,
		type: 'others',
		title: "AI-Enabled B2B Fin-Tech Management Dashboard for Accounts Receivables (HighRadius Corporate Internship)",
		subtitle: "Developed a Full Stack Dashboard Application using React, Node, Java EE, Flask, Restful APIs, SQLServer powered by Machine Learning and Dialogflow Fulfillment for AR Management and AI Enablement. (Project for High Radius Summer Internship Training)",
		language: "VSCode, Html, Css, Js"
	},
	{
		id: 15,
		image: IMG6,
		type: 'css',
		title: "Personal Portfolio (Html / Css / Js)",
		subtitle: "Personal is clean, minimal and professional looking portfolio, resume and CV template. It's modern and one page design. This template is suitable for anyone who wants to have a personalized portfolio and resume website with unique style.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/Personal-Portfolio',
		demo: 'https://milansharma-portfolio.000webhostapp.com/'
	},
	{
		id: 16,
		image: IMG9,
		type: 'others',
		title: "Online Code Editor",
		subtitle: "This project is a good start for beginners, a new idea for intermediates and a refreshing hobby project for professionals. It involves the basic use of all of HTML, CSS and JS languages. Reason for following this tech-stack is that these languages are easy to use and are also fast in terms of execution time.",
		language: "VSCode, Html, Css, JQuery, GitHub"
	},
	{
		id: 17,
		image: IMG10,
		type: 'java',
		title: "Temperature App (Core Java)",
		subtitle: "Temperature App that used to convert temperature from Fahrenheit to Celsius and vice versa.",
		language: "Eclipse, Java, CoreJava, JavaFX",
		github: 'https://github.com/Milan-Sharma-449/Temperature-App',
		demo: 'https://github.com/Milan-Sharma-449/Temperature-App'
	}
]

const buttons = [
	{
	  name: "All",
	  value: "all"
	},
	{
	  name: "React",
	  value: "react"
	},
	{
	  name: "Html/Css",
	  value: "css"
	},
	{
	  name: "Java",
	  value: "java"
	},
	{
		name: "Full Stack",
		value: "full"
	},
	{
		name: "Full Stack",
		value: "others"
	}
  ];

const Portfolio = () => {

  return (
  <section id='portfolio' >
	<h1 className='h1' >My Projects</h1>


    <div className='container portfolio__container' >
      {
        data.map(({id, image, title, subtitle, language, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt="Chat App" />
            </div>
            <h3 className='title' >{title}</h3>
			<h5>{subtitle}</h5>
			<h5>Tools, Language & Functionality :- {language}</h5>
            <div className='portfolio__item-cta' >
              <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >LiveDemo</a>
            </div>
          </article>
          )
        })
      }
    </div>
  </section>
  )
}

export default Portfolio