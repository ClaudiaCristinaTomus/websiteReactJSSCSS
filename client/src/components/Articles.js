import styles from "./Articles.module.scss";
import React from 'react'
import imageA from '../images/image-currency.jpg'
import imageB from '../images/image-restaurant.jpg'
import imageC from '../images/image-plane.jpg'
import imageD from '../images/image-confetti.jpg'
const Articles = () => {
    return (
        <div className={styles.contentArticles}>
            <h2>Latest Articles</h2>
            <div class={styles.card}>
                <div className={styles.cardArticle}>
                    <img src={imageA} alt="money" />
                    <h5>By Claire Robinsson</h5>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>

                </div>
                <div className={styles.cardArticle}>
                    <img src={imageB} alt="money" />
                    <h5>By Claire Robinsson</h5>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>

                </div>
                <div className={styles.cardArticle}>
                    <img src={imageC} alt="money" />
                    <h5>By Claire Robinsson</h5>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>

                </div>
                <div className={styles.cardArticle}>
                    <img src={imageD} alt="money" />
                    <h5>By Claire Robinsson</h5>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>

                </div>
            </div>

        </div>
    )
}

export default Articles