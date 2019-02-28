import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

export default class Weather extends Component {
    state = {
        data: '',
        zipcode: "Phuket",
        isLoading: true
    }
    componentDidMount = () => {
        this.getWeather(this.state.zipcode)

    }
    getWeather = (zipcode) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${zipcode},Thailand&appid=cfeb725d01644b47a77c881dfaa4b39b&units=metric`)
            .then(response => {
                this.setState({ data: response.data })
                console.log(response.data)
            }).finally(() => {
                this.setState({ isLoading: false })
            })
    }
    handleChagne = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { data, isLoading } = this.state
        return (
            <div><br />
                {isLoading === true && (
                    <h1>กำลังดาวน์โหลด...</h1>
                )}
                {isLoading === false && (
                    <div align='center'>
                        <div className="container">

                            <div class="card weather f">
                                <div class="card-body">
                                    <input name="zipcode" class="form-group mx-sm-3 mb-2" placeholder="City..." onChange={this.handleChagne} />
                                    <button class="btn btn-primary" color="info" onClick={() => this.getWeather(this.state.zipcode)}>Search</button><br /><br />
                                    <tr ><strong>City/เมือง : </strong> {data.name} - {data.sys.country}</tr>
                                    <tr><strong>Humidity/ความชื้น : </strong> {data.main.humidity} %</tr>
                                    <tr><strong>Pressure/ความดัน : </strong> {data.main.pressure} hPa</tr>
                                    <tr><strong>Temperature/อุณหภูมิ : </strong> {data.main.temp} &deg;C</tr>
                                    <tr><strong>Temperature Max/อุณหภูมิสูงสุด : </strong> {data.main.temp_max} &deg;C</tr>
                                    <tr><strong>Temperature Min/อุณหภูมิต่ำสุด : </strong> {data.main.temp_min} &deg;C</tr>
                                    <tr><strong>Speed Wind/ความเร็วลม : </strong> {data.wind.speed}  km/h</tr>
                                    <tr><strong>Weather/สภาพอากาศ : </strong> {data.weather[0].main}</tr>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                <br /><br /><br />

            </div>


        )
    }
}
