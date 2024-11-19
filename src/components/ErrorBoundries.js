import React,{Component} from 'react';

class ErrorBoundries extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}

		}
		componenetDidCatch(error, info){
			this.setState({hasError:true})
		}
	
	render()
	{
		if(this.state.hasError){
		return <h1>oooops!</h1>
		}
		return this.props.children
	}
}



export default ErrorBoundries;

