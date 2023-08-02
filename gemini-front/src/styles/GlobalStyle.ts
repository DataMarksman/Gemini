import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "./font/Font.css";

const GlobalStyles = createGlobalStyle`
    ${reset}    
    a{
        text-decoration: none;
        color: #6393CB;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 20px;
        vertical-align: baseline;
        font-family: 'NanumSquareNeoTTF-Regular', 'sans-serif';
    }

    h1 {
        font-family: 'NanumSquareNeoTTF-Bold', 'sans-serif';
        font-size: 28px;
    }
    h2 {
        font-family: 'NanumSquareNeoTTF-Bold', 'sans-serif';
        font-size: 24px;
    }
    h3 {
        font-family: 'NanumSquareNeoTTF-Bold', 'sans-serif';
        font-size: 20px;
    }
    h4 {
        font-family: 'NanumSquareNeoTTF-Regular', 'sans-serif';
        font-size: 24px;
    }

    p {
        font-family: 'NanumSquareNeoTTF-Regular', 'sans-serif';
        font-size: 20px;
    }

    /* ol, ul{
        font-family: 'NanumSquareNeoTTF-Regular', 'sans-serif';
        list-style: none;
        font-size: 1.6rem;
    }

    button {
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
    } */
    `;

export default GlobalStyles;
