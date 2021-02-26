import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

const Button = ({
  type,
  className,
  children,
  to,
  href,
  onClick,
  containerProps,
  showArrow,
  arrowPosition,
  fullWidth,
  ...props
}) => {
  const { language } = useI18next()

  const Icon = () =>
    arrowPosition === "bottom" ? (
      <div className={styles.buttonArrowContainer} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="9"
          fill="none"
          className={styles.buttonArrow}
        >
          <path stroke="#747474" d="M0 4.5h72m0 0L67.5 1M72 4.5L67.5 8" />
        </svg>
      </div>
    ) : (
      <svg
        width="9"
        height="48"
        viewBox="0 0 9 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.buttonRightArrow}
      >
        <path
          d="M4.5 0.5L4.5 46.5M4.5 46.5L8 42.6006M4.5 46.5L0.999998 42.6006"
          stroke="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="5"
            y1="-1.5"
            x2="5"
            y2="47.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F23A0C" />
            <stop offset="1" stopColor="#0DA6F2" />
          </linearGradient>
        </defs>
      </svg>
    )

  if (href) {
    return (
      <div
        className={classNames(
          styles.container,
          {
            [styles.fullWidth]: fullWidth,
            [styles.arrowRight]: arrowPosition === "right",
          },
          className
        )}
        {...containerProps}
      >
        <a className={styles.Button} href={href} {...props}>
          {children}
        </a>
        {showArrow && <Icon />}
      </div>
    )
  }

  if (to) {
    return (
      <div
        className={classNames(
          styles.container,
          {
            [styles.fullWidth]: fullWidth,
            [styles.arrowRight]: arrowPosition === "right",
          },
          className
        )}
        {...containerProps}
      >
        <Link className={styles.Button} to={to} language={language} {...props}>
          {children}
        </Link>
        {showArrow && <Icon />}
      </div>
    )
  }

  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.fullWidth]: fullWidth,
          [styles.arrowRight]: arrowPosition === "right",
        },
        className
      )}
      {...containerProps}
    >
      <button
        type={type}
        className={styles.Button}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      {showArrow && <Icon />}
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  containerProps: PropTypes.object,
  showArrow: PropTypes.bool,
  arrowPosition: PropTypes.oneOf(["bottom", "right"]),
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  type: "button",
  href: "",
  to: "",
  children: "",
  onClick: () => {},
  containerProps: {},
  showArrow: true,
  arrowPosition: "bottom",
  fullWidth: false,
}

export default Button
