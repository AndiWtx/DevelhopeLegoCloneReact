import React from "react";
import castle from './images/castle.jpg'
import club from './images/club.jpg'
import titanic from './images/titanic.jpg'
import eiffel from './images/eiffel.jpg'

export function TopBionicle() {
    return (
        <>
            <div className='topsellingcontainer'>
                <div className='topsellingtitle'><h3>Our top-selling exclusives</h3></div>
                <div className='firstcontainer'>
                    <a id='linkhover' href=''>
                        <div className='item-card'>
                            <img src={eiffel}/>
                            <h4> Lego eiffel tower</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vitae?</p>
                            <a>Shop now ></a>
                        </div>
                    </a>
                    <a id='linkhover' href=''>
                        <div className='item-card'>
                            <img src={club}/>
                            <h4> Lego eiffle tower</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vitae?</p>
                            <a>Shop now ></a>
                        </div>
                    </a>
                    <a id='linkhover' href=''>
                        <div className='item-card'>
                            <img src={titanic}/>
                            <h4> Lego eiffle tower</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vitae?</p>
                            <a>Shop now ></a>
                        </div>
                    </a>
                    <a id='linkhover' href=''>
                        <div className='item-card'>
                            <img src={castle}/>
                            <h4> Lego eiffle tower</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vitae?</p>
                            <a>Shop now ></a>
                        </div>
                    </a>
                </div>
            </div>

            <div className='preordercontainer'>
                <h2>Pre-order these sets now!</h2>
                <div className='twobigimages'>

                </div>
            </div>
        </>
    )
}