const Contact = () => {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" name="value" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <input name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Contact
