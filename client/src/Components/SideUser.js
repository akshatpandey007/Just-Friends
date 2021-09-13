import React, { useState } from 'react'

export const SideUser = ({user,status}) => {

    const [connectionStatus, setconnectionStatus] = useState('sendRequest')


    const onButtonClick = () =>{
        if(connectionStatus === 'sendRequest'){
            setconnectionStatus('RequestSent')
            //send friend request... (=><=) 
        }else if(connectionStatus === 'RequestSent'){
            setconnectionStatus('sendRequest')
            //api magic
        }else if(connectionStatus === 'AcceptRequest'){
            setconnectionStatus('friends')
        }
    }

    const buttonStatus = {  
                            friends :       <button className="btn btn-outline-success">Friends</button>,
                            sendRequest :   <button className="btn btn-outline-warning" onClick={onButtonClick}>Send Request</button>,
                            RequestSent :   <button className="btn btn-light" onClick={onButtonClick}>Request Sent</button>,
                            AcceptRequest : <button className="btn btn-red"  onClick={onButtonClick}>Accept Request</button>
                        }


    return (
        <div className="d-flex m-3 justify-content-between bg-light p-2 card flex-row">
            <div className="d-inline-block">{user.name}</div>
            <div className="d-inline-block"> { buttonStatus[connectionStatus] } </div>
        </div>
    )
}
