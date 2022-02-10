import React, { useState } from "react";
import data from "../components/data";
import Modal from "../components/Modal";

const Courses = () => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (img, title, desc, detail, video) => {
    let tempData = [img, title, desc, detail, video];
    setTempData((item) => [1, ...tempData]);
    return setModal(true);
  };
  return (
    <div className="courses row" style={{ minHeight: "100vh" }}>
      {data.cardData.map((item, index) => {
        return (
          <div className="card p-0 overflow-hidden h-100 shadow" key={index}>
            <img src={item.imgSrc} className="card-img-top" alt="pictures" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <button
                href="#"
                className="btn btn-primary"
                onClick={() =>
                  getData(
                    item.imgSrc,
                    item.title,
                    item.desc,
                    item.detail,
                    item.video
                  )
                }
              >
                詳細內容
              </button>
            </div>
          </div>
        );
      })}
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          desc={tempData[3]}
          detail={tempData[4]}
          video={tempData[5]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Courses;
