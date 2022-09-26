import Request from './index'

const fetchData = async () => {
  const res = await Request.get('/user')
}

const updateUserInfo = async () => {
  const res = await Request.post('/updateUserInfo?id=1', { username: 'xiaohu' })
}

const submitForm = async () => {
  const res = await Request.post('/updateUserInfo?id=1', { username: 'xiaohu' }, { isFormData: true })
}