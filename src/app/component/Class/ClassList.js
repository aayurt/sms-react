import { Paper } from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Constant from "../../router/constant";
import AdTable from "../Table/Table";
import { useWorker, WORKER_STATUS } from "@koale/useworker";
import greenlet from "greenlet";

export default function ClassList() {
  const [row, setRow] = useState([]);
  const [rowHead, setRowHead] = useState([]);
  const passRow = useCallback(() => row, [row]);
  const passRowHead = useCallback(() => rowHead, [rowHead]);
  const getRow = useMemo(() => ({ passRow, passRowHead }), [row, rowHead]);
  const baseUrl = Constant.baseUrl;

  // const fetchClass = async () => {
  //   console.log("baseUrl", baseUrl);
  //   const fetchData = await fetch(`${baseUrl}` + "/class");
  //   const fetchData_json = await fetchData.json();

  useEffect( () => {
    const getName = greenlet(async (baseUrl) => {
      const res = await fetch(`${baseUrl}` + "/class");
      const res_json = await res.json();
      return res_json;
    });
    async function fetchClass() {
    const fetchData_json = await getName(baseUrl);
    if (fetchData_json.response === "success") {
      setRow(fetchData_json.data);
      setRowHead([
        {
          id: "className",
          numeric: false,
          disablePadding: true,
          label: "name",
          width: "10px",
        },
        {
          id: "className",
          numeric: false,
          disablePadding: true,
          label: "Class Teacher",
        },
        {
          id: "className",
          numeric: false,
          disablePadding: true,
          label: "Total Students no.",
        },
        {
          id: "className",
          numeric: false,
          disablePadding: true,
          label: "Class Monitor",
        },
      ]);
    }
  }
    fetchClass()
  }, []);

  return (
    <>
      <center>ClassList</center>
      <br />
      <Paper elevation={2} style={{ background: "#E9EBEE" }}>
        <AdTable pass={getRow} passlabel="CLASS" />
      </Paper>
    </>
  );
}
