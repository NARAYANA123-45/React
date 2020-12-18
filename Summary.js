import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <div class="quantity buttons_added">
  <input id="minus" type="button" class="minus" value="-"></input>
  <input id="theInput" type="number" size="4" 
  class="input-text qty text" title="Qty" value="1" min="0" step="1"></input>
  <input id="plus" type="button" class="plus" value="+"></input>
</div>
            
        )
    }
}

<button class="quantity"> – </button>
    <div class="plus">
 
        <input type="number" text="1" class="plus"></input>
            </div>
            <button class="quantity"> + </button>
            <input type="submit" value="Submit" />
            </div>