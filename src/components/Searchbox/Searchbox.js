import React from 'react';

class Searchbox extends React.Component {
    render () {
        return (
            <div>
                <label for='searchbox'>
                </label>
                <input
                    className='pa2 ma3' 
                    type='text'
                    id='searchbox'
                    placeholder='search'
                    onChange={e => this.props.onSearchChange(e.target.value)}
                />
            </div>
        )
    }
}

export default Searchbox;