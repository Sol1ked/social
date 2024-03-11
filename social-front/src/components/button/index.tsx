import React from "react"

type Props = {
  children: React.ReactNode
  icon: JSX.Element
  className: string
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  color?: string
}

export const Button: React.FC<Props> = ({
  children,
  icon,
  className,
  type,
  fullWidth,
  color,
}) => {
  return <div></div>
}
