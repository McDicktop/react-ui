import './Header.css'

function Header(props) {
    return (
        <header>
            <nav className="menu">
                <ul>
                    <li><a href="">{props.menuItems[0]}</a></li>
                    <li><a href="">{props.menuItems[1]}</a></li>
                    <li><a href="">{props.menuItems[2]}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;


// index.html
// <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">



// App.jsx
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './assets/components/Header'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header menuItems={['HOME', 'GALLERY', 'CONTACTS']} />
//     </>
//   )
// }

// export default App


// Header.css

// .menu>ul {
//     display: flex;
//     justify-content: center;
// }

// .menu li {
//     width: 200px;
//     text-align: center;
//     list-style: none;
//     border-bottom: 1px solid black;
//     border-top: 1px solid black;
//     margin: 6px;
// }

// .menu>ul li a {
//     display: block;
//     padding: 16px 10px 10px 10px;
//     font-family: 'Yanone Kaffeesatz', sans-serif;
//     font-size: 3em;
//     font-weight: bold;
//     text-decoration: none;
//     transition: all 0.2s ease;
// }

// .menu li a:hover {
//     background: #363636;
//     color: #F5F5F5;
//     box-shadow: 1px 5px 10px -5px black;
//     transition: all 0.2s ease;
// }
