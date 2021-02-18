import React from 'react';

//Importação das animações e das estilizações
import {HomeContainer, Animation, GalleryAnimation, Letreiro} from './Home-styles';
import {Link} from 'react-router-dom';
import './animation.css';
const Home = props =>{
    return(
        <HomeContainer>
            <Animation>
                <Letreiro>
                    <span>O Verdadeiro</span>
                    <span>Poder</span>
                    <span>do</span>
                    <span>CSS</span>
                </Letreiro>
            </Animation>
            <GalleryAnimation>
                Galeria das animações em reactjs
                <Link to="/animation1">Animation 1</Link>
            </GalleryAnimation>
        </HomeContainer>
    );
}
export default Home;