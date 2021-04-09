import React from 'react'

class SearchBar extends React.Component {
    // called anytime someone inputs text
    // onInputChange(event) {
    //     // contains whatever is typed in
    //     console.log(event.target.value)
    // }

    state = { term: '' }
    // **controlled element**
    // user types in input
    // callback gets invoked
    // call setState w/ new value
    // component re-renders
    // input told it's value (coming from state)
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e)=> this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar