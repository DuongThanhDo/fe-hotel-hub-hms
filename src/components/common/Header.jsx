import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'antd';
import { assets } from '../../assets';
import { configs } from '../../configs';


function Header() {
    return (
        <div className="w-[100vw] h-[60px] flex items-center justify-between pr-10 pl-16 border border-b">
            <Link to={configs.routes.home} className="h-[80%] cursor-pointer">
                <img className="h-full" src={assets.images.logo} alt="logo" />
            </Link>
            <Link to={configs.routes.login} className="h-[60%]">
                <Button className="h-full" type="primary">
                    Đăng nhập
                </Button>
            </Link>
        </div>
    );
}

export default Header;
