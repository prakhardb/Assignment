import React from 'react';

 class Search extends React.Component { 
    constructor(props) {
        super(props);
        //Initialize the state
        this.state = { term : '' };
    }
    
    render() {
       return ( 
    <div>
       <input className="search" placeholder="Search Here..."
         value={this.state.term} 
        onChange={event => this.onInputChange( event.target.value )} />
        </div> 
       ); 
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
 }

export default Search;