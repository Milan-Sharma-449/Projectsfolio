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

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Sinit Chat (Chat App)",
		subtitle: "We have created a web app for sending messages between multiple users in real time. uses React for user interface and Server runs on NodeJS. To achieve real-time communication, we’ll establish a connection between Client and Server with firebase. It allows you to communicate with your customers through chat. It enables you to send and receive messages. Chatting apps make it easier, simpler and faster to connect with everyone and it is also easy to use.",
		language: "VSCode, NodeJs, ReactJs, TailwindCss, SCss, Firebase, Git, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/chat-app',
		demo: 'https://chat-web-app-d4c52.web.app/'
	},
	{
		id: 2,
		image: IMG2,
		title: "Box-Office",
		subtitle: "box-office is a react based website which used to show the description related to the searched Show or Actor such as (About, release date, aired if any, no. of season or episodes, cast, dates) and also you can make your own loved list by starring them.",
		language: "VSCode, NodeJs, ReactJs, Css, Api's, Git, Gh-pages, PWA",
		github: 'https://github.com/Milan-Sharma-449/box-office',
		demo: 'https://milan-sharma-449.github.io/box-office/#/'
	},
	{
		id: 2,
		image: IMG12,
		title: "Gold's-Gym",
		subtitle: "You can follow the exercises given in the plan to meet your fitness goals. Those who are already-fit and want to maintain this fitness level can choose from hundreds of workout plans already given in the fitness apps. The popular fitness apps also have various workout videos that users can follow to exercise.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, RapidApi, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/gold-s-gym',
		demo: 'https://github.com/Milan-Sharma-449/gold-s-gym'
	},
	{
		id: 2,
		image: IMG11,
		title: "foodies-hub",
		subtitle: "FoodiesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. Also you can see the top chef's and know their new recipes.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/foodies-hub',
		demo: 'https://milan-sharma-449.github.io/foodies-hub/'
	},
	{
		id: 2,
		image: IMG2,
		title: "Lyriks",
		subtitle: "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application based on RapidApi.",
		language: "VSCode, NodeJs, ReactJs, Css, TailwindCss, RapidApi, ShazamCore, Redux, Git, RapidApi, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/lyriks',
		demo: 'https://github.com/Milan-Sharma-449/lyriks'
	},
	{
		id: 5,
		image: IMG5,
		title: "E-Commerce",
		subtitle: "This project has all the required essential features. This project has a user side where he/she can view product category and add products to cart and proceed for checkout whereas from administration side he/she can view sales, number of product, users, add product and categories. In this project, all the main functions are performed from the Admin side.",
		language: "VSCode, NetBeans, Css, php, phpMyAdmin, Database, JavaScript",
		github: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-',
		demo: 'https://github.com/Milan-Sharma-449/E-Store-Based-on-php-'
	},
	{
		id: 6,
		image: IMG3,
		title: "Tic Tac Toe",
		subtitle: "Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid. There is no universally-agreed rule as to who plays first, but in this article the convention that X plays first is used.",
		language: "VSCode, NodeJs, ReactJs, Css, Git, Surge, Gh-pages",
		github: 'https://github.com/Milan-Sharma-449/TicTacToe',
		demo: 'http://playing-tic-tac-toe.surge.sh/'
	},
	{
		id: 7,
		image: IMG5,
		title: "LifeStyle Store",
		subtitle: "An E-Commerce website is an online store that allows you to buy and sell various products through the Internet. We use HTML to create the structure and the content of our webpage. We should attract the hearts of our users. For that, we use CSS. CSS helps us to make our website an eye-catching one by using different colours, layout, and fonts.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-',
		demo: 'https://github.com/Milan-Sharma-449/LifeStyle-Store-Web-Project-'
	},
	{
		id: 8,
		image: IMG6,
		title: "Personal Portfolio (Using BootStrap)",
		subtitle: "Personal is clean, minimal and professional looking portfolio, resume and CV template. It's modern and one page design. This template is suitable for anyone who wants to have a personalized portfolio and resume website with unique style.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/Portfolio',
		demo: 'https://milansharma449portfolio.netlify.app/'
	},
	{
		id: 9,
		image: IMG4,
		title: "Connect4",
		subtitle: "It’s the classic game you love to play with your friends and family. Can you connect four of your coloured disks by dropping them into the holder before your opponent does?",
		language: "Eclipse, Java, CoreJava, JavaFX",
		github: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-',
		demo: 'https://github.com/Milan-Sharma-449/Connect4-Core-JAVA-'
	},
	{
		id: 10,
		image: IMG7,
		title: "Sakila Film Project (HighRadius Internship)",
		subtitle: "Full Stack ExtJs Dynamic Java-EE Film Inventory Project with CURD Operations implemented using MySQL Server, Hibernate, Spring MVC with Struts2.",
		language: "VSCode, Eclipse, Full Stack Project",
		github: 'https://github.com/Milan-Sharma-449/Hrc-Training-Sakila-'
	},
	{
		id: 11,
		image: IMG8,
		title: "AI-Enabled B2B Fin-Tech Management Dashboard for Accounts Receivables (HighRadius Corporate Internship)",
		subtitle: "Developed a Full Stack Dashboard Application using React, Node, Java EE, Flask, Restful APIs, SQLServer powered by Machine Learning and Dialogflow Fulfillment for AR Management and AI Enablement. (Project for High Radius Summer Internship Training)",
		language: "VSCode, Html, Css, Js"
	},
	{
		id: 12,
		image: IMG6,
		title: "Personal Portfolio (Html / Css / Js)",
		subtitle: "Personal is clean, minimal and professional looking portfolio, resume and CV template. It's modern and one page design. This template is suitable for anyone who wants to have a personalized portfolio and resume website with unique style.",
		language: "VSCode, Html, Css, Bootstrap",
		github: 'https://github.com/Milan-Sharma-449/Personal-Portfolio',
		demo: 'https://milansharma-portfolio.000webhostapp.com/'
	},
	{
		id: 13,
		image: IMG9,
		title: "Online Code Editor",
		subtitle: "This project is a good start for beginners, a new idea for intermediates and a refreshing hobby project for professionals. It involves the basic use of all of HTML, CSS and JS languages. Reason for following this tech-stack is that these languages are easy to use and are also fast in terms of execution time.",
		language: "VSCode, Html, Css, JQuery, GitHub"
	},
	{
		id: 14,
		image: IMG10,
		title: "Temperature App (Core Java)",
		subtitle: "Temperature App that used to convert temperature from Fahrenheit to Celsius and vice versa.",
		language: "Eclipse, Java, CoreJava, JavaFX",
		github: 'https://github.com/Milan-Sharma-449/Temperature-App',
		demo: 'https://github.com/Milan-Sharma-449/Temperature-App'
	}
	]

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