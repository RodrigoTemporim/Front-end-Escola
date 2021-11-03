import React from "react";
import './index.css';

const Loc: React.FC = () =>{
    return(
        <div>
            <h1 className='center'>Localização</h1>
            <br/>
            <span id='mapa'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4435.571614100117!2d-47.88747588033766!3d-15.796075771820483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x935a3ae3f93bcf8b%3A0x15a23e6a217dad7d!2sEstacionamento%2C%20St.%20Hoteleiro%20Sul%20Q.%201%20-%20Asa%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2070297-400!3m2!1d-15.794616399999999!2d-47.8869721!5e0!3m2!1sen!2sbr!4v1635949783668!5m2!1sen!2sbr" width="800" height="600" loading="lazy"></iframe>        
            </span>
            </div>
    );
}

export default Loc;