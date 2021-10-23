import { useHistory } from 'react-router-dom';

export const Contactus = () => {
    const history = useHistory();
    const handleClick = () => history.push('/users');

    return (
        <>
            <h1>ContactUS-Page</h1>
            <form action="">
                <input type="email" placeholder=" enter your email" /> <br /> <br />
                <input type="text" placeholder="leave your message" /> <br />
              
               <br></br>
                <button type="button" onClick={handleClick} >Submit</button>
            </form>
        </>
    );
};