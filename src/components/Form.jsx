const Form = ({currentQuestion}) =>{
    return(
        <form>
  <div className="mb-3">
    <h3>Question</h3>
    <p>{currentQuestion.text}</p>
    <label htmlFor="question" className="form-label">
    </label>
    <input
      type="text"
      className="form-control"
      id="question"
      aria-describedby="question"
    />
  </div>


  <button type="button" className="btn btn-primary">
    Next
  </button>
  <button type="button" className="btn btn-primary">
   Preview
  </button>
  <button type="button" className="btn btn-danger">
   Submit
  </button>
</form>

    )
}

export default Form;