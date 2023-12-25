import React, {useContext} from "react";
import {DataContext} from "./DataProvider";
import '../page/MainPage/MainPage.css';
import { Link } from "react-router-dom";
import { TbMapSearch } from "react-icons/tb";
import { PiMapPinLineBold } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiEdit } from "react-icons/bi";
import {FiLogIn, FiUser} from "react-icons/fi";

const Nav = () => {
    const { handleMenuClick } = useContext(DataContext);

    return (
        
        <div id="sidebar">
            <h2>Ansim</h2>
            <ul>
                <li className="direction_icon">
                    <TbMapSearch/>
                </li>
                <li onClick={() => handleMenuClick('안심 시설물')} className="facility_icon">
                    <Link to="/info" style={{textDecoration: "none"}}>
                        <PiMapPinLineBold/>
                    </Link>
                </li>
                <li className="board_icon">
                    <BiEdit/>
                </li>
                <li onClick={() => handleMenuClick('마이페이지')} className="mypage_icon">
                    <Link to="/mypage" style={{textDecoration: "none"}}>
                        <FiUser/>
                    </Link>
                </li>
                <li onClick={() => handleMenuClick('로그인')} className="mypage_icon">
                    <Link to="/Login" style={{textDecoration: "none"}}>
                        <FiLogIn/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;