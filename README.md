#Notes
first you need to install redux and react-redux libraries.

After that 2 folders need to be created, one called actions aon other one called reducers.

On reducers you will create a file with each reducer you want to use.

A reducer is only a const that receives a state and an action, the state on the () will be the initial state, and the action will be passed inside the constant to enter a switch were you will return the state modified depending the action.

Note: the action is an object with a key called type that stores the value to be evaluated in the switch.

After all the reducers are declared you will merge them together with the combineReducers imported from redux.

In the index you will call createStore from redux and Provider from react-redux.

Now you will call AllReducers and create a const called store.

you will use the function createStore with AllReducers inside and you will put the Provider around App()
