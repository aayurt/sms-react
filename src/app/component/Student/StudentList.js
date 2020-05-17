import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Paper } from "@material-ui/core";
import AdTable from "../Table/Table";
import Constant from "../../router/constant";
export default function StudentList(params) {
  const [row, setRow] = useState([]);
  const [rowHead, setRowHead] = useState([]);
  const passRow = useCallback(() => row, [row]);
  const passRowHead = useCallback(() => rowHead, [rowHead]);
  const getRow = useMemo(() => ({ passRow, passRowHead }), [row, rowHead]);
  const baseUrl = Constant.baseUrl;
  console.log("Student List");

  useEffect(() => {
    async function fetchStudent() {
      const fetchData = await fetch(`${baseUrl}` + "/student");
      const fetchData_json = await fetchData.json();
      if (fetchData_json.response === "success") {
        setRow(fetchData_json.data);
        setRowHead([
          {
            id: "firstName",
            numeric: false,
            disablePadding: true,
            label: "First Name",
            width: "10px",
          },
          {
            id: "lastName",
            numeric: false,
            disablePadding: true,
            label: "Last Name",
          },
          {
            id: "address",
            numeric: false,
            disablePadding: true,
            label: "Address",
          },
          {
            id: "phone_no",
            numeric: false,
            disablePadding: true,
            label: "Phone Number",
          },
        ]);
      }
    }
    fetchStudent();
  }, []);
  return (
    <>
      <center>Student Lists</center>
    </>
  );
}
