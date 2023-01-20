import React, { useState, useEffect } from "react";

const Csv = () => {
    const [csvinput, setCsvInput] = useState([]);
    const [columns, setColumns] = useState([]);
    const [codetoenglish, setCodetoenglish] = useState([]);
    const [topCompany, setTopCompany] = useState([]);
    const [fundedCompany, setFundedCompany] = useState([]);
    const [companyCount, setCompanyCount] = useState([]);
    const [monthFunding, setMonthFunding] = useState([]);
    const [stages, setStages] = useState([]);
    const [funding, setFunding] = useState([]);

    useEffect(() => {
        (async () => {
          let postCsvInput;
          let postColumns;
          let postEnglish;
          let postTopCompany;
          let postFundedCompany;
          let postCompanyCount;
          let postMonthFunding;
          let postStages;
          let postFunding;

          let token = sessionStorage.getItem("token");
          try {
            let responseCsv = await fetch(
              "http://csvshow.pythonanywhere.com/visualapp/csvinput/",
              {
                method: "GET",
                headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
            let responseColumns = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/columns/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseEnglish = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/columns/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseTopCompany = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/Top25Fundedcompanybargraphapi/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseFundedCompany = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/statefundedcompanycountPIE/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseCompanyCount = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/companycountpermonthBARAPI/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseMonthFunding = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/monthwisefundingPIE/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseStages = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/stagesectormixPIE/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              let responseFunding = await fetch(
                "http://csvshow.pythonanywhere.com/visualapp/Fundingperregionbargraphapi/",
                {
                  method: "GET",
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
            postCsvInput = await responseCsv.json();
            postColumns = await responseColumns.json();
            postEnglish = await responseEnglish.json();
            postTopCompany=await responseTopCompany.json();
            postFundedCompany=await responseFundedCompany.json();
            postCompanyCount=await responseCompanyCount.json();
            postMonthFunding=await responseMonthFunding.json();
            postStages=await responseStages.json();
            postFunding=await responseFunding.json();
            console.log(postCsvInput);
            console.log(postColumns);
            console.log(postEnglish);
            console.log(postTopCompany);
            console.log(postFundedCompany);
            console.log(postCompanyCount);
            console.log(postMonthFunding);
            console.log(postStages);
            console.log(postFunding);
          } catch (error) {
            console.log("Error" + error);
            postCsvInput = [];
            postColumns =[];
            postEnglish=[];
            postTopCompany=[];
            postFundedCompany=[];
            postCompanyCount=[];
            postMonthFunding=[];
            postStages=[];
            postFunding=[];
          }
          setCsvInput(postCsvInput);
          setColumns(postColumns);
          setCodetoenglish(postEnglish);
          setTopCompany(postTopCompany);
          setFundedCompany(postFundedCompany);
          setCompanyCount(postCompanyCount);
          setMonthFunding(postMonthFunding);
          setStages(postStages);
          setFunding(postFunding);
        })();
      }, []);

  return (
    <>
    <div>Csv</div>
    </>
  )
}

export default Csv