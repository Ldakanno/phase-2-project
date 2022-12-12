

const Comment = () => {
  return (
    <div>
      <form style= {{margin: "3rem"}}>
        <label>Comment:
          <input type="text" name="comment" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Comment