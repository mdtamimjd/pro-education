import React from 'react'
import eventCard from '../modules/LatestEventCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck,faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook,faGreaterThan } from '@fortawesome/free-solid-svg-icons';


const LatestEventCard = (props) => {
  // props have img,date,postType,title,discription,studyClass
  return (
      <div className={eventCard.cardItem}>
        <div><img className={eventCard.cardImg} src={props.img} alt="" /></div>
        <div className={eventCard.cardContent}>
          <div className={eventCard.cardDate}>
            <span>
            <FontAwesomeIcon icon={faCalendarCheck} className={eventCard.color} />
            <p>{props.date}</p>
            </span>
            <span>
            <FontAwesomeIcon icon={faUser} className={eventCard.color}  />
            <p>{props.postType}</p>
            </span>
          </div>
          <h2 className={eventCard.headerh2}>{props.title}</h2>
          <p className={eventCard.pragraph}>{props.discription}</p>
          <div className={eventCard.footerItem}>
            <span><FontAwesomeIcon icon={faBook} className={eventCard.color} />
            <p className={eventCard.link}>{props.studyClass}</p>
            </span>
          <span className={eventCard.link}>
          <p>Read More</p>
          <FontAwesomeIcon icon={faGreaterThan} />  
          </span>  
          </div>          
        </div>
      </div>
  )
}

export default LatestEventCard
