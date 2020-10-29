import React from 'react';

//Importação das animações e das estilizações
import {HomeContainer, Animation, GalleryAnimation, Letreiro, Letters} from './Home-styles';
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
            </GalleryAnimation>
        </HomeContainer>
    );
}
export default Home;