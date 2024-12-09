import React from 'react';
import './about.css';

export function About() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();
    }, []);

  return (
    <>
    <div id='picture' className='picture-box'>
    <img src={imageUrl} alt='stock background' />
  </div>
    <main className="container-fluid bg-purple text-light text-center">
      <h1>About the Game</h1>

      <h3>5 Strikes is a game designed to be similar to hangman.
        Players must guess a letter one at a time until they guess the entire word.
        Tally marks are displayed to show the player the number of chances they have left for that word.
        The scoreboard keeps track of the number of words guessed correctly in a row by a player.
        But beware: 5 Strikes and You're Out!
      </h3>

      <div className="bottom-elements">
      <mini className="container-fluid bg-purple text-light">
        <div>He is eepy</div>
      </mini>
      <picture className="container-fluid bg-purple">
      <div id="picture" className="picture-box"><img width="25px" src="data:image/jpeg;base64,/9j/4AAQSkZJR
        gABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhIQFRUSEBAQEhAVFRAVEA8PFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zO
        DMtNygtLisBCgoKDg0OFRAQFysdHR0tLSsrKysrLS0tLS0tLS0tLS0rLS0tNy0tLS0tLS0tNzctKy0rLS0tKy0rLSstKysrK
        //AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADQQAAIBAwIEBAYBAgcBAAAAAAABA
        gMEEQUhEjFBYSJRcZETMoGx0fChBpIVQlJyweHxFP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAB0RAQEBAQACAwEAA
        AAAAAAAAAABEQIDIRIxQRP/2gAMAwEAAhEDEQA/APKUOhkEjLXoCiOkJBoAZIcdB4AGRWm9yy+RVY18CQWRoIcG/NxJBk0WQ
        0wxVtz9Diw8kSY6Yj32sU2XbGW5mRkWraql5g3306GN5iPyrPnuVaFbLb5/b05lKVysdfbBBTq+vvhAuX06Cncy7f3Y+yJat
        xPHNf3yOfjLHPHuH8ZeUf36DQ0K8s7vh/l/cz5rPm/sJ1/Qidb1+gtVKt0k+kY57sPL6xi/rv8AYq05ZWcP3kFjs/XxAi1NN
        r/TgiYDfr7guoCdTKeOhJCr3/JVcgHMZa1P/o/3fv1EZnxGINP5RgIMYKIPJokgkCkHFDI+AhsBRQGCtyKzJ7h9CEGnIkIWB
        RG3iSIQCQZONJfRYEMhAcFkkpshyHBg0+SWUg6TIGSRf7uJrvpa+IvL+WLjRHCa7fyFxenuwLR/ET/WNF/uPyC36e7G4vQQ1
        apyx1fuizCa836cUdvXKM9VMf5vsSQq4fP7DRV91X1XblFp+xXrKPZemV9yN1M9V7fgactv+/yCEc6a8/36EcmFJognIC0fG
        vL7jkfxP3cQxrOiGkCg0DzTxCQyQaHCp0EkNEJsYipVe7AFIURNp9CQoofARTWUyDyNFBk1ZsDKGRSkPSq7gU6P8NkkYNFmj
        hluVplbCbS6yWPxFqrbPPIrThgSvmSY6fYi4g2gE7lHkJPywDCIewKlOpegWSLP7kJbgVp5SHUwGhmCUnF3I2xZYEmMqLIgc
        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" alt="kitty" /></div>
      </picture>
      </div>
    </main>
    </>
  );
}