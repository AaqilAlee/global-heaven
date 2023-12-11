// import { getcotentModule } from "../../api/";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import parse from "html-react-parser";
 

const TeamDetails = ({id}) => {
  const router = useRouter();
  const [info, setInfo] = useState([]);

  const fetchTeamLead = () => {
    axios.get(`/content-module/${id}`).then((res) => {
      setInfo(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchTeamLead();
  }, []);

  return (
    <>
      <section id="company-review" className="About_milestone__C8Zak">
        <img className="" src="g" />
      </section>
      <section id="milestone" className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-6">
              <h2 className="font-calibri fw-bold">{info.item_name}</h2>
              <h4></h4>
              <p className="font-poppins justify">
                {parse(info.item_short_desc || "")}
              </p>
              <button
                className="btn customBtn"
                type="button"
                onClick={() => router.back()}
              >
                Click here to go back
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <img
                  style={{ objectFit: "unset" }}
                  src={
                    ResultData[0].item_image ? ResultData[0].item_image : "#"
                  }
                  alt={ResultData[0].item_name.toString()}
                  className="img-fluid img-size rounded-5"
                /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
