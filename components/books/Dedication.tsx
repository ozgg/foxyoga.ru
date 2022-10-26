const Dedication = (props: { text?: string }) => {
  const { text } = props

  if (!text) {
    return null
  }

  const dedication = {
    __html: text.replaceAll("\n", '<br/>')
  }

  return (
    <div className="dedication" dangerouslySetInnerHTML={dedication}></div>
  )
}

export default Dedication
