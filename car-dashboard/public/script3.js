import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
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
      let index = 0;
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
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
