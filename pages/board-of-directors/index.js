import Image from "next/image";
import Row from "react-bootstrap/Row";
import Directors from "../../public/bod/Banner.png";
import { useRouter } from "next/router";
import Head from "next/head";
import { makeTitle } from "../../utils/helpers";
import React, { Fragment, useEffect, useState } from "react";
import axios from "../../utils/axios";
import { getStoragePath } from "../../utils/helpers";
import parse from "html-react-parser";
import Link from "next/link";

const BoardOfDirectors = () => {
  const router = useRouter();
  const [info, setInfo] = useState([]);
  const [member, setMember] = useState([]);
  const [bod, setBod] = useState([]);

  const fetchTeamLead = () => {
    axios.get(`/content-module/18`).then((res) => {
      setInfo(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchTeamLead();
  }, []);

  const fetchMemberPerson = () => {
    axios.get(`/content-module/19`).then((res) => {
      setMember(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchMemberPerson();
  }, []);

  const fetchBoardofDirectors = () => {
    axios.get(`/content-module/1`).then((res) => {
      setBod(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchBoardofDirectors();
  }, []);

  console.log(bod);

  return (
    <Fragment>
      <Head>
        <title>{makeTitle("Board of Directors")}</title>
      </Head>
      <section>
        <div className="">
          <Image src={Directors} alt="" className="bod-img" />
        </div>
        <div className="container-bod">
          <h1 className="bod-page-title text-capitalize font-40 fw-bold text-center py-5 font-lato">
            Corporate Office Organogram
          </h1>

          {/* Chirman */}
          <div className="d-flex justify-content-center mb-5">
            {info.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-4 col-md-4 mb-4">
                    <div className="text-center">
                      <Link href={`/organogram/${curElem.id}`}>
                        <img
                          src={getStoragePath(curElem.item_image)}
                          alt=""
                          className="rounded leadership-team"
                        />
                      </Link>
                      <h2 className="font-20 fw-bold pt-2 pb-1">
                        {curElem.item_name}
                      </h2>

                      <p className="position-relative pt-1">
                        {parse(curElem?.item_short_desc || "")}

                      
                      <p className="">
                        {parse(curElem?.item_deg_desc || "")}
                      </p>
                      
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="" style={{ paddingBottom: "30px" }}>
            <Row className="d-flex justify-content-md-center">
              {bod?.map((curElem, key) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
                      <div className="text-center">
                        <img
                          src={getStoragePath(curElem.item_image)}
                          alt=""
                          className="rounded new-team-member"
                        />
                        <h2 className="font-20 fw-bold pt-2 pb-1">
                          {curElem.item_name}
                        </h2>
                        <p className="about_titledesign position-relative pt-2">

                          {parse(curElem?.item_short_desc || "")}
                        </p>

                       
                      <p className="">
                        {parse(curElem?.item_deg_desc || "")}
                      </p>

                      </div>
                    </div>
                  </>
                );
              })}
            </Row>
          </div>

          <h1 className="text-capitalize font-40 fw-bold text-center py-5 font-lato">
            Tele Sales
          </h1>

          <div className="row">
            {member?.map((curElem, key) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
                    <div className="text-center">
                      <img
                        src={getStoragePath(curElem.item_image)}
                        alt=""
                        className="rounded new-team-member"
                      />
                      <h2 className="font-20 fw-bold pt-2 pb-1">
                        {curElem.item_name}
                      </h2>
                      <p className="about_titledesign position-relative pt-2">
                        {curElem?.item_short_desc || ""}
                      </p>
                      <p className="">
                        {parse(curElem?.item_deg_desc || "")}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>  
      </section>
    </Fragment>
  );
};

export default BoardOfDirectors;
