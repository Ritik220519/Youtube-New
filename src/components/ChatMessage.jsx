

const ChatMessage = ({name , message}) => {

  return (
    <div className='flex items-start p-2 shadow-sm  rounded-lg '>
      <img className='w-8 rounded-3xl' src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="user-icon" />
    
      <span className='text-gray-500 px-2 text-md font-bold '>{name}</span>
      <p className='px-2 text-sm'>{message}</p>
    </div>
  )
}

export default ChatMessage
