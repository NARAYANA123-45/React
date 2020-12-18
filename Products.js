import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className = "text-center">
                  
                <table>
                    <tr>
                    <th>SNo</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
                    <tr>
                    <th>1</th>
                    <th>Car</th>
                    <th>1000</th>
                    <th>1</th>
                    </tr>
                </table>
              </div>
             
            </div>
            
        )
    }
}
