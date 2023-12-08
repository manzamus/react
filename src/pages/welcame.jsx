import React from 'react';
import Hearder from '../components/hearder';
import Home from '../components/home'
import Card from '../components/Card';
import Juice from '../assets/juice.jpeg';
import Egg from '../assets/egg.jpeg';
import Cook from '../assets/cook.jpeg'
import { Carousel } from 'antd';
import Button from '../components/Button';
import News from '../assets/constant/News.json'
import '../sass/main.scss';



function Welcome() {
    return (
        <div className='welcome-container'>
            <Hearder />
            <Home />
             <div className='card-container'>
             <Card image={Juice} name="juice"price={200} big="twige gukora juice" />
             <Card image={Egg} name="egg" price={100} big="uyu mureti uraryoshye"/>
             <Card image={Cook} name="Cook" price={250} big="twige guteka neza"/>
             </div>
             
            <Carousel autoplay={true} autoplaySpeed={3000}>
                <div className='bgImage' >
                    <img src="https://bwiza.com/IMG/jpg/tom-cruise-s-rural-retreat-in-colorado-59-million.jpg"alt='' />
                    <div className='prag'>
                    <p>iyinzu ni ya Tom Cruise</p>
                    </div>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>

                </div>

                <div className='bgImage' >
                    <img src="https://bwiza.com/IMG/jpg/george-clooney-s-18th-century-villa-in-lake-como-100-million.jpg" alt='' />
                    <p1>kuruhukira murihoteri  ni byiza</p1>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>

                <div className='bgImage' >
                    <img src="https://bwiza.com/IMG/jpg/george-lucas-californian-ranch-100-million.jpg" alt='' />
                    <p>Murikubona ubwiza bwinzu</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>
            </Carousel>
           <News />
        </div>

    )
    
}

    
export default Welcome;