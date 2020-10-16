import React from 'react';

function Header(props) {
    return (
        <ul className="nav nav-pills">
            {
                props.pages.map((item, index) => {
                    return (
                        <li className="nav-item">
                            <a
                                onClick={() => props.setPage(index)}
                                className={"nav-link" + (props.currentPage === index ? 'active' : '')}
                            >
                                {item}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )

}

export default Header;

