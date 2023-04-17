import "./newpost.scss";
import React, { useState } from "react";
import axios from "axios";

function NewPost() {
  const [caption, setCaption] = useState("");
  const [media, setMedia] = useState(null);
  const [eventType, setEventType] = useState("");

  // define event handlers for input fields
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  // define function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("media", media);
    formData.append("eventType", eventType);

    try {
      const response = await axios.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response.data);
      // Do something after successful post creation
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="create-post-container" style={{ display: "flex" }}>
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          style={{ display: "inline-block", justifyItems: "center" }}
        >
          <div className="form-group">
            <label htmlFor="caption">Caption</label>
            <input
              type="text"
              className="form-control"
              id="caption"
              placeholder="Enter a caption"
              value={caption}
              onChange={handleCaptionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="media">Media</label>
            <input
              type="file"
              className="form-control-file"
              id="media"
              onChange={handleMediaChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventType">Event Type</label>
            <select
              className="form-control"
              id="eventType"
              value={eventType}
              onChange={handleEventTypeChange}
            >
              <option value="">Select an event type</option>
              <option value="event">Event</option>
              <option value="birthday">Birthday</option>
              <option value="babyShower">Baby Shower</option>
              <option value="marriage">Marriage</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
      <div className="preview-container">
        <div className="preview-header">Preview</div>
        <div className="preview-body">
          <div className="user">
            <img className="user__image" src="https://picsum.photos/id/1018/400" alt="user" />
            <div className="user__details">
                <h3 className="user__name">Flen Fouleni</h3>
                
                <span className="post__date"> -9 days</span>
            </div>
          </div>
          {eventType ? <div className="preview-eventType">{eventType}</div> :<div className="preview-eventType">Event Type</div> }
          {media ? (
            <div className="preview-media">
              <img src={URL.createObjectURL(media)} alt="post media" />
            </div>
          ):(<div className="preview-media">
          <img src="https://picsum.photos/id/1018/400" alt="post media" />
        </div>)}
        {caption ? <div className="preview-caption">{caption}</div> :<div className="preview-caption">You insert your post details here</div> }
        </div>
      </div>
    </div>
  );
}

export default NewPost;
