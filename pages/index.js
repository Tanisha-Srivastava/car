import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    updateDateTime();
    updateBatteryInfo();
    const interval = setInterval(() => {
      updateDateTime();
      updateBatteryInfo();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <header className="header">
        <div className="left-section">
          <div className="time-date-weather">
            <div className="time-date">
              <p id="time">12:45 PM</p>
              <p id="date">Sunday, 5 May</p>
            </div>
            <div className="weather">
              <p id="weather-icon">
                <img src="/sun-removebg-preview.png" alt="Sun" />
              </p>
              <p id="temperature">23°C / 27°C</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="connectivity-icons">
            <div className="icon" style={{ backgroundImage: "url('/net1-removebg-preview.png')" }}></div>
            <div className="icon" style={{ backgroundImage: "url('/bluetooth-removebg-preview.png')" }}></div>
            <div className="icon" style={{ backgroundImage: "url('/5g-removebg-preview.png')" }}></div>
          </div>
          <div className="battery-info-bar">
            <div className="battery-info">
              <div className="remaining">
                <span className="remaining-km" id="distance">204</span><span className="unit">km</span>
                <div className="remaining-text">Remaining</div>
              </div>
              <div className="battery">
                <span className="battery-percentage" id="battery">85</span><span className="unit">%</span>
                <div className="battery-text">Battery</div>
              </div>
              <div className="average">
                <span className="avg-wh" id="average">128</span><span className="unit">Wh/km</span>
                <div className="average-text">Average</div>
              </div>
            </div>
            <div className="battery-bar-container">
              <div className="battery-bar-base">
                <div className="battery-bar-fill" id="battery-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="driveimage">
          <img src="/Frame 4564 (1).svg" alt="driving" />
        </div>
      </main>
      <footer className="footer">
        <div className="toolbar">
          <button className="icon-button" style={{ backgroundImage: "url('/apps.jpeg')" }} onClick={() => openNewPage('https://example.com/page1')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/call.png')" }} onClick={() => openNewPage('https://example.com/page2')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/music.jpeg')" }} onClick={() => openNewPage('https://example.com/page6')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/car.jpeg')" }} onClick={() => openNewPage('https://example.com/page4')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/nav.jpeg')" }} onClick={() => openNewPage('https://example.com/page5')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/ac.jpeg')" }} onClick={() => openNewPage('https://example.com/page6')}></button>
          <button className="icon-button" style={{ backgroundImage: "url('/settings.jpeg')" }} onClick={() => openNewPage('https://example.com/page3')}></button>
        </div>
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-item">
              <a href="https://www.primevideo.com" target="_blank">
                <img src="/prime-removebg-preview.png" alt="YouTube" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.youtube.com" target="_blank">
                <img src="/youtube-removebg-preview.png" alt="YouTube" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.instagram.com" target="_blank">
                <img src="/intagram-removebg-preview.png" alt="Instagram" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.spotify.com" target="_blank">
                <img src="/spotify-removebg-preview.png" alt="Spotify" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.netflix.com" target="_blank">
                <img src="/netflix-removebg-preview.png" alt="Netflix" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.google.com/maps" target="_blank">
                <img src="/map-removebg-preview.png" alt="Maps" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script src="/script2.js"></script>
    </div>
  );
}

function openNewPage(url) {
  window.open(url, '_blank');
}

function updateBatteryInfo() {
  const batteryValue = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
  document.getElementById('battery').textContent = batteryValue;
  const batteryBarFill = document.getElementById('battery-bar-fill');
  batteryBarFill.style.height = batteryValue + '%';
  const remainingDistance = Math.floor(batteryValue * 2.4);
  document.getElementById('distance').textContent = remainingDistance;
  const averageConsumption = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
  document.getElementById('average').textContent = averageConsumption;
}

function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const timeString = `${displayHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  document.getElementById('time').textContent = timeString;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const dateString = `${day}, ${date} ${month}`;
  document.getElementById('date').textContent = dateString;
}
