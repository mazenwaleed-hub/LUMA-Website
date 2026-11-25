import { useState } from 'react'
import { CollectionBtn } from '../Button/CollectionBtn'
import './Nav.css'
export function Nav(){
    const [isOpen, setIsOpen] = useState(false)
    function click( section ){
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <nav>
            <h1>LUMA</h1>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <a onClick={() => click('HeroSection')} href="#">Home</a>
                <a onClick={() => click('collection')} href="#">Collections</a>
                <a onClick={() => click('About')} href="#">About</a>
                <a onClick={() => click('footer')} href="#">Contact</a>
            </div>
            < CollectionBtn text={"Explore Collection"}/>

            <p onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></p>
        </nav>
    )
}