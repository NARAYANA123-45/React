import React from "react";

export default class Images extends React.Component{
    state = {
        image: [
            "https://images.app.goo.gl/vFcjqZhZKgcBQ7pY7",
            "https://images.app.goo.gl/zz8oCSnqAgrjPTVV6",
            "https://images.app.goo.gl/oFgAhzMabrnVy3K96",
            "https://images.app.goo.gl/LKCS1DaV2gf3VW35A"
        ]
    };

    render() {
        return(
        <div> 
            <img
             src={this.state.image[0]}/>
            </div>
        );
    }

}