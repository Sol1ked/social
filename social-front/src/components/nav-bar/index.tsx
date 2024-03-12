import React from "react"
import { NavButton } from "../nav-button"
import { BsPostcard } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { FaUser } from "react-icons/fa"

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton icon={<BsPostcard />} href={"/"}>
            Посты
          </NavButton>
        </li>
        <li>
          <NavButton icon={<FiUsers />} href={"following"}>
            Подписки
          </NavButton>
        </li>
        <li>
          <NavButton icon={<FaUser />} href={"followers"}>
            Подписки
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}
