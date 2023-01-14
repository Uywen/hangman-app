import React from 'react'


// if the user enters the letter more than twie this function will run
export const Notification = ({showNotification}) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : " "}`}>
    <p>You have already entered this letter</p>
    </div>
  )
}
