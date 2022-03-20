import React from "react";
import './Header.css'
import HeaderOption from "./HeaderOption";




function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__title">
                    <a href="/">Siddharth Kothari</a>
                </div>
            </div>

            <div className="header__right">
                <a href="/#about">
                    <HeaderOption title='About Me' />
                </a>
                <a href="/#skills">
                    <HeaderOption title='Skills' />
                </a>
                <a href="/#projects">
                    <HeaderOption title='Projects' />
                </a>
                <a href="/resume">
                    <HeaderOption title='Resume' />
                </a>
                <a href="/contactme">
                    <HeaderOption title='Contact Me' />
                </a>
            </div>

        </div>
    )
}

export default Header;