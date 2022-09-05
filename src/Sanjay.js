import {useState} from 'react';
function Profile() {
    const [loggedIn, setLoggedIn] = useState(2);
    // let loggedIn = 3;
    return(
        <div>
            {
                loggedIn==1?<h1>Welcome Sanjay</h1>
                :loggedIn==2?<h1>Welcome Jatin</h1>
                :<h1>Welcome Guest</h1>
            }
        </div>
    )
}

export default Profile;