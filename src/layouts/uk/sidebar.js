import React from "react"
import Layout from "../SidebarLayout"
import { addLocaleData } from "react-intl"

import messages from "../../data/messages/uk"
import uk from "react-intl/locale-data/uk"
import "intl/locale-data/jsonp/uk"

addLocaleData(uk)

export default props => <Layout {...props} i18nMessages={messages} />
