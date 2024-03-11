import React from "react"

type PropsChildren = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<PropsChildren> = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto mt-10">{children}</div>
}
