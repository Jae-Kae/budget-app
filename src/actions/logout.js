// rrd imports
import { redirect } from 'react-router-dom'

// helpers
import { deleteItem } from '../helpers'
// library
import { toast } from 'react-toastify'

export const logoutAction = async () => {
  // delete the user
  deleteItem({
    key: 'userName',
  })
  toast.success("You've deleted your account!")

  // return redirect
  return redirect('/')
}
