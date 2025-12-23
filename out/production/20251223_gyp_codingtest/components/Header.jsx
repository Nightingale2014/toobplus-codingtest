import React, { useState, useEffect } from "react";
import NavMenuData from "./NavMenuData";
import "./Header.css";

function Header() {
    const [open, setOpen] = useState(false); // 모바일 메뉴 열기 상태
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // 화면 크기 변경 감지 → 모바일 / PC 구분
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setOpen(!open);
    const toggleSub = (index) =>
        setActiveMenu(activeMenu === index ? null : index);

    return (
        <header className="header">
            <div className="header-inner">
                {/* ✅ 로고 클릭 시 홈으로 이동 */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="로고"
                    className="logo"
                    onClick={() => (window.location.href = "/")}
                />

                {/* ✅ PC용 네비게이션 */}
                {!isMobile && (
                    <nav className="pc-nav">
                        <ul>
                            {NavMenuData.map((menu, i) => (
                                <li key={i} className="menu-item">
                                    <a href={menu.link}>{menu.title}</a>

                                    {menu.sub && (
                                        <ul className="submenu">
                                            {menu.sub.map((sub, j) => (
                                                <li key={j}>
                                                    <a href={sub.link}>{sub.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* ✅ 모바일 메뉴 버튼 */}
                {isMobile && (
                    <div className="toggle-btn" onClick={toggleMenu}>
                        ☰
                    </div>
                )}
            </div>

            {/* ✅ 모바일 메뉴 (PC에서는 렌더링 안 됨) */}
            {isMobile && open && (
                <>
                    <div className="mobile-nav">
                        {NavMenuData.map((menu, i) => (
                            <div key={i}>
                                <div
                                    className="mobile-menu-title"
                                    onClick={() => toggleSub(i)}
                                >
                                    {menu.title}
                                </div>
                                <div
                                    className={`mobile-sub ${
                                        activeMenu === i ? "show" : ""
                                    }`}
                                >
                                    {menu.sub?.map((sub, j) => (
                                        <a key={j} href={sub.link}>
                                            {sub.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 오버레이 클릭 시 메뉴 닫기 */}
                    <div className="overlay" onClick={toggleMenu}></div>
                </>
            )}
        </header>
    );
}

export default Header;
