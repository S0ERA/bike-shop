import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Сброс стилей */
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Ссылки */
    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    /* Общие элементы */
    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    /* Формы */
    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    /* Основные глобальные стили */
    body {
        background: ${({ theme }) => theme.palette.background};
        color: ${({ theme }) => theme.palette.text};
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        margin: 0;
        padding: 0;
    }

    .pageName {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 3rem;
        color: ${({ theme }) => theme.palette.text};
    }

    .green {
        color: ${({ theme }) => theme.palette.success};
    }

    .red {
        color: ${({ theme }) => theme.palette.error};
    }
`;
