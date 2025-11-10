import React from "react";

const ChatsLayout = ({
  userDetails,
  userChats,
  login,
}: {
  userDetails: React.ReactNode;
  userChats: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn : boolean = false; // Replace with real login state later

  return (
    <>
      {isLoggedIn ? (
        <div className="flex h-screen bg-gray-100 text-gray-900">
          {/* Sidebar */}
          <div className="w-1/4 border-r border-gray-300 bg-white p-4 overflow-y-auto shadow-sm">
            {userDetails}
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="flex-1 p-4 overflow-y-auto">{userChats}</div>
            <div className="p-4 border-t border-gray-200 text-sm text-gray-500 text-center">
              This is a Chats Layout Main
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700">
          {login}
        </div>
      )}
    </>
  );
};

export default ChatsLayout;
