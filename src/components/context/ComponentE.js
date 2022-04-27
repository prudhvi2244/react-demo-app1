import React, {useContext} from 'react'
import { ChannelContext, UserContext } from '../../App'
export default function ComponentE() {
  
  let user=useContext(UserContext)
  let channel=useContext(ChannelContext)
  return (
    <div>
        <h4>ComponentE</h4>
        <hr/>
        <h5>Username : {user}</h5>
        <h5>Channel Name : {channel}</h5>
    </div>
  )
}
