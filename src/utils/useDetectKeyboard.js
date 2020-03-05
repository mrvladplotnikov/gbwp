import { useState, useLayoutEffect } from "react"

const useDetectKeyboard = () => {
  const [useKeyboard, setUseKeyboard] = useState(false)

  useLayoutEffect(() => {
    const detectKeyboard = event => {
      if (useKeyboard) return

      if (event.key === "Tab") {
        setUseKeyboard(true)
        document.querySelector("body").classList.add("keyboard")
      }
    }

    document.addEventListener("keydown", detectKeyboard, false)
    return () => {
      document.removeEventListener("keydown", detectKeyboard, false)
    }
  }, [useKeyboard])

  useLayoutEffect(() => {
    const detectMouse = () => {
      if (!useKeyboard) return

      setUseKeyboard(false)
      document.querySelector("body").classList.remove("keyboard")
    }

    document.addEventListener("click", detectMouse, false)
    return () => {
      document.removeEventListener("click", detectMouse, false)
    }
  }, [useKeyboard])

  return useKeyboard
}

export default useDetectKeyboard
