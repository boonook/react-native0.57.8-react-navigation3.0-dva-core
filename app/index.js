import React from 'react';
import { AppRegistry } from 'react-native';
import dva from './utils/dva';
import Home from './containers/index.js';
import * as models from './models';

const Model = (models=>{
	let ModelsArr = [];
	for(let i in models){
		ModelsArr.push(models[i])
	}
	return ModelsArr;
})(models)

const app = dva({
  initialState: {},
  models: Model,
  extraReducers: {},
  onAction: [],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Home />)


AppRegistry.registerComponent('dva_core', () => App)
