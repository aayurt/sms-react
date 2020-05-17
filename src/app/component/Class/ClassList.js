import { Paper } from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Constant from "../../router/constant";
import AdTable from "../Table/Table";

export default function ClassList(params) {
  const [row, setRow] = useState([]);
  const [rowHead, setRowHead] = useState([]);
  const passRow = useCallback(() => row, [row]);
  const passRowHead = useCallback(() => rowHead, [rowHead]);
  const getRow = useMemo(() => ({ passRow, passRowHead }), [row, rowHead]);
  const baseUrl = Constant.baseUrl;

  useEffect(() => {
    async function fetchClass() {
      const fetchData = await fetch(`${baseUrl}` + "/class");
      const fetchData_json = await fetchData.json();
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
    fetchClass();
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
