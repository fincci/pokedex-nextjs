"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        transition: all 0.3s ease-in-out;
    }
    
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .custom-transition {
        transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); 
    }
`;
