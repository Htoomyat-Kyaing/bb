const Table2 = ({ data }) => {
  if (data) {
    // console.log(data);
    const keys = Object.keys(data);
    const headers = keys.map((key) => <th>{key}</th>);
    const rows = keys.map((key) => <td>{data[key]}</td>);
    return (
      <table>
        <thead>
          <tr>${headers}</tr>
        </thead>
        <tbody>
          <tr>${rows}</tr>
        </tbody>
      </table>
    );
  }
};

export default Table2;
