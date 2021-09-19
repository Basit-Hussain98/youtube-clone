import React , {Component} from 'react'
import './SearchBar.css'
class SearchBar extends Component {
    state = { 
        inpVal:''
     }
     onInputHandler = (e) => {
        this.setState({
            inpVal:e.target.value
        })
     }
     onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inpVal)
     }
    render() { 
     
        
        return ( 
            <div className="ui container" style={{ marginTop: '20px' }}>
				<div className="ui segment">
					<form className="ui form" onSubmit={this.onFormSubmit}> 
						<div className="ui field">
                       <div className="logo" >
                         <i className="fab fa-youtube fa-2x " style={{color:'red'}}></i>
							<label className='logo-text'>YouTube</label>
                       </div>
							<input
								type="text"
								placeholder="Search..."
                                onChange={this.onInputHandler}
                                value={this.state.inpVal}
								
							/>
						</div>
					</form>
				</div>
			</div>
         );
    }
}
 
export default SearchBar;