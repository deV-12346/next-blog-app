import React from 'react'

const EmailTableItems = ({id,email,date,deleteEmail}) => {
  return (
      <tr className='border-b-2 text-center'>
        <td className='py-2 whitespace-nowra'>
            {email || "No email"}
        </td>
        <td className='hidden sm:block py-2'>
            {new Date(date).toDateString()}
        </td>
        <td className='py-2 cursor-pointer' onClick={()=>deleteEmail(id)}>
            X
        </td>
      </tr>
  )
}

export default EmailTableItems