import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import axios from 'axios';
import "./App.css";

const sendData = data => {
    axios.post('https://pacific-temple-84076.herokuapp.com/save', {
    // axios.post('http://127.0.0.1:3001/save', {
        data: data
        })
        .then(function (response) {
            alert(response.body);
        })
        .catch(function (error) {
            console.log(error);
        });
    alert("Your data has been uploaded successfully.")
};

class Reader extends Component {
    render() {
        return (
            <div className="container">
                <CSVReader
                    cssClass="react-csv-input"
                    label="Upload Data Set"
                    onFileLoaded={sendData}
                />
            </div>
            );
        }
    }

export default Reader;
