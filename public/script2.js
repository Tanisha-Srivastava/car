import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    function updateBatteryInfo() {
      var batteryValue = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
      var battery = document.getElementById('battery');
      if (battery) {
        battery.textContent = batteryValue;
      }
      var batteryBarFill = document.getElementById('battery-bar-fill');
      if (batteryBarFill) {
        batteryBarFill.style.width = batteryValue + '%';
      }
      var remainingDistance = Math.floor(batteryValue * 2.4);
      var distance = document.getElementById('distance');
      if (distance) {
        distance.textContent = remainingDistance;
      }
      var averageConsumption = Math.floor(Math.random() * (150 - 100 + 1)) + 100;
      var average = document.getElementById('average');
      if (average) {
        average.textContent = averageConsumption;
      }
    }

    function updateDateTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
      var time = document.getElementById('time');
      if (time) {
        time.textContent = timeString;
      }
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var dayOfWeek = days[now.getDay()];
      var month = months[now.getMonth()];
      var date = now.getDate();
      var dateString = dayOfWeek + ', ' + date + ' ' + month;
      var dateElem = document.getElementById('date');
      if (dateElem) {
        dateElem.textContent = dateString;
      }
    }

    function handleModeButtonClick(mode) {
      console.log('Selected mode:', mode);
    }

    function handleToolbarButtonClick(action) {
      console.log('Toolbar action:', action);
    }

    updateDateTime();
    updateBatteryInfo();

    const intervalId = setInterval(() => {
      updateDateTime();
      updateBatteryInfo();
    }, 60000);

    document.addEventListener('DOMContentLoaded', () => {
      var modeButtons = document.querySelectorAll('.mode-button');
      if (modeButtons) {
        modeButtons.forEach(button => {
          button.addEventListener('click', function () {
            var mode = this.querySelector('img').alt.split(' ')[0].toLowerCase();
            handleModeButtonClick(mode);
          });
        });
      }
      var toolbarButtons = document.querySelectorAll('.icon-button');
      if (toolbarButtons) {
        toolbarButtons.forEach((button, index) => {
          button.addEventListener('click', function () {
            handleToolbarButtonClick('action' + (index + 1));
          });
        });
      }
      const carousel = document.querySelector('.carousel');
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');
      const totalItems = document.querySelectorAll('.carousel-item').length;
      let index = 0;

      if (carousel && prevButton && nextButton && totalItems > 0) {
        function showSlide(n) {
          const itemsToShow = 3;
          const totalSlides = totalItems - itemsToShow + 1;
          if (n >= totalSlides) index = 0;
          else if (n < 0) index = totalSlides - 1;
          else index = n;
          carousel.style.transform = `translateX(${-index * (100 / itemsToShow)}%)`;
        }

        prevButton.addEventListener('click', () => {
          showSlide(index - 1);
        });

        nextButton.addEventListener('click', () => {
          showSlide(index + 1);
        });

        showSlide(index);
      }
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="time"></div>
      <div id="date"></div>
      <div id="battery"></div>
      <div id="battery-bar-fill"></div>
      <div id="distance"></div>
      <div id="average"></div>
      <div className="carousel">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
      </div>
      <button className="mode-button">
        <img src="mode1.png" alt="Mode 1" />
      </button>
      <button className="mode-button">
        <img src="mode2.png" alt="Mode 2" />
      </button>
      <button className="icon-button">Toolbar 1</button>
      <button className="icon-button">Toolbar 2</button>
    </div>
  );
};

export default Dashboard;
