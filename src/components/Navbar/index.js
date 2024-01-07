/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const navbarStyle = useMemo(
    () => ({
      borderBottom: `2px solid ${darkMode ? "purple" : "purple"}`,
      boxShadow: darkMode ? "none" : "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    [darkMode]
  );

  return (
    <Nav style={navbarStyle}>
      <NavbarContainer>
        <NavLogo to="/">
          <div style={{ marginTop: "20px" }}>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: darkMode ? "white" : "black",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <DiCssdeck size="3rem" color={!darkMode ? "black" : "white"} />
              <Span>Portfolio</Span>
            </a>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "20px",
            color: darkMode ? "white" : "black",
            width: "66px",
          }}
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
