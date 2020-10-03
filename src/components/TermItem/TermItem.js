import React, { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Item = ({ link, children, last, ...props }) => {
  if (!link) return <li {...props}>{children}</li>

  return (
    <Link to={link} {...props}>
      {children}
    </Link>
  )
}

const TermItem = ({ className = "", terms, name }) => {
  if (!terms) return null

  if (typeof terms === "string") {
    const splitTerms = terms.split(",")
    return (
      <li>
        {`${name}: `}
        <ul className={className}>
          {splitTerms.map((name, i) => {
            if (splitTerms.length === i + 1) {
              return <Item key={i}>{name}</Item>
            }

            return (
              <Fragment key={i}>
                <Item>{`${name},`}</Item>{" "}
              </Fragment>
            )
          })}
        </ul>
      </li>
    )
  }
  return (
    <li>
      {`${name}: `}
      <ul className={className}>
        {terms.map(({ link, name, id }, i) => {
          if (terms.length === i + 1) {
            return (
              <Item link={link} key={id}>
                {name}
              </Item>
            )
          }

          return (
            <Fragment key={id}>
              <Item link={link}>{`${name},`}</Item>{" "}
            </Fragment>
          )
        })}
      </ul>
    </li>
  )
}

TermItem.propTypes = {
  className: PropTypes.string,
  terms: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    PropTypes.string,
  ]),
  name: PropTypes.string.isRequired,
}

export default TermItem
