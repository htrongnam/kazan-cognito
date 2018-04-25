import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { Router } from 'express';

export default () => {
    let cognito = Router();
    
    let poolData = {
        UserPoolId : 'us-west-2_NlW2i06qS', // Your user pool id here
        ClientId : '1373jlkotcu55hulbhjh5v0gt7' // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    
    let attributeList = [];
    
    let dataEmail = {
        Name : 'email',
        Value : 'namhoang.khmt@gmail.com'
    };
    
    let dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+15555555555'
    };

    let dataPassword = {
        Name: 'password',
        Value: 'P@ss1wrd'
    }

    let dataUsername = {
        Name: 'username',
        Value: 'namhoang'
    }

    let dataEmailVerified = {
        Name: 'email_verified',
        Value: 'true'
    }

    let attributeEmail = new CognitoUserAttribute(dataEmail);
    let attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    let attributePassword = new CognitoUserAttribute(dataPassword);
    let attributeUsername = new CognitoUserAttribute(dataUsername);
    let attributeEmailVerified = new CognitoUserAttribute(dataEmailVerified);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributePassword);
    attributeList.push(attributeUsername);
    attributeList.push(attributeEmailVerified);

    userPool.signUp('username', 'password', attributeList, undefined, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    })
    return cognito;
}