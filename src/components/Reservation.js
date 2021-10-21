import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SaveNext from "./SaveNext";
import CreditCart from "./CreditCart";
import NavigationHeader from "./NavigationHeader";
export class Reservation extends Component {
  constructor(props) {
    super(props);
    this.hotelOnChange = this.hotelOnChange.bind(this);
    this.radioRoomChage = this.radioRoomChage.bind(this);
    this.radioRoomTypeChange = this.radioRoomTypeChange.bind(this);
    this.hotelOnAdult = this.hotelOnAdult.bind(this);
    this.hotelOnChild = this.hotelOnChild.bind(this);
    this.newReservation = this.newReservation.bind(this);
    this.ReservationUpdate = this.ReservationUpdate.bind(this);
    this.state = {
      choseHotel: {
        hotel_id: 0,
        steps: 1,
        name: null,
        city: null,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        adult: 1,
        child: 0,
        room_type: [],
        room_scenic: [],
        total_price: 0,
        total_price_rate: 0,
        total_day: 0,
        total_day_price: 0,
      },
      HotelList: [
        {
          hotel_id: 1,
          name: "Bosphorus Hotel",
          city: "Istanbul",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 1000,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 2000,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 3500,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 2,
          name: "Big Istanbul Hotel",
          city: "Istanbul",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 575,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 1250,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 1593,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 3,
          name: "Aegean Hotel",
          city: "Ankara",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 500,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 1000,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 1270,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 4,
          name: "Dela Hotel",
          city: "Izmir",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 785,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 950,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 1580,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 5,
          name: "Lara Hotel",
          city: "Antalya",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 280,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 360,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 700,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 6,
          name: "Bodrum Hotel",
          city: "Muğla",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 580,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 950,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 1300,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 7,
          name: "Visnezade Istanbul Hotel",
          city: "Istanbul",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 2000,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 3000,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 5000,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 8,
          name: "Konak Istanbul Hotel",
          city: "Istanbul",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 100,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 200,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 300,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 9,
          name: "Dardania Hotel",
          city: "Istanbul",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 1500,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 2000,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 4500,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
        {
          hotel_id: 10,
          name: "Alanya Hotel",
          city: "Antalya",
          room_type: [
            {
              id: 1,
              title: "Standart",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-standart.jpg",
              price: 150,
            },
            {
              id: 2,
              title: "Deluxe",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-deluxe.jpg",
              price: 250,
            },
            {
              id: 3,
              title: "Suit",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/1-suit.jpg",
              price: 500,
            },
          ],
          room_scenic: [
            {
              id: 1,
              title: "Kara Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/land-view.jpg",
              price_rate: 1,
            },
            {
              id: 2,
              title: "Havuz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/pool-view.jpg",
              price_rate: 15,
            },
            {
              id: 3,
              title: "Deniz Manzaralı",
              photo:
                "https://teknasyon-mailling.s3.eu-central-1.amazonaws.com/challenge/frontend/img/sea-view.jpg",
              price_rate: 38,
            },
          ],
        },
      ],
    };
  }
  componentDidMount() {
    const jsonChoseHotel = localStorage.getItem("ChoseHotel");
    const localChoseHotel = JSON.parse(jsonChoseHotel);
    if (localChoseHotel) {
      this.setState({
        choseHotel: localChoseHotel,
      });
    }
  }
  componentDidUpdate() {
    const jsonHotelChose = JSON.stringify(this.state.choseHotel);
    localStorage.setItem("ChoseHotel", jsonHotelChose);
  }
  hotelOnChange(event) {
    let val = event.target.value;
    let city =
      event.target[event.target.options.selectedIndex].attributes[2].nodeValue;
    let name = event.nativeEvent.target[event.target.selectedIndex].text;
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        hotel_id: val,
        name: name,
        city: city,
      },
    });
  }
  radioRoomChage(event) {
    let roomScenicSelect = event.target.value;
    let total_day = event.target.attributes[4].nodeValue;
    let total_price = event.target.attributes[3].nodeValue;
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        room_scenic: roomScenicSelect,
        total_price: total_price,
        total_day: total_day,
      },
    });
  }
  radioRoomTypeChange(event) {
    let total_day = this.state.choseHotel.total_day;
    let total_price = this.state.choseHotel.total_price;
    let total_price_rate = event.target.attributes[3].nodeValue;
    let rate = total_price_rate;
    let total_day_plus = total_day * total_price;
    let total_day_plus_rate = (total_day_plus * rate) / 100;
    let total_day_price = total_day_plus + total_day_plus_rate;
    let roomTypeSelect = event.target.value;
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        room_type: roomTypeSelect,
        total_price_rate: total_price_rate,
        total_day_price: total_day_price,
      },
    });
  }
  hotelOnAdult(event) {
    let adultVal = event.target.value;
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        adult: adultVal,
      },
    });
  }
  hotelOnChild(event) {
    let childVal = event.target.value;
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        child: childVal,
      },
    });
  }
  newReservation() {
    localStorage.removeItem("ChoseHotel");
    window.location.reload();
  }
  ReservationUpdate() {
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        steps: 1,
      },
    });
  }
  changeSteps(x) {
    this.setState({
      choseHotel: {
        ...this.state.choseHotel,
        steps: x,
      },
    });
  }
  render() {
    const selectStartDate = new Date(this.state.choseHotel.startDate);
    const selectEndDate = new Date(this.state.choseHotel.endDate);
    return (
      <div className="container">
        {this.state.choseHotel.steps !== 4 && (
          <NavigationHeader steps={this.state.choseHotel.steps} />
        )}

        {this.state.choseHotel.steps === 1 && (
          <div className="reservation-container row">
            <SelectHotel
              HotelList={this.state.HotelList}
              hotelOnChange={this.hotelOnChange}
              choseHotel={this.state.choseHotel}
            />
            <div className="date-area col-md-6 col-lg-3" id="start-date">
              <div className="title">Giriş Tarihi</div>
              <div className="bottom">
                <DatePicker
                  selected={selectStartDate}
                  placeholderText={this.state.choseHotel.startDate}
                  onChange={(date) =>
                    this.setState({
                      choseHotel: {
                        ...this.state.choseHotel,
                        startDate: date.toISOString(),
                      },
                    })
                  }
                />
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              </div>
            </div>
            <div className="date-area col-md-6 col-lg-3" id="end-date">
              <div className="title">Çıkış Tarihi</div>
              <div className="bottom">
                <DatePicker
                  selected={selectEndDate}
                  placeholderText={this.state.choseHotel.endDate}
                  onChange={(date) =>
                    this.setState({
                      choseHotel: {
                        ...this.state.choseHotel,
                        endDate: date.toISOString(),
                      },
                    })
                  }
                />
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              </div>
            </div>
            <div className="adult-area col-md-6 col-lg-3">
              <div className="title">Yetişkin Sayısı</div>
              <SelectAdult
                hotelOnAdult={this.hotelOnAdult}
                choseHotel={this.state.choseHotel}
              />
            </div>
            <div className="child-area col-md-6 col-lg-3">
              <div className="title">Çocuk Sayısı</div>
              <SelectChild
                hotelOnChild={this.hotelOnChild}
                choseHotel={this.state.choseHotel}
              />
            </div>
          </div>
        )}
        {this.state.choseHotel.steps === 2 && (
          <div className="choose-otel-list row">
            <div className="select-room-info col-12">
              <div className="otel-name">
                <div>{this.state.choseHotel.name} </div>
                <span>({this.state.choseHotel.city})</span>
              </div>
              <div className="reservation-otel-detail">
                <div>
                  <b>Giriş Tarihi: </b>
                  {new Date(
                    this.state.choseHotel.startDate
                  ).toLocaleDateString()}{" "}
                  <span>-</span>
                </div>
                <div>
                  <b>Çıkış Tarihi: </b>
                  {new Date(
                    this.state.choseHotel.endDate
                  ).toLocaleDateString()}{" "}
                  <span>-</span>
                </div>{" "}
                <div>
                  <b>Yetişkin: </b> {this.state.choseHotel.adult}
                </div>
                <div>
                  {this.state.choseHotel.child > 0 && <span> -</span>}
                  {this.state.choseHotel.child > 0 && <b> Çocuk </b>}
                  {this.state.choseHotel.child > 0 &&
                    this.state.choseHotel.child}
                </div>
              </div>
            </div>
            <SelectRoom
              HotelList={this.state.HotelList}
              choseHotel={this.state.choseHotel}
              radioRoomChage={this.radioRoomChage}
              radioRoomTypeChange={this.radioRoomTypeChange}
            />
          </div>
        )}
        {this.state.choseHotel.steps === 3 && (
          <div>
            <div className="payment">
              <div className="row">
                <div className="col-md-7">
                  <CreditCart />
                </div>
                <div className="col-md-5">
                  <div className="payment-info">
                    <div className="payment-info-title">
                      {this.state.choseHotel.name}
                      <span>({this.state.choseHotel.city})</span>
                    </div>
                    <div className="payment-info-boxes">
                      <div className="box">
                        <div className="title">Giriş Tarihi:</div>
                        <span>
                          {new Date(
                            this.state.choseHotel.startDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="box">
                        <div className="title">Çıkış Tarihi:</div>
                        <span>
                          {new Date(
                            this.state.choseHotel.startDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="box">
                        <div className="title">Yetişkin:</div>
                        <span>{this.state.choseHotel.adult}</span>
                      </div>
                      <div className="box">
                        <div className="title">Çocuk:</div>
                        <span>{this.state.choseHotel.child}</span>
                      </div>
                      <div className="box">
                        <div className="title">Oda Tipi:</div>
                        <span>{this.state.choseHotel.room_scenic}</span>
                      </div>
                      <div className="box">
                        <div className="title">Manzara:</div>
                        <span>{this.state.choseHotel.room_type}</span>
                      </div>
                    </div>
                    <div className="payment-info-price">
                      <div className="item">
                        <span>Oda Fiyatı</span>
                        <span>{this.state.choseHotel.total_price} TL</span>
                      </div>
                      <div className="item">
                        <span>Fiyat Etki Oranı</span>
                        <span>%{this.state.choseHotel.total_price_rate}</span>
                      </div>
                      <div className="item">
                        <span>
                          Konaklama
                          <i>({this.state.choseHotel.total_day} Gün)</i>
                        </span>
                        <span>
                          {this.state.choseHotel.total_price *
                            this.state.choseHotel.total_day}
                          <span> TL</span>
                        </span>
                      </div>
                      <hr />
                      <div className="total">
                        <div className="title">TOPLAM TUTAR</div>
                        <div className="total-sub-title">
                          {this.state.choseHotel.total_day_price}
                          <span> TL</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.choseHotel.steps === 4 && (
          <div>
            <div className="success">
              <div className="success-top">
                <div className="col-md-12">
                  <div className="success-message">
                    <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
                    <span>
                      <b>Rezervasyon Kaydınız Alınmıştır.</b>
                    </span>
                    <span>
                      Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon
                      kaydınızda değişiklik veya yeni rezarvasyon yapmak için
                      aşağıdaki linkleri kullanabilirsiniz.
                    </span>
                  </div>
                  <div className="success-change-buttons">
                    <div
                      className="btn btn-primary"
                      onClick={this.newReservation}
                    >
                      Yeni Rezervasyon Yap
                    </div>
                    <div
                      className="btn btn-primary"
                      onClick={this.ReservationUpdate}
                    >
                      Rezervasyonu Güncelle
                    </div>
                    <div
                      className="btn btn-primary"
                      onClick={this.newReservation}
                    >
                      Rezervasyonu İptal Et
                    </div>
                  </div>
                </div>
              </div>
              <div className="success-bottom">
                <div className="hotel-name">
                  {this.state.choseHotel.name}
                  <span>({this.state.choseHotel.city})</span>
                </div>
                <div className="hotel-info">
                  <div className="box-info">
                    <span>Giriş Tarihi :</span>
                    <span>
                      {new Date(
                        this.state.choseHotel.startDate
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="box-info">
                    <span>Çıkış Tarihi :</span>
                    <span>
                      {new Date(
                        this.state.choseHotel.endDate
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="box-info">
                    <span>Yetişkin :</span>
                    <span>{this.state.choseHotel.adult}</span>
                  </div>
                  <div className="box-info">
                    <span>Çocuk :</span>
                    <span>{this.state.choseHotel.child}</span>
                  </div>
                  <div className="box-info">
                    <span>Oda Tipi :</span>
                    <span>{this.state.choseHotel.room_scenic}</span>
                  </div>
                  <div className="box-info">
                    <span>Manzara :</span>
                    <span>{this.state.choseHotel.room_type}</span>
                  </div>
                </div>
                <div className="pay-info">
                  <div>
                    <span>Oda Fiyatı</span>
                    <span>{this.state.choseHotel.total_price} TL</span>
                  </div>
                  <div>
                    <span>Fiyat Etki Oranı</span>
                    <span>%{this.state.choseHotel.total_price_rate}</span>
                  </div>
                  <div>
                    <span>
                      Konaklama
                      <i>({this.state.choseHotel.total_day} Gün)</i>
                    </span>
                    <span>
                      {this.state.choseHotel.total_price *
                        this.state.choseHotel.total_day}
                      <span> TL</span>
                    </span>
                  </div>
                  <hr />
                  <div className="pay-total">
                    <div className="title">TOPLAM TUTAR</div>
                    <div className="total-sub-title">
                      {this.state.choseHotel.total_day_price}
                      <span> TL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <SaveNext
          steps={this.state.choseHotel.steps}
          choseHotel={this.state.choseHotel}
          changeSteps={this.changeSteps.bind(this)}
        />
      </div>
    );
  }
}
function SelectHotel(props) {
  return (
    <div className="reservation-select col-12">
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      <select
        value={props.choseHotel.hotel_id}
        onChange={props.hotelOnChange}
        name="HotelList"
        id="HotelList"
      >
        <option value="no-chose" key="no-chose">
          Rezervasyon yapmak istediğiniz oteli seçiniz.
        </option>
        {props.HotelList.map((item, index) => (
          <option
            value={item.hotel_id}
            key={item.hotel_id}
            name={item.name}
            city={item.city}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
function SelectRoom(props) {
  let filterHotelId = Number(props.choseHotel.hotel_id);
  let FilterHotelList = props.HotelList.filter(
    (id) => id.hotel_id === filterHotelId
  );
  let RoomScenic = {};
  let RoomType = {};
  RoomScenic = FilterHotelList[0].room_scenic;
  RoomType = FilterHotelList[0].room_type;
  let startDatex = new Date(props.choseHotel.startDate).getTime();
  let endDatex = new Date(props.choseHotel.endDate).getTime();
  let timeDif = Math.abs(startDatex - endDatex);
  let difDay = Math.ceil(timeDif / (1000 * 3600 * 24));
  return (
    <>
      <div className="row select-room-type">
        <div className="col-12 title">Oda Tipi Seçimi</div>
        {RoomType.map((item, index) => (
          <div className="col-lg-4">
            <div className="form-group">
              <input
                name="radio_room"
                type="radio"
                key={index + item.title}
                id={item.title}
                value={item.title}
                onChange={props.radioRoomChage}
                price={item.price}
                total_day_value={difDay}
                checked={props.choseHotel.room_scenic === item.title}
              />
              <label htmlFor={item.title} className="radio-label">
                <span>{item.title}</span>
                <img src={item.photo} alt={item.name} />
                <div>
                  <span> {difDay} Gün</span>
                  <span> {props.choseHotel.adult} Yetişkin</span>
                  <span> {props.choseHotel.child} Çocuk</span>
                  <span className="price">{difDay * item.price} TL</span>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="row select-room-scenic">
        <div className="col-md-12 title">Manzara Seçimi</div>
        {RoomScenic.map((item, index) => (
          <div className="col-md-4">
            <div className="form-group">
              <input
                name="radio_room_type"
                type="radio"
                key={index + `_` + item.title}
                id={item.title}
                value={item.title}
                onChange={props.radioRoomTypeChange}
                price_rate={item.price_rate}
                checked={props.choseHotel.room_type === item.title}
              />
              <label htmlFor={item.title} className="radio-label">
                <span>{item.title}</span>
                <img src={item.photo} alt={item.name} />
                <div>
                  <span>Fiyat Etki Oranı</span>
                  <span className="price">+ {item.price_rate} %</span>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function SelectAdult(props) {
  return (
    <select
      value={props.choseHotel.adult}
      onChange={props.hotelOnAdult}
      name="AdultNumber"
      id="AdultNumber"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
}

function SelectChild(props) {
  return (
    <select
      value={props.choseHotel.child}
      onChange={props.hotelOnChild}
      name="ChildNumber"
      id="ChildNumber"
    >
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  );
}

export default Reservation;
