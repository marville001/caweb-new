import React from "react";

import "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className="bg-white h-24 flex items-center p-5 md:p-8">
            <nav className="flex-1">
                <div className="flex justify-between items-center space-x-5">
                    <div className="">
                        <h1 className="">
                            <a href="https://vatican.modeltheme.com">
                                <img
                                    src="https://vatican.modeltheme.com/wp-content/themes/vatican/images/logo.png"
                                    alt="Vatican Theme"
                                    className="h-16"
                                />
                            </a>
                        </h1>
                    </div>

                    <div className="flex-1">
                        <ul className="flex">
                            <li className="">
                                <a
                                    className="text-xl font-bold tracking-wider hover:text-accent"
                                    href="/"
                                >
                                    Home
                                </a>
                                <ul className="hidden">
                                    <li
                                        id="menu-item-20186"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20186"
                                    >
                                        <a href="https://vatican.modeltheme.com/home/home-buddhist/">
                                            Home Buddhist
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-20187"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20187"
                                    >
                                        <a href="https://vatican.modeltheme.com/home/home-mosque/">
                                            Home Mosque
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-20185"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20185"
                                    >
                                        <a href="https://vatican.modeltheme.com/home/church-blog/">
                                            Church Blog
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/">Sermons</a>
                                <ul className="hidden">
                                    <li
                                        id="menu-item-19784"
                                        className="menu-item menu-item-type-post_type menu-item-object-mt-sermon menu-item-19784"
                                    >
                                        <a href="https://vatican.modeltheme.com/sermon/latest-sunday-sermons/">
                                            Sunday Sermon
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19786"
                                        className="menu-item menu-item-type-post_type menu-item-object-mt-sermon menu-item-19786"
                                    >
                                        <a href="https://vatican.modeltheme.com/sermon/christmas-carrols-for-adults/">
                                            Christmas Carrols
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19787"
                                        className="menu-item menu-item-type-post_type menu-item-object-mt-sermon menu-item-19787"
                                    >
                                        <a href="https://vatican.modeltheme.com/sermon/christmas-carrols-for-kids/">
                                            Christmas for Kids
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19783"
                                        className="menu-item menu-item-type-post_type menu-item-object-mt-sermon menu-item-19783"
                                    >
                                        <a href="https://vatican.modeltheme.com/sermon/live-a-new-life/">
                                            Live a New Life
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19687"
                                        className="menu-item menu-item-type-post_type menu-item-object-mt-sermon menu-item-19687"
                                    >
                                        <a href="https://vatican.modeltheme.com/sermon/latest-sunday-sermons/">
                                            Single Sermon
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/">Events</a>
                                <ul className="hidden">
                                    <li
                                        id="menu-item-19792"
                                        className="menu-item menu-item-type-post_type menu-item-object-tribe_events menu-item-19792"
                                    >
                                        <a href="https://vatican.modeltheme.com/events/event-s-lukes/">
                                            Single Event
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/">Donations</a>
                                <ul className="hidden">
                                    <li
                                        id="menu-item-19713"
                                        className="menu-item menu-item-type-post_type menu-item-object-campaign menu-item-19713"
                                    >
                                        <a href="https://vatican.modeltheme.com/campaigns/josua-needs-a-new-heart/">
                                            Josua Needs a New Heart
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19715"
                                        className="menu-item menu-item-type-post_type menu-item-object-campaign menu-item-19715"
                                    >
                                        <a href="https://vatican.modeltheme.com/campaigns/afrikan-child-needs-attention/">
                                            Afrikan child needs attention
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19716"
                                        className="menu-item menu-item-type-post_type menu-item-object-campaign menu-item-19716"
                                    >
                                        <a href="https://vatican.modeltheme.com/campaigns/fundraising-for-our-church/">
                                            Fundraising for our Church
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-19714"
                                        className="menu-item menu-item-type-post_type menu-item-object-campaign menu-item-19714"
                                    >
                                        <a href="https://vatican.modeltheme.com/campaigns/fundraising-for-a-new-church/">
                                            Fundraising for a new Church
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/">Gallery</a>
                            </li>
                            <li className="">
                                <span>The Church</span>
                                <ul className="hidden">
                                    <li
                                        id="menu-item-1147"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1147"
                                    >
                                        <a href="https://vatican.modeltheme.com/our-pastors/">
                                            Pastors
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-756"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-756"
                                    >
                                        <a href="https://vatican.modeltheme.com/products/">
                                            Shop
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-341"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-341"
                                    >
                                        <a href="https://vatican.modeltheme.com/news/">
                                            News
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-339"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-339"
                                    >
                                        <a href="https://vatican.modeltheme.com/about-us/">
                                            About us
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-340"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-340"
                                    >
                                        <a href="https://vatican.modeltheme.com/contact-us/">
                                            Contact us
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-691"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-691"
                                    >
                                        <a href="https://vatican.modeltheme.com/testimonials/">
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/">Purchase</a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-collapse actions collapse col-md-2">
                        <div className="header-nav-actions">
                            <div className="text-center header-button pull-right">
                                <div className="header-button-labels pull-left">
                                    <a
                                        href="https://vatican.modeltheme.com/donations/"
                                        className="button"
                                    >
                                        Donate
                                    </a>
                                </div>
                            </div>

                            <span className="mt-search-icon">
                                <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
