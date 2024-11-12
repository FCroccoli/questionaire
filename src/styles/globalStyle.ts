import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;
        --white: #FFFFFF;

        --red-1:#E22323;
        --red-2:#CC0000;

        --blue-1:#002082;
        --blue-2:#3057E1;
        --blue-3:#4A6DE5;
        --blue-4:#CED8F7;

        --normal:#A8A77A;
        --fire:#EE8130;
        --water:#6390F0;
        --electric: #F7D02C;
        --grass: #7AC74C;
        --ice: #96D9D6;
        --fighting: #C22E28;
        --poison: #A33EA1;
        --ground: #E2BF65;
        --flying: #A98FF3;
        --psychic: #F95587;
        --bug: #A6B91A;
        --rock: #B6A136;
        --ghost: #735797;
        --dragon: #6F35FC;
        --dark: #705746;
        --steel: #B7B7CE;
        --fairy: #D685AD;

        --font: "Rajdhani", sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: var(--font);
        list-style: none;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }

    body {
	    line-height: 1;
        height: 100vh;
        background-color: var(--white);
    }

    ol, ul {
	    list-style: none;
    }

    blockquote, q {
	    quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
	    content: '';
	    content: none;
    }

    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }

`;

export default GlobalStyle;
