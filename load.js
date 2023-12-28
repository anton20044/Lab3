import http from 'k6/http'
import { check} from 'k6'

export default function () {
  const data = { host: 'weather24' }
  let res = http.post('http://91.185.85.213/Cities', data)

  check(res, { 'success login': (r) => r.status === 200 })

}
