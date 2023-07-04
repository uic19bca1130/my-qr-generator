import React, { useState } from 'react'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('location')

  const selectTab = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div id="tabs-container" className="row w-100 tabs colour-Purple tabscolr">
      <ul className="nav nav-pills -primary" id="qr-type-pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'url' ? 'active' : ''}`}
            id="url"
            onClick={() => selectTab('url')}
            data-bs-toggle="pill"
            data-bs-target="#pills-url"
            data-qrtype="website"
            data-gaevent="QRCG: URL Tab Clicks"
            type="button"
            role="tab"
            aria-controls="pills-url"
            aria-selected={activeTab === 'url'}
          >
            <i className="fa fa-link" style={{ marginRight: 6 }} />
            URL
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'location' ? 'active' : ''}`}
            id="location"
            onClick={() => selectTab('location')}
            data-bs-toggle="pill"
            data-bs-target="#pills-location"
            data-qrtype="location"
            data-gaevent="QRCG: Location Tab Clicks"
            type="button"
            role="tab"
            aria-controls="pills-location"
            aria-selected={activeTab === 'location'}
          >
            <i className="fa fa-map-marker" style={{ marginRight: 6 }} />
            LOCATION
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'call' ? 'active' : ''}`}
            id="call"
            onClick={() => selectTab('call')}
            data-bs-toggle="pill"
            data-bs-target="#pills-call"
            data-qrtype="phone_call"
            data-gaevent="QRCG: Call Tab Clicks"
            type="button"
            role="tab"
            aria-controls="pills-call"
            aria-selected={activeTab === 'call'}
          >
            <i className="fa fa-phone" style={{ marginRight: 6 }} />
            CALL
          </button>
        </li>
        
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'text' ? 'active' : ''}`}
            id="text"
            onClick={() => selectTab('text')}
            data-bs-toggle="pill"
            data-bs-target="#pills-text"
            data-qrtype="text"
            data-gaevent="QRCG: Text Tab Clicks"
            type="button"
            role="tab"
            aria-controls="pills-text"
            aria-selected={activeTab === 'text'}
          >
            <i className="fa fa-align-left" style={{ marginRight: 6 }} />
            TEXT
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <div className="dropdown">
            
            
         
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li
                id="audio"
                onClick={() => selectTab('audio')}
              >
                <button
                  className={`dropdown-item ${activeTab === 'audio' ? 'active' : ''}`}
                  data-bs-toggle="modal"
                  data-bs-target="#premiumFeaturesModal"
                >
                  Audio
                </button>
              </li>
              <li
                id="coupon"
                onClick={() => selectTab('coupon')}
              >
                <button
                  className={`dropdown-item ${activeTab === 'coupon' ? 'active' : ''}`}
                  data-bs-toggle="modal"
                  data-bs-target="#premiumFeaturesModal"
                >
                  Coupon
                </button>
              </li>
              <li
                id="image"
                onClick={() => selectTab('image')}
              >
                <button
                  className={`dropdown-item ${activeTab === 'image' ? 'active' : ''}`}
                  data-bs-toggle="modal"
                  data-bs-target="#premiumFeaturesModal"
                  data-qr-type="image"
                >
                  Image
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
