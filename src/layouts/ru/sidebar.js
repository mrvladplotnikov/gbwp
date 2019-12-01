import React from "react"
import Layout from "../SidebarLayout"
import { addLocaleData } from "react-intl"

import messages from "../../data/messages/ru"
import ru from "react-intl/locale-data/ru"
import "intl/locale-data/jsonp/ru"

addLocaleData(ru)

export default props => <Layout {...props} i18nMessages={messages} />
