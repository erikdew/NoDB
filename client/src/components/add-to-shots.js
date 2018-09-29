import React, { Component } from 'react'

class AddToShots extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            normal: "",
            title: "",
            tags: "",
            created_at: "",
            user:
                { name: "" }


        }

    }

    handleChangeName = (e) => {
        this.setState({ query: this.search.tags })
    }
    handleChangeImage = (e) => {
        this.setState({ normal: e.target.value })
    }
    // handleChangeScary = (e) => {
    //     this.setState({ scary: { level: e.target.value } })
    // }


    render() {
        return (
            <div>
                <label className=''>TAGS</label><input value={this.state.tags} onChange={this.handleChangeName} />
                <label>START DATE</label><input value={this.state.normal} onChange={this.handleChangeImage} />
                <label>END DATE</label><input value={this.state.normal} onChange={this.handleChangeImage} />
                <button onClick={() => this.props.onClick(this.state)}>Submit Search</button>

            </div>
        );
    }



}

export default AddToShots;
