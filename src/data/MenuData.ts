interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Blog",
        link: "/#blog",
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Features",
        link: "/features",
    },
    {
        id: 5,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 6,
        has_dropdown: true,
        title: "Pages",
        link: "#",
        sub_menus: [
            { link: "/team", title: "Team" },
            { link: "/services", title: "Services", },
            { link: "/terms-condition", title: "Terms & Condition", },
            { link: "/faqs", title: "FAQS"},
            { link: "/blog", title: "Blog"},
            { link: "/blog-details", title: "Blog Details"},
        ],
    }
];
export default menu_data;
