import logo  from '../Img/PngItem_6228865.png'

function Header() {
    return ( 
        <>
            <div className="px-[200px] h-[120px] bg-gradient-to-t from-[#FE6233] to-[#F7422E] text-white  py-2 font-medium text-sm flex flex-col">
                {/* Top */}
                <div className="flex justify-between h-[34px]">
                    <ul className="flex w">
                        <li className="cursor-pointer">Kênh người bán
                        <span class="px-2 font-light">|</span>
                        </li>
                        <li className="cursor-pointer">Trở thành Người bán Shopee<span class="px-2 font-light">|</span></li>
                        <li className="cursor-pointer">Tải ứng dụng<span class="px-2 font-light">|</span></li>
                        <li className="cursor-pointer">Kết nối</li>
                    </ul>
                    <ul className="flex w">
                        <li className="cursor-pointer">Thông Báo
                        <span class="px-2 font-light">|</span>
                        </li>
                        <li className="cursor-pointer">Hỗ Trợ<span class="px-2 font-light">|</span></li>
                        <li className="cursor-pointer">Tiếng Việt<span class="px-2 font-light">|</span></li>
                        <li className="cursor-pointer">Đăng Ký<span class="px-2 font-light">|</span></li>
                        <li className="cursor-pointer">Đăng Nhập</li>
                    </ul>
                </div>
                {/* Logo-search */}
                <div className="flex flex-auto">
                    <div className=" w-1/5 ">
                        <img src={logo} alt="" className="h-[50px]"/>
                    </div>
                    <div className="w-[70%] flex items-center">
                        <input type="text" className='w-[90%] h-[40px] p-2 text-black' />
                        <div className="w-[10%] h-[40px] p-[3px]  bg-white">
                            <div className="w-full h-full bg-[#FB5533] rounded-sm">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Header;