import React, { Component } from 'react';

class ListView extends Component {

  render() {
    return (
      <div className="devices-list">
          <h3>Devices</h3>
          <ul className="devices-available">
              <li className="device-list-item">
                  <img src="https://s3.amazonaws.com/rtlassets/galaxy/note8.png" id="5720" />
                  <div className="device-desc">
                      <div className="device-model">Galaxy Note8</div>
                      <div className="device-carrier">TMOBILE</div>
                      <div className="device-carrier">5720</div>
                      <div className="device-btn" id="5720">Reserve</div>
                  </div>
              </li>
              <li className="device-list-item">
                  <img src="https://s3.amazonaws.com/rtlassets/galaxy/note8.png" id="5720" />
                  <div className="device-desc">
                      <div className="device-model">Galaxy Note8</div>
                      <div className="device-carrier">TMOBILE</div>
                      <div className="device-carrier">12345</div>
                      <div className="device-btn" id="12345">Reserve</div>
                  </div>
              </li>
              <li className="device-list-item">
                  <img src="https://s3.amazonaws.com/rtlassets/galaxy/s8.png" id="5720" />
                  <div className="device-desc">
                      <div className="device-model">Galaxy S8</div>
                      <div className="device-carrier">TMOBILE</div>
                      <div className="device-carrier">8999</div>
                      <div className="device-btn" id="8999">Reserve</div>
                  </div>
              </li>
          </ul>
      </div>
    );
  }
}

export default ListView;
