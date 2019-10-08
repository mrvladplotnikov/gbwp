import React, { useState, useEffect } from "react"
import { UK } from "../utils/langs"

const defaultState = {
  lang: UK,
  changeLang: () => {},
}
const LangContext = React.createContext(defaultState)

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(UK)

  useEffect(() => {
    const localLangCode = JSON.parse(localStorage.getItem("lang"))
    if (localLangCode) setLang(localLangCode)
  }, [])

  const changeLang = langCode => {
    setLang(langCode)
    localStorage.setItem("lang", JSON.stringify(langCode))
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        changeLang,
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

const withLang = Component => props => (
  <LangContext.Consumer>
    {context => <Component {...props} {...context} />}
  </LangContext.Consumer>
)

export default LangContext
export { LangProvider, withLang }
