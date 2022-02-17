const Button = ({ className, children, variant, href, submit }) => {
  const addClasName = className ? `${className} ` : ''
  const variants = {
    white: 'bg-white text-black ',
    primary: 'bg-primary text-white ',
  }
  const baseStyling =
    'transition py-3.5 px-7 rounded-full font-semibold text-lg inline-block '
  const pickedVariant = variants[variant]
  const mergedStyle = `${baseStyling} ${pickedVariant} ${addClasName}`
  return (
    <>
      {submit ? (
        <button className={mergedStyle} type="submit">
          {children}
        </button>
      ) : (
        <a className={mergedStyle} href={href ? href : '#'}>
          {children}
        </a>
      )}
    </>
  )
}

export default Button
