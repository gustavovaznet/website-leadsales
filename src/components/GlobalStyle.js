//GLOBAL STYLE

//EXPORTING
import { createGlobalStyle } from "styled-components";

//GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Ubuntu, 'sans-serif';
    }

    html {
        @media (max-width: 1700px) {
        font-size: 75%;
        }
        @media (max-width: 1300px) {
            
        }
    }

    body {
        background: #1b1b1b;
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #1E90FF;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: "Inter", sans-serif;
        &:hover {
            background-color: #1E90FF;
            color: white;
        }
    }

        h2 {
            font-weight: lighter;
            font-size: 4rem;
        }
        h3 {
            color: white;
        }
        h4 {
            font-weight: bold;
            font-size: 2rem;
        }
        a {
            font-size: 1.1rem;
        }
        span {
            font-weight: bold;
            color: #1E90FF;
        }
        p {
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }

        @media (max-width: 1300px) {
            .image{
                display: none;
            }
            .home2{
                display: none;
            }
        }

`;

export default GlobalStyle;
