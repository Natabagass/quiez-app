import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import CardSoal from "./CardSoal";

const client = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
});

const PageSoal = () => {
  const [soal, setSoal] = useState([]);
  useEffect(() => {
    async function getSoal(){
      const response = await client.get();
      setSoal(response.data.results);
    }
    getSoal();
  }, []);

    return (
      <div>
        <CardSoal questions={soal} />
      </div>
    );
  }

export default PageSoal;
