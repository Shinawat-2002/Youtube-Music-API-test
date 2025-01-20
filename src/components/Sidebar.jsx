import React from 'react';
    import { AiFillHome, AiOutlineCompass, AiOutlineUnorderedList, AiOutlinePlayCircle } from 'react-icons/ai';
    import { BsPlus } from 'react-icons/bs';

    function Sidebar({ isOpen }) {
      return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <AiFillHome />
              <span>หน้าแรก</span>
            </li>
            <li>
              <AiOutlineCompass />
              <span>สำรวจ</span>
            </li>
            <li>
              <AiOutlineUnorderedList />
              <span>คลังเพลง</span>
            </li>
            <li>
              <AiOutlinePlayCircle />
              <span>อัปเกรด</span>
            </li>
          </ul>
          <button>
            <BsPlus />
            <span>เพลย์ลิสต์ใหม่</span>
          </button>
          <hr style={{borderTop: '1px solid #444', margin: '10px 0'}}/>
          <p>เพลงที่ชอบ</p>
          <p style={{fontSize: '0.8rem', color: '#aaa'}}>เพลย์ลิสต์อัตโนมัติ</p>
          <p>ตอนสำหรับฟังภายหลัง</p>
          <p style={{fontSize: '0.8rem', color: '#aaa'}}>เพลย์ลิสต์อัตโนมัติ</p>
        </div>
      );
    }

    export default Sidebar;
