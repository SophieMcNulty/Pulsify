import styles from '../styles/ModelCard.module.css';
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart, faCircleExclamation, faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function ModelCard(props) {
    const user = useSelector((state) => state.user.value)


    return (
        <button className={styles.listItemContainer}>
            <UserCard username={props.username} firstname={props.firstname} picture={props.picture} ></UserCard>
            <div className={styles.genre}>{props.genre}</div>
            <div className={styles.listItemPrompt}>{props.prompt}</div>
        </button>

    );
}

export default ModelCard;
