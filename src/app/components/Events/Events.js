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
              <p className="comment">{item.comment}</p>
              {
                this.state.eventID === index ? <img src={item.file_link} className="event-img" alt="event-img" /> : <></>
              }
            </a>
          </li>
        );
      }) : <></>

    return (
      <div className="Events">
        <div className="header">
          <h1 className="logo"><span className="green">Clean</span> City</h1>
        </div>
        <div className="events">
          <ul className="event-items">
            {eventItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default Events;