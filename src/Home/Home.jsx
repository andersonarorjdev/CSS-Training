import React from 'react';

//Importação das animações e das estilizações
import {HomeContainer, Animation, GalleryAnimation, Letreiro, GalleryName} from './Home-styles';
import {Link} from 'react-router-dom';
import './animation.css';
import './home.css'

const Home = props =>{
    return(
        <HomeContainer>
            <Animation>
                <Letreiro>
                    <span className="Letreiro">O Verdadeiro</span>
                    <span className="Letreiro">Poder</span>
                    <span className="Letreiro">do</span>
                    <span className="Letreiro">CSS</span>
                </Letreiro>
            </Animation>    
                <GalleryName>
                    Animations
                </GalleryName>
            <GalleryAnimation>
                <Link className="galleryButtons" to="/FlyingText">FlyingText    </Link>
            </GalleryAnimation>
        </HomeContainer>
    );
}
export default Home;