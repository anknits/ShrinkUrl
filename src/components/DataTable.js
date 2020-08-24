import React from "react";
import Table from "react-bootstrap/Table";

export const DataTable = (props) => {
  const { rows } = props;
  return (
    <Table striped bordered hover size="sm">
      <thead className="text-center">
        <tr>
          <th>Full URL</th>
          <th>Short URL</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <a href={row.full} target="_blank" rel="noopener noreferrer">{row.full}</a>
                </td>
                <td>
                  <a href={row.short} target="_blank" rel="noopener noreferrer">{row.short}</a>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </Table>
  );
}