import React,{ Component } from 'react';
import { View ,Text,Button} from 'react-native';
import { connect } from 'react-redux';

@connect(({global})=>({global}))
class Home extends Component{
	change = ()=>{
		const { dispatch } = this.props;
		dispatch({
			type:'global/default',
			payload:{
				index:'世界你好'
			}
		})
	}
	changeq = ()=>{
		const { dispatch } = this.props;
		dispatch({
			type:'global/change',
			payload:{
				index:'异步世界'
			}
		})
	}
	render(){
		const { global } = this.props;
		return(
			<View>
				<Text>
					hello {global.index}
				</Text>
				<Button title='同步数据' onPress={this.change}/>
				<Button title='异步数据' onPress={this.changeq}/>
			</View>
		)
	}
}


export default Home;