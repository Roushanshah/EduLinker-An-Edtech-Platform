import React from 'react'
import { FiTrash } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProfile } from '../../../../services/operations/SettingsAPI'

const DeleteAccount = () => {

  const {token} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try{
      dispatch(deleteProfile(token, navigate))
    } catch(error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <div>
      <div className="my-10 flex flex-row-reverse md:flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash className="text-3xl text-pink-200" />
        </div>
        <div className='flex flex-col space-y-2'>
          <h2 className="text-lg font-semibold text-richblack-5">Delete Account</h2>
          <div className="w-full md:w-3/5 text-pink-25">
            <p className='italic'>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
          type='button'
          className="w-fit cursor-pointer italic text-pink-300"
          onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount