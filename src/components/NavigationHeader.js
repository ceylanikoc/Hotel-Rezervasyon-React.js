import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";

export class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      steps: props.steps,
    };
  }
  render() {
    let ClassName1;
    if (this.props.steps === 1) {
      ClassName1 = "nav-item active";
    } else {
      ClassName1 = "nav-item";
    }
    let ClassName2;
    if (this.props.steps === 2) {
      ClassName2 = "nav-item active";
    } else {
      ClassName2 = "nav-item";
    }
    let ClassName3;
    if (this.props.steps === 3) {
      ClassName3 = "nav-item active";
    } else {
      ClassName3 = "nav-item";
    }
    return (
      <div className="row mb-4 mb-lg-5 ">
        <div className="nav-container-area">
          <div className="nav-item-area">
            <div className={ClassName1}>
              <div className="icons">
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              </div>
              <div className="nav-text">
                <span>
                  Otel ve Tarih <br /> Seçimi
                </span>
              </div>
            </div>
            <div className={ClassName2}>
              <div className="icons">
                <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
              </div>
              <div className="nav-text">
                <span>
                  Oda Tipi ve Manzara <br /> Seçimi
                </span>
              </div>
            </div>
            <div className={ClassName3}>
              <div className="icons">
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              </div>
              <div className="nav-text">
                <span>
                  Önizleme ve Ödeme <br /> İşlemleri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationHeader;
