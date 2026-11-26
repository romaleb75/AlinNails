import './Headline.css';
import { Menu, UserRound, MessageCircle } from 'lucide-react';

function Headline() {
  return (
    <div className="headline">
      <button className="menu-btn">
        <Menu size={32} color="black" strokeWidth={2.5} />
      </button>
      <img
        className="logo"
        src="/images/laska_logo.jpeg"
        alt="Alin-Nails-Logo"
        border="0"
      ></img>
      <div className="right-btns">
        <button className="profile-btn">
          {' '}
          <UserRound size={32} color="black" strokeWidth={2} />
        </button>
        <button className="whatsapp-btn">
          {' '}
          <MessageCircle size={32} color="black" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export default Headline;
