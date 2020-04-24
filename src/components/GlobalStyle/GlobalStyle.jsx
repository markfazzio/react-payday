// @flow strict

import { createGlobalStyle } from 'styled-components';

import PetitFormalScriptWoff from '../../assets/fonts/petitformalscript-regular-webfont.woff2';
import PetitFormalScriptWoff2 from '../../assets/fonts/petitformalscript-regular-webfont.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'petit_formal_scriptregular';
        src: url(${PetitFormalScriptWoff2}) format('woff2'),
        url(${PetitFormalScriptWoff}) format('woff');
        font-style: normal;
        font-weight: normal;
    }
`;