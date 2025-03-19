function superbowlWin(records) {
    // Use the find() method to locate the first record with result "W"
    const winningRecord = records.find(record => record.result === "W");
  
    // If a winning record is found, return the year; otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  const record = [
    { year: 2018, result: "L" },
    { year: 2017, result: "W" },
    { year: 2016, result: "N/A" }
  ];
  
  console.log(superbowlWin(record));