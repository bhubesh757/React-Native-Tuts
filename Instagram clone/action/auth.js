import auth from '@react-native-firebase/auth'
// import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'
import Snackbar from 'expo-snackbar';


export const signUp = (data) => async (dispach) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');

    const {name , isntaUserName , bio , email , password , country , image} = data;

    auth.createUserWithEmailAndPassword(email , password)
    .then((data) => {
        console.log(data);
        console.log('User creation was success');
    })
    .catch((error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        Snackbar.show({
            text : 'SignUp Failed',
            textColor : 'white',
            backgroundColor : 'red'
        })
    })

}



export const signIn = (data) => async((dispatch) => {
    console.log(data)

    const {email , password} = data


    auth().signInWithEmailAndPassword(email , password)
    .then(() => {
        console.log('sign in success');
        Snackbar.show({
            text : 'account',
            textColor : 'white',
            backgroundColor : '#1b262c'
        })
    })
    .catch(
        (error) => {
            console.error(error)
            Snackbar.show({
                text :'Sign In Failed',
                textColor : 'white',
                backgroundColor : 'red'
            })
        }
    )

}) 