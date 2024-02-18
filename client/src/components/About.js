import styles from "./About.module.scss";
import React from 'react'
import image1 from '../images/image-mockups.png';

const About = () => {
    return (
        <div className={styles.section_about}>
            <div className={styles.about_left}>
                <h2>Next generation digital banking</h2>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
            <div className={styles.about_right}>
                <img src={image1} alt="img" />
            </div>
        </div>
    )
}

export default About;