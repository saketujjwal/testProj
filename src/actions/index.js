import * as contact from './contact';
import * as addNewCOntact from './addNewContact'
import * as login from './login'

export default {
    ...contact,
    ...addNewCOntact,
    ...login
}