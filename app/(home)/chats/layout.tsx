import React from 'react'

const chatsLayout = ({userDetails , userChats} : {userDetails: React.ReactNode , userChats : React.ReactNode}) => {
  return (
    <div>
          <div>
              {userDetails}
          </div>
          <div>
              {userChats}
          </div>
        this is a chats layout main
    </div>
  )
}

export default chatsLayout
