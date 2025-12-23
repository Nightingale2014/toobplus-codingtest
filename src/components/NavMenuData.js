// 메뉴 데이터 정의 (1depth + 2depth)
const NavMenuData = [
    {
        title: "회사소개",
        link: "/about",
        sub: [
            { title: "인사말", link: "/about/greeting" },
            { title: "연혁", link: "/about/history" },
            { title: "오시는길", link: "/about/location" },
        ],
    },
    {
        title: "사업분야",
        link: "/business",
        sub: [
            { title: "건축", link: "/business/architecture" },
            { title: "토목", link: "/business/civil" },
            { title: "플랜트", link: "/business/plant" },
        ],
    },
    {
        title: "연구개발",
        link: "/rnd",
        sub: [
            { title: "기술연구소", link: "/rnd/lab" },
            { title: "신소재연구", link: "/rnd/material" },
        ],
    },
    {
        title: "제품소개",
        link: "/product",
        sub: [{ title: "제품목록", link: "/product/list" }],
    },
    {
        title: "고객지원",
        link: "/support",
        sub: [
            { title: "공지사항", link: "/support/notice" },
            { title: "문의하기", link: "/support/contact" },
            { title: "자료실", link: "/support/data" },
        ],
    },
    {
        title: "채용정보",
        link: "/recruit",
        sub: [
            { title: "채용공고", link: "/recruit/announcement" },
            { title: "복리후생", link: "/recruit/welfare" },
        ],
    },
];

export default NavMenuData;
