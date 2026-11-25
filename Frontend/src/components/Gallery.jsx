import './Gallery.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Gallery() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setInterval(
      () =>
        setIndex((prevIndex) => {
          if (prevIndex >= 6) {
            return 1;
          } else {
            return prevIndex + 1;
          }
        }),
      2000,
    );
  }, []);

  return (
    <section>
      <div className="gallery">
        <img src={`/images/gallery${index}.jpg`} />
      </div>
    </section>
  );
}

export default Gallery;
