const Popup = () => {
  return (
    <>
      {/* <div className="form_popup_container">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={saveMovieInfo}
        >
          <label>
            Rating:
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Place:
            <input
              type="text"
              value={place}
              // onChange={(e) => setPlace(e.target.value)}
              onChange={(e) => setPlace(e.target.value)}
            />
          </label>

          <label className="comment_container">
            Comment:
            <textarea
              rows={7}
              cols={2}
              value={comment}
              id="commentId"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <button onClick={() => setToggleModal(!toggleModal)}>Cancel</button>
      </div> */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>

      <button
        className="btn btn-primary"
        // onClick={() => callSaveTitle(details)}
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Edit
      </button>
    </>
  );
};

export default Popup;
