import React from 'react'
import cardStudent from '../modules/StudentSayingCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-regular-svg-icons';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
const StudentSayingCard = (props) => {
  return (
    <div className={cardStudent.body}>
      <div className={cardStudent.textContent}  >
        <FontAwesomeIcon icon={faQuoteLeft} className={cardStudent.icon} />
        <p className={cardStudent.comment}>{props.comment}</p>
      </div>
      <div className={cardStudent.info}>
        <img src={props.img} alt="" className={cardStudent.img} />
        <p className={cardStudent.name}>{props.name}</p>
        <p className={cardStudent.profession}>{props.profession}</p>
      </div>
    </div>
  )
}

export default StudentSayingCard
