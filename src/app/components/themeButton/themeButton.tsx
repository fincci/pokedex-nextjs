"use client";

import { useTheme } from "@/app/contexts/themeContext";
import styled from "styled-components";

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    const isDarkTheme =
        document.documentElement.getAttribute("data-theme") === "dark";

    return (
        <ThemeToggle
            className="theme-toggle"
            id="theme-toggle"
            title="Toggles light & dark"
            aria-label="auto"
            aria-live="polite"
            onClick={toggleTheme}
        >
            <svg
                className="sun-and-moon"
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle
                        cx={isDarkTheme ? "17" : "24"}
                        cy="10"
                        r="6"
                        fill="black"
                        transform={
                            isDarkTheme ? "translateX(0)" : "translateX(-7px)"
                        }
                    />
                </mask>
                <circle
                    className="sun"
                    cx="12"
                    cy="12"
                    r="6"
                    mask="url(#moon-mask)"
                    fill="currentColor"
                />
                <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="0" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="24" />
                    <line x1="3" y1="3" x2="6" y2="6" />
                    <line x1="18" y1="18" x2="21" y2="21" />
                    <line x1="0" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="24" y2="12" />
                    <line x1="3" y1="21" x2="6" y2="18" />
                    <line x1="18" y1="6" x2="21" y2="3" />
                </g>
            </svg>
        </ThemeToggle>
    );
};

export default ThemeButton;

const ThemeToggle = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;

    .sun-and-moon {
        position: relative;
        width: 25px;
        height: 25px;
    }

    .sun-and-moon > :is(.moon, .sun, .sun-beams) {
        transform-origin: center;
    }

    .sun-and-moon > :is(.moon, .sun) {
        fill: ${({ theme }) => theme.colors.iconFill};
    }

    &:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun) {
        fill: ${({ theme }) => theme.colors.iconFillHover};
    }

    .sun-and-moon > .sun-beams {
        stroke: ${({ theme }) => theme.colors.iconFill};
        stroke-width: 1.5px;
    }

    &:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
        stroke: ${({ theme }) => theme.colors.iconFillHover};
    }

    [data-theme="dark"] & .sun-and-moon > .sun {
        transform: scale(1.75);
    }

    [data-theme="dark"] & .sun-and-moon > .sun-beams {
        opacity: 0;
    }

    [data-theme="dark"] & .sun-and-moon > .moon > circle {
        transform: translateX(-7px);
    }

    @supports (cx: 1) {
        [data-theme="dark"] & .sun-and-moon > .moon > circle {
            transform: translateX(0);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .sun-and-moon > .sun {
            transition: transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25);
        }

        .sun-and-moon > .sun-beams {
            transition: transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
                opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
        }

        .sun-and-moon .moon > circle {
            transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
        }

        @supports (cx: 1) {
            .sun-and-moon .moon > circle {
                transition: cx 0.25s cubic-bezier(0, 0, 0, 1);
            }
        }

        [data-theme="dark"] & .sun-and-moon > .sun {
            transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
            transition-duration: 0.25s;
            transform: scale(1.75);
        }

        [data-theme="dark"] & .sun-and-moon > .sun-beams {
            transition-duration: 0.15s;
            transform: rotateZ(-25deg);
        }

        [data-theme="dark"] & .sun-and-moon > .moon > circle {
            transition-duration: 0.5s;
            transition-delay: 0.25s;
        }
    }
`;
