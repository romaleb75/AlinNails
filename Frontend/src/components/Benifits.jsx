import './Benifits.css';
import { Gem, ShieldCheck, Heart, Notebook } from 'lucide-react';

function Benifits() {
  return (
    <div className="benifits-container">
      <div className="premium">
        <Gem width={43} height={43} />
        <h3>
          Premium <br /> Materials
        </h3>
      </div>
      <div className="safe">
        <ShieldCheck size={40} />
        <h3>
          Safe <br />& Hygienic
        </h3>
      </div>
      <div className="service">
        <Heart size={40} />
        <h3>
          Personal <br />
          Service
        </h3>
      </div>
      <div className="easy-booking">
        <Notebook size={40} />
        <h3>
          Easy <br />
          Booking
        </h3>
      </div>
    </div>
  );
}

export default Benifits;
