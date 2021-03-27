import React, { Component } from 'react';

export default class course extends Component {
    state = {
        appear: false,

    }

    toogle = () => {
        var ap = !this.state.appear;
        this.setState({ appear: ap })
    }
    render() {

        return (
            <div>
                    {/*html code */}
            </div >
        )
    }

}