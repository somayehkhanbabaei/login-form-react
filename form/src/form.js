import React, { Component } from 'react';
import EmailInput from './form/email';
import Password from './form/password';
import PasswordConf from './form/passwordConf'


class Form extends Component{
    constructor(props){
        super(props); 
        this.state = {
            email:'',
            emailErr:'',
            password:'',
            passwordErr:'',
            passwordConfirmation:'',
            passwordConfirmationErr:''
        }
    }

    emailInputHandler= (event)=> {
        this.setState({
            email: event.target.value,
            emailErr:''
        })
    }

    passwordInputHandler= (event)=> {
        this.setState({
            password: event.target.value,
            passwordErr:''
        })
    }

    passwordConfirmationInputHandler= (event)=> {
        this.setState({
            passwordConfirmation: event.target.value,
            passwordConfirmationErr: ""
        })
    }

    handelForm = (event)=> {
        event.preventDefault();
        if(!this.validateEmail(this.state.email)) {
            this.setState({
                emailErr:'Email is incorrect.'
            })
        } 
        if(this.state.password.length <= 5) {
            this.setState({
                passwordErr: "It must be more than 5 characters."
            })
        }
        if(this.state.password && this.state.password !== this.state.passwordConfirmation){
            this.setState({
                passwordConfirmationErr:"The password and password confirmation do not match."
            })
        }
    
        setTimeout(() => {
            if(!this.state.emailErr 
                && !this.state.passwordErr
                && !this.state.passwordConfirmationErr) {
                    console.log("Will be submitted");
                }
       }, 500);
            
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    render(){
        return(
            <form action="" onSubmit={this.handelForm}>
                <EmailInput
                    email={this.state.email}
                    emailErr={this.state.emailErr}
                    emailInputHandler={this.emailInputHandler}/>
                <Password 
                    password={this.state.password}
                    passwordErr={this.state.passwordErr}
                    passwordInputHandler={this.passwordInputHandler}/>
                <PasswordConf
                    passwordConfirmation={this.state.passwordConfirmation}
                    passwordConfirmationErr={this.state.passwordConfirmationErr}
                    passwordConfirmationInputHandler={this.passwordConfirmationInputHandler}/>
                <button type="submit"> Sing Up </button>
        </form> 
        )
    }
}

  
   

export default Form;