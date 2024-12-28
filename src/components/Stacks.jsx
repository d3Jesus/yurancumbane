
const Stacks = ({ tools }) => {
  return (
    <>
        {tools.map((stack) => (
            <span key={stack} className="badge"> {stack} </span>
        ))}
    </>
  )
}

export default Stacks