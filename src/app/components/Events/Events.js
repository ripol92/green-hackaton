import React, { Component } from 'react'

import './events.css';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventID: -1
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(index, event) {
    this.setState({
      eventID: index
    }, () => {
      this.props.onEventClick(event)
    });
  }

  render() {
    const eventItems = this.props.eventItems && this.props.eventItems.length > 0 ?
      this.props.eventItems.map((item, index) => {
        return (
          <li className="item" key={index}>
            <a href="#"
              onClick={() => this.toggle(index, item)}
              className={`event ${
                this.state.eventID === index ? "active" : ""
                }`} >
              <p className={`comment ${this.state.eventID === index ? "show" : ""}`}>{item.comment}</p>

              {
                this.state.eventID === index ?
                  <img src={item.image_link} className="event-img" alt="event-img" /> :
                  <div className="img-preview-content">
                    <img src={item.image_link} className="event-img" alt="event-img" />
                  </div>
              }
            </a>
          </li>
        );
      }) : <></>

    return (
      <div className="Events">
        <div className="header">
          <h2 className="logo"><span className="green">Clean</span> City</h2>
        </div>
        <div className="events">
          <ul className="event-items">
            {eventItems}
          </ul>
        </div>
          <div style={{justifyContent: "center", display: "flex"}}>
              {this.props.pagination}
          </div>
      </div>
    )
  }

    handleImageClick(file_link) {

    }
}

export default Events;