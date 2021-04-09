import React from 'react'

class SearchBar extends React.Component {
    // called anytime someone inputs text
    onInputChange(event) {
        // contains whatever is typed in
        console.log(event.target.value)
    }

    // do not add () to onInputChange callback
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar