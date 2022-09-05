import React from 'react';
// function Profile(props)
// {
//         return(
//             <div>
//             <h1>Hey Sanjay</h1>
//             <h1>It's your class Component</h1>
//             <h1>You made class Component successfully...</h1>
//             <button onClick={props.data}>Call Data Function</button>

//             </div>
//         )
// }
// export default Profile;

// function Profile() {
//     const shoot = () => {
//         alert("You are going to be successful!");
//     }
//     return(
//         <>
//         <h1>Hey Tap This Button...</h1>
//         <button onClick={shoot}>Tap me...</button>
//         </>
//     )
// }
// export default Profile;

// function Profile() {
//     const shoot = (a) => {
//         alert(a);
//     }
//     return(
//         <>
//         <h1>Hey Tap This Button...</h1>
//         <button onClick={()=>shoot("Great work!")}>Tap me...</button>
//         </>
//     )
// }
// export default Profile;


// function Car(props) {
//     return(
//         <li className='list'>I'm a {props.brand}</li>
//     )
// }

// function Profile() {
//     const cars = ["Ford", "Mustang", "Ferrari"];
//     return <>
//     <h1>Who lives in my Garage?</h1>
//     <ul>
//         {cars.map((car)=> <Car brand={car}/>)}
//     </ul>
//     </>
// }
// class Profile extends React.Component {
//     render()
//     {
//         // console.log("Render Method" ,this.props.name)
//         return(
//             <div>
//                 <h2>Hello {this.props.name}</h2>
//             </div>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         console.log("Hio This is Constructor Function")
//     }
//     componentDidMount(){
//         console.log("Hi This is componentDidMount...")
//     }
//     render(){
//         console.log("Hi Here is Render...")
//         return(
//             <h1>This code belongs with the componentDidMount...</h1>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name : "Sanjay Kumar"
//         }
//     }
//     componentDidMount(){
//         console.log("Hi This is componentDidMount...")
//     }
//     render(){
//         console.log("Hi Here is Render...")
//         return(
//             <div>
//                 <h1>This code belongs with the componentDidMount... {this.state.name}</h1>
//                 <button onClick={()=>{this.setState({name : "Jatin Kumar"})}}>Update Name</button>

//             </div>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         console.log("Hi this is Constructor...");
//         this.state={
//             name : "Jatin Kumar"
//         }
//     }
//     componentDidUpdate(){
//         console.log("Hi your componentDidUpdate got updated");
//     }
//     render(){
//         console.log("Hi this is Render...");
//         return(
//             <div>
//                 <h1>Hi This is componentDidUpdate {this.state.name} </h1>
//                 <button onClick={()=>{this.setState({name:"Sanjay Kumar"})}}>Update Component</button>
//             </div>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         console.log("Hi this is Constructor...");
//         this.state={
//             count : 0
//         }
//     }
//     componentDidUpdate(preProps, preState, snapShot){
//         console.log("componentDidUpdate got updated", preState.count,this.state.count);
//         if(preState.count===this.state.count) {
//             alert("Data is same");
//         }
//     }
//     render() {
//         // console.log("Hi this is Render...");
//         return(
//             <div>
//                 <h1>Your counter is updated {this.state.count} </h1>
//                 <button onClick={()=>{this.setState({count:1})}}>Update Component</button>
//             </div>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         console.log("Hi this is Constructor...");
//         this.state={
//             count : 0
//         }
//     }
//     componentDidUpdate(preProps, preState, snapShot){
//         console.log("componentDidUpdate got updated", preState.count,this.state.count);
//         if(this.state.count < 10) {
//             this.setState({count:this.state.count+1})
//         }
//     }
//     render() {
//         // console.log("Hi this is Render...");
//         return(
//             <div>
//                 <h1>Your counter is updated {this.state.count} </h1>
//                 <button onClick={()=>{this.setState({count:1})}}>Update Component</button>
//             </div>
//         )
//     }
// }

// class Profile extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
// }
// shouldComponentUpdate(){
//     console.log("Your Component got Updated", this.state.count);
//     if(this.state.count > 5 && this.state.count < 10){
//         return true;
//     }
// }
//     render() {
//         return(
//             <div>
//                 <h2>Tap to increase the Count {this.state.count}</h2>
//                 <button onClick={()=>this.setState({count:this.state.count + 1})}>Count Up</button>
//             </div>
//         )
//     }
// }

class Profile extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount called successfully!")
    }
    render() {
        return(
            <div>
                <h1>Tap to remove Child Component</h1>
            </div>
        )
    }
}
export default Profile;